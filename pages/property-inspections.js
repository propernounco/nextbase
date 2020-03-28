
import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import ListItem from '../partials/list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class PropertyInspections extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	isLoading: true,
	    	inspections: {},
	    	areUnits: false,
	    	propertyName: '',
	    	unitCount: 0
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
	
		return {
			propertyId: req.params.id
		}

    }

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'property_inspections?filter[meta_key]=inspection_property&filter[meta_value]=' + this.props.propertyId)
			  	.then(res => {					  			  								
					return res.json()
			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					inspections: json,
					    areUnits: true,
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
						<PageTitle title="Property Inspections" />				
						<PageSearch placeholder="Property Inspections" />	
						

						<div className="white-tile property-inspections-list list topmargin-2" >			
							{			
								this.state.isLoading ?
								<div className="block-loading">
									<div className="loader"></div>
								</div>
								:				
								this.state.inspections.map(inspection => {																		
									let d = new Date(inspection.acf.inspection_date)									
									let date = d.toLocaleString('default', { month: 'long' , day:'2-digit', year: 'numeric'});									
									{
										return (	
											<ListItem rowOne={date} href={`/inspection/${inspection.slug}`} key={inspection.slug} />
										)
									}
								})					
							}													
						</div>
					</div>			
				</div>
	}
}


export default PropertyInspections