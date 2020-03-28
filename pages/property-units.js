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


class PropertyUnits extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	units: {},
	    	isLoading:true,
	    	areUnits: false,
	    	propertyName: '',
	    	unitCount: 0
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
		// const request = await fetch(serverRuntimeConfig.api_base + 'property_units?filter[meta_key]=property&filter[meta_value]=' + req.params.id)	   
	 //    const errorCode = request.statusCode > 200 ? request.statusCode : false;
	 //    const units = await request.json(); 

		// if(units.length <= 0){
			
		// }
		// else{
		// 	console.log(units)			
		// 	return {
		//     	errorCode,
		// 	    units: units,
		// 	    areUnits: true,
		// 	    propertyId: req.params.id			    
		// 	}
		// }	

		return {
			propertyId: req.params.id	
		}

    }
	
    componentDidMount(){
    	
    	fetch(publicRuntimeConfig.api_base + 'property_units?filter[meta_key]=property&filter[meta_value]=' + this.props.propertyId)
			  	.then(res => {					  			  								
					return res.json()
			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					units: json,
      					areUnits: true,
      					isLoading: false      					
      				}		      				      				
      			))
		
		let reqUrl = publicRuntimeConfig.api_base  + 'properties?filter[p]=' + parseFloat(this.props.propertyId);
		fetch(reqUrl)
	  	.then(res => {					  			  								
			return res.json()

	  	})			  				  	
		.then(json => this.setState(
				{ 	      					      					
					propertyName: json[0].title.rendered,      					
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
						<PageTitle title={this.state.propertyName} />				
						<PageSearch placeholder="Property Owners" />	
						
						<div className="white-tile property-owners-list list topmargin-2">			

							{
							this.state.isLoading ? 						
							<div className="block-loading">
								<div className="loader"></div>
							</div>							
							:	
								[
									(
										this.state.areUnits ? (
											this.state.units.map( unit => (
													<TwoRowListItem rowOne={unit.acf.unit_number} rowTwo={unit.acf.property.post_title} href={`/unit/${unit.slug}`} stateName="propertyOwner" key={unit.acf.unit_number} />										
												)
											)
										):(
											<div className="card">
												<div className="text-center">
													This Property Has No Units
												</div>										
											</div>
										)								
									)
								]								
							}							
						</div>
					</div>			
				</div>
	}
}


export default PropertyUnits