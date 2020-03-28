import React from 'react'
import getConfig from 'next/config'

import { connect } from 'react-redux'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
// import InspectionDropdown from '../partials/inspection-dropdown.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
// import InspectionListItem from '../partials/inspection-list-item.js'
import CallEmail from '../partials/call-email.js'
import DownCaret from '../public/static/svg/caret-down.svg'

import SimpleDrop from '../partials/simple-drop.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class NewInspection extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 	    	
	    	properties: [],
	    	issues: [],
	    	issuesLoading: true,	    	
	    	propertiesLoading: true,	    	
	    	isLoading: true 
	    };
	}

	static getInitialProps({ store, isServer, pathname, query }) {
		
	}	

	componentDidMount(){

		fetch(publicRuntimeConfig.api_base + 'properties')
	  	.then(res => {					  			  								
			return res.json()

	  	})			  				  	
		.then(json => this.setState({
				properties: json,	
				propertiesLoading: false	    			    	
			})
		)
		

		

	    let issues = [
			{
				text: 'Roof',
				value: '1'
			},
			{
				text: 'AC',
				value: '2'
			},
			{
				text: 'Leak',
				value: '3'
			},
			{
				text: 'Heat',
				value: '4'
			}
	    ]

		this.setState({			
	    	issues: issues,	    	
	    	issuesLoading: false    	
		})
	}	

	render() {		
	

		return <div className="new-inspection page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>
					<div className="container">	
						<PageTitle title="New Work Order" />										
						{												
													
							this.state.propertiesLoading ?
							<div className="block-loading">
								<div className="loader"></div>
							</div>
							:
							<SimpleDrop dropClass="property-drop" buttonVal="Kirkman Oaks" dropItems={this.state.properties} {...this.props} />			
						}
						
						{												
													
							this.state.issuesLoading ?
							<div className="block-loading">
								<div className="loader"></div>
							</div>
							:
							<SimpleDrop dropClass="issue-drop" buttonVal="Select Issue Type" dropItems={this.state.issues} {...this.props} />			
						}						
	
						<input type="text" className="email-cc ui-input full topmargin-2" placeholder="Email CC List"/>
						<div className="textarea-contain topmargin-2">
							<textarea className="full-width ui-textarea" name="work_notes" placeholder="Add A Note" id="" cols="30" rows="10"></textarea>
						</div>		
	
						<button type="button" className="topmargin-2 add-photos button full-width white">Add Photos To Work Order</button>
						<button type="submit" className="topmargin-2 primary button full-width">Submit Work Order</button>
							
						<div className="text center text-center topmargin-2">
							<a href="/single-property" className="cancel link">Cancel Work Order</a>
						</div>
						
						}			
						
					</div>						
					
				</div>
	}
}


export default connect(state => state)(NewInspection);