import React from 'react'
import getConfig from 'next/config'

import { connect } from 'react-redux'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import InspectionDropdown from '../partials/single-inspection-dropdown.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import InspectionListItem from '../partials/single-inspection-list-item.js'
import CallEmail from '../partials/call-email.js'
import DownCaret from '../public/static/svg/caret-down.svg'


const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


//https://tciiapp.propernoun.co/wp-json/wp/v2/acf-field-group?per_page=100

class InspectionList extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	inspectionSections:[],
	    	allListSectionQuestions: [],
	    	propertyTitle: '',
	    	isLoading: true,

	    };
	}

	static async getInitialProps({ store, isServer, pathname, query, asPath, req, res }) {
	
	    return{
	    	slug: req.params.slug,
	    	path: req.url
	    }
	}

	componentDidMount(){
	
		let inspectionSections = [];
		let allListItems = [];
		let test = 0;


		fetch(publicRuntimeConfig.api_base + 'property_inspections?slug=' + this.props.slug)
	  	.then(res => {					  			  								
			return res.json()
	  	})		
	  	.then(json => {
	  		

			let fieldGroupData = json[0].acf			
		
			this.setState({
				propertyTitle: fieldGroupData.inspection_property.post_title
			})
		
			for(var property in fieldGroupData){
			
				

				if(property.includes('inspect')){				
					test++;			
			
					console.log(property)

					inspectionSections.push({
						title: property.replace(/_/g, ' '),
						slug: property
					})

					console.log(inspectionSections)
									
					for(var section_question in fieldGroupData[property]){					

						let questionData = {
							section: property,
							name: section_question,
							label: section_question.replace(/_/g, ' '),
							status: fieldGroupData[property][section_question].status
						};
						
						allListItems.push(questionData)	
										
					}
								
				}
			}

			let currentSections = allListItems.filter(function (item) {			
				return item.section == inspectionSections[0].slug ;
			});

			// console.log(currentSections)			

			this.props.dispatch(
	    	{ 
		    		type: "CURRENT_INSPECTION_SECTION", 
		    		payload: inspectionSections[0].title
		    	}	    	
		    )

		    this.props.dispatch(
	    	{ 
		    		type: "INSPECTION_SECTIONS", 
		    		payload: inspectionSections
		    	}	    	
		    )

		    this.props.dispatch(
		    	{
		    		type: "DROPDOWN_STATUS",
		    		payload: ""
		    	}	    	
		    )
		    this.props.dispatch(
		    	{
		    		type: "CURRENT_INSPECTION_SECTION_FIELDS",
		    		payload: currentSections
		    	}	    	
		    )
		    this.props.dispatch(
		    	{
		    		type: "ALL_SECTION_QUESTIONS",
		    		payload: allListItems		    		
		    	}	    	
		    ) 

		})	  				  	
		.then(json => this.setState(
			{ 	      					      					
				inspectionSections: inspectionSections,
				isLoading: false      					
			}		      				      				
		))
		

		 	 
	}

	render() {		
	
		const changeDropState = () => this.props.dispatch({ 
				type: "DROPDOWN_STATUS",
				payload: "active"
			});

		const closeSidebar = () => this.props.dispatch({ 
				type: "DROPDOWN_STATUS",
				payload: ""
			});

		return <div className="new-inspection page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>
					<div className="container">		

						{
							this.state.isLoading ?
							<div className="block-loading">
								<div className="loader"></div>
							</div>							
							:	
							<div>
								<PageTitle title={this.state.propertyTitle} />										
						
								<div className="text-center">
									<h3 className="subtitle">January 12, 2020 Inspection</h3>
								</div>

								<div className="inspection-dropdown-container page-dropdown-container topmargin-3">
									<button className={`page-dropdown`} onClick={changeDropState}>						
										<div className="inspection-section dropdown-section">
											x
										</div>
										<div className="inspection-section selected-title">
											{this.props.inspections.currentInspectionSection}
										</div>
										<div className="drop-icon">
											<DownCaret />
										</div>
									</button>
									<div onClick={closeSidebar} className={`bg ${this.props.navigation.dropdownStatus}`}></div>
									<div className={`sidebar-nav ${this.props.navigation.dropdownStatus}`}>
										<div className="dropdown-title">
											<span>Property Inspection Items</span>
										</div>
										<InspectionDropdown {...this.props} />	
									</div>
								</div>

								<div className="inspection-list-container white-tile">			
									{																
										this.props.inspections.currentInspectionSectionFields.map(
											listItem => {										
												let taskStatus = 'todo';
												if(listItem.status != ''){
													taskStatus = 'complete';	
												}
												// console.log(listItem.name)
												
												return (
													<InspectionListItem {...this.props} status={listItem.status} taskStatus={taskStatus} title={listItem.label} key={listItem.name} />
												)
											}
										)								
									}											
								</div>

								<div className="topmargin-3">
									<button className="button delete full-width">Delete Inspection</button>
								</div>
							</div>
						}		
						
					</div>						
					
				</div>
	}
}


export default connect(state => state)(InspectionList);