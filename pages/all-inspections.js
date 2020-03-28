
import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class PropertyInspections extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 	    	
	    	inspections: [],
	    	isLoading: true 
	    };
	}

	static getInitialProps({store, isServer, pathname, query}) {
        // store.dispatch({type: 'property_owner'}); // component will be able to read from store's state when rendered      
    }

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'property_inspections')
		  	.then(res => {					  			  								
				return res.json()

		  	})			  				  	
			.then(json => this.setState(
  				{ 	      					      					
  					inspections: json,			    
  					isLoading: false      					
  				}		      				      				
  			))		
	}
	

	render() {
		
		
		return <div className="property-owners page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>
										
					<div className="container">				
						<PageTitle title="All Property Inspections" />				
						<PageSearch placeholder="Property Inspections" />							
		
						{
							this.state.isLoading ?
							<div className="block-loading">
								<div className="loader"></div>
							</div>	
							:
							<div className="white-tile property-owners-list list topmargin-2" >			
								{
									this.state.inspections.map(inspection => {
											let d = new Date(inspection.acf.inspection_date)									
											let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});									
											return (
														<TwoRowListItem rowOne={date} rowTwo={inspection.acf.inspection_property.post_title} href={`/inspection/${inspection.slug}`} key={inspection.id} />
													)
										}
									)
								}																
							</div>
						}
						
					</div>			
				</div>
	}
}


export default PropertyInspections