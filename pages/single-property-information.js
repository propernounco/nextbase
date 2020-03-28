import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class SinglePropertyInfo extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	property:{},
	    	propertyOwner: [],
	    	isLoading: true,	    	
	    	hasUnits: false,
	    	units_message: "Loading" 
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {                
		return {		    	
		    // units_message: "",
		    path: req.url,
		    slug: req.params.slug
		}		
    }

    componentDidMount(){
    	fetch(publicRuntimeConfig.api_base + 'properties?slug=' + this.props.slug)
			  	.then(res => {					  			  								
					return res.json()
			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					property: json[0],      					
      					isLoading: false      					
      				}		      				      				
      			))
      			.then(data => {
      				
      				fetch(publicRuntimeConfig.api_base  + 'property_units?filter[meta_key]=property&filter[meta_value]=' + this.state.property.id )
				  	.then(res => {					  			  								
						return res.json()
				  	})			  				  	
					.then(json => this.setState(
	      				{ 	      					      					
	      					propertyUnits: json,
	      					hasUnits: json.length > 0 ? true : false,
	      					units_message: "This Property Has No Units"
	      				}		      				      				
	      			))
	      			.then(data => (
	      					console.log(this.state)
	      				)
	      			)

      			})					        			

    }

	render() {
	
		
		return <div className="single-property-info page">
					<Meta title="Single Property Info" 
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

								<PageTitle title={this.state.property.title.rendered} />										

								<div className="card">							
									<div className="labeled-text">
										<span className="label">
											Property Name
										</span>
										<span className="the-text">
											{this.state.property.title.rendered}
										</span>
									</div>

									<div className="labeled-text">
										<span className="label">
											Property Owner
										</span>
										<span className="the-text">
											{this.state.property.acf.property_owner.post_title}
										</span>
									</div>

									<div className="labeled-text">
										<span className="label">
											Property Square Footage
										</span>
										<span className="the-text">
											{this.state.property.acf.square_footage ? this.state.property.acf.square_footage : 'NA'}
										</span>
									</div>

									<div className="labeled-text">
										<span className="label">
											Number Of Units
										</span>
										<span className="the-text">
											<a href={`/units/${this.state.property.id}`}>
												{this.state.property.acf.property_units ? this.state.property.acf.property_units.length : 'NA'}
											</a>									
										</span>
									</div>
									
									<div className="labeled-text">
										<span className="label">
											Property Type
										</span>
										<span className="the-text">
											{this.state.property.acf.property_type ? this.state.property.acf.property_type.replace(/_/g, ' ') : 'NA'}
										</span>
									</div>
								</div>		

								<h2 className="section-title">Units</h2>

								<div className="white-tile property-unit-list list topmargin-2">			
									
									{
										this.state.hasUnits ? (
											this.state.propertyUnits.map(unit =>(
													<TwoRowListItem rowOne={entities.decode(unit.title.rendered)} rowTwo={ unit.acf.leased == 'yes' ? "leased" : "available" } href={`/unit/${unit.slug}`} key={unit.slug} />				
												)
											)
										):(
											<div className="card">
												<div className="text-center">{this.state.units_message}</div>
											</div>
										)
									}
									
									
									
								</div>

							</div>
						}
				
					</div>								
					
				</div>
	}
}


export default SinglePropertyInfo