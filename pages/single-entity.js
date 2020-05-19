import React from 'react'
import Link from 'next/link'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import CallEmail from '../partials/call-email.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class SingleEntity extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	singleEntity: {},	
	    	entityProperty: {},    	
	    	isLoading: true,
	    	propertyAddress: 'Loading...',
	    	sqFootage: 'Loading...',
	    	propertyType: 'Loading...',
	    	entityPropertyAddress: 'Loading...',
			entityPropertySqFootage: 'Loading...',
			entityPropertyType: 'Loading...',
			entityPropertyUnits: 'Loading...',
	    	unitCount: 0
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
		// const request = await fetch(publicRuntimeConfig.api_base + 'property_entities?slug=' + req.params.slug)	   
	 //    const errorCode = request.statusCode > 200 ? request.statusCode : false;
	 //    const entity = await request.json(); 

		// if(entity.length <= 0){
		// 	ctx.res.statusCode = 404	
		// 	meta_title = "404 Page Not Found | TCII "
	 //    	meta_desc = ""
		// 	return {
		// 		errorCode				
		// 	}	    
		// }
		// else{			
		// 	return {
		//     	errorCode,
		// 	    singleEntity: entity[0]			    
		// 	}
		// }	
	
		return{
			slug: req.params.slug	
		}
    }

    componentDidMount(){

	
		fetch(publicRuntimeConfig.api_base + 'property_entities?slug=' + this.props.slug)
			  	.then(res => {					  			  								
					return res.json()

			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					singleEntity: json[0],
      					isLoading: false       					     				
      				}		      				      				
      			))
      			.then(() => {
      				console.log(this.state)
      			})
      			.then(() => {
					fetch(publicRuntimeConfig.api_base  + 'properties?slug=' + this.state.singleEntity.acf.entity_property.post_name)
				  	.then(res => {					  			  								
						return res.json()

				  	})			  				  	
					.then(json => this.setState(
	      				{ 	      					
	      					entityProperty: json[0],
	      					entityPropertyID: json[0].id,
	      					entityPropertyAddress: json[0].property_address,
	      					entityPropertySqFootage: json[0].acf.square_footage,
	      					entityPropertyType: json[0].acf.property_type ? json[0].acf.property_type.replace(/_/g, ' ') : 'none',
	      					entityPropertyUnits: json[0].acf.property_units ? json[0].acf.property_units.length	: 'none'			
	      				}		      				      				
	      			))		        			
	      			.then(() => {
	      				console.log(this.state.entityProperty)
	      			})
      			})
    }

	render() {
			
		return <div className="property-owners page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>

					{
						this.state.isLoading ? 
						<div className="block-loading"><div className="loader"></div></div>
						:
						<div className="container">				
							<PageTitle title="Adam Hodson" />										


							<div className="card">							
								<div className="labeled-text">
									<span className="label">
										Entity Name
									</span>
									<span className="the-text">
										{this.state.singleEntity.entity_name}
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Property Name
									</span>
									<span className="the-text">
										{this.state.singleEntity.acf.entity_property.post_title}
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Property Address
									</span>
									<span className="the-text">
										{this.state.entityPropertyAddress}
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Square Footage
									</span>
									<span className="the-text">
										{this.state.entityPropertySqFootage}
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Property Type
									</span>
									<span className="the-text">
										{this.state.entityPropertyType}
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Number Units
									</span>
									<span className="the-text">
										<Link href={`/units/${this.state.entityPropertyID}`}><a>{this.state.entityPropertyUnits}</a></Link>
									</span>
								</div>

							</div>
							
						</div>
					}
								

					<CallEmail />	
					
				</div>
	}
}


export default SingleEntity;