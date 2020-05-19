
import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
import { connect } from 'react-redux'

const axios = require('axios').default;

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import ListItem from '../partials/list-item.js'
import Search from '../public/static/svg/search-solid.svg'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

let wto;

class PropertyInspections extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	isLoading: true,
	    	inspections: {},
	    	areUnits: false,
	    	propertyName: '',
	    	unitCount: 0,
	    	inspectionsSearch: ''
	    };

	    this.searchInspections = this.searchInspections.bind(this)
	    this.updateInspections = this.updateInspections.bind(this)
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
		store.dispatch({
			type: "INSPECTION_LIST",
			payload: []
		})

		store.dispatch({
			type: "INSPECTION_LIST_LOADING",
			payload: true
		})

		return {
			unitId: req.params.id
		}

    }

    componentDidMount(){		
  		axios.get(publicRuntimeConfig.api_base + 'property_inspections?filter[meta_key]=inspection_unit&filter[meta_value]=' + this.props.unitId)		
			.then(json => {	
				
				console.log(json.data[0].acf.inspection_property.post_title)				

				this.setState(
      				{ 	      					      					
      					inspections: json.data,
					    areUnits: true,
      					isLoading: false,
      					propertyName: json.data[0].acf.inspection_property.post_title      					
      				}		      				      				
      			)
      			this.props.dispatch({
      				type:"INSPECTION_LIST",
      				payload: json.data
      			})
      			this.props.dispatch({
      				type:"INSPECTION_LIST_LOADING",
      				payload: false
      			})

			})	      			
	}

	
	searchInspections(){
	
		axios.get(publicRuntimeConfig.api_base + 'property_inspections?search=' + encodeURI(this.state.inspectionsSearch))		
				.then(json => {
					console.log(json.data)

					this.props.dispatch({
						type:"INSPECTION_LIST",
						payload: json.data
					})

					this.props.dispatch({ 
						type: "INSPECTION_LIST_LOADING",
						payload: false
					});	
				})
		
	}
	

	updateInspections(){
		let valName =  event.target.name		
	    this.setState({ [valName]: event.target.value })

	    clearTimeout(wto);
	    wto = setTimeout(() => {			
	    	this.props.dispatch({
	    		type: "INSPECTION_LIST_LOADING",
	    		payload:true
	    	})
			this.searchInspections()
	    }, 1000)
	 	//wto = setTimeout(function() {
		//// do stuff when user has been idle for 1 second		    
		// }, 1000)

	}

	render() {
		
		
		return <div className="property-owners page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>
										
					<div className="container">				
		
						{
							this.props.inspections.inspectionListLoading ?
							<span></span>
							:
							<div className="text center text-center">
								<h1 className="page-title">{this.state.propertyName}</h1>
							</div>								
						}
						
						
						<PageTitle title="Property Inspections" />				
						<div className="page-search">						
							<input type="text" name="inspectionsSearch" className="search-field ui-input full" placeholder="Inspections" onChange={this.updateInspections} />					
							<Search />
						</div>
						
						<div className="white-tile property-inspections-list list topmargin-2" >			
							{			
								this.props.inspections.inspectionListLoading ?
								<div className="block-loading">
									<div className="loader"></div>
								</div>
								:				
								this.props.inspections.inspectionList.length <= 0 ? 
									<div className="card">Sorry. No matches.</div>
								:
								<div>
									{
										this.props.inspections.inspectionList.map(inspection => {																		
										let d = new Date(inspection.acf.inspection_date)	
										
										let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});									
										{
											return (	
												<ListItem rowOne={date} href={`/unit-inspection/${inspection.slug}`} key={inspection.slug} />
											)
										}
									})
									}
								</div>					
							}													
						</div>
					</div>			
				</div>
	}
}

export default connect(state => state)(PropertyInspections);