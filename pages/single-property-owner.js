import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import ListItem from '../partials/list-item.js'
import CallEmail from '../partials/call-email.js'


const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class PropertyOwner extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	propertyOwner: [],
	    	isLoading: true 
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
		return{
			slug: req.params.slug
		}	

    }

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'property_owners?slug=' + this.props.slug)
		  	.then(res => {					  			  								
				return res.json()

		  	})			  				  	
			.then(json => this.setState(
  				{ 	      					      					
  					propertyOwner: json[0],
  					isLoading: false      					
  				}		      				      				
  			))		
	}


	render() {
			
		return <div className="property-owner page call-email">
					
					{
						this.state.isLoading ? 
						<div className="block-loading"><div className="loader"></div></div>
						:
						<div>
						<CallEmail />	
						<div className="container">				

							<PageTitle title={this.state.propertyOwner.owner_name} />										

							<div className="card">							
								
								<div className="labeled-text">
									<span className="label">
										Point of Contact
									</span>
									<span className="the-text">
										{this.state.propertyOwner.owner_name}
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Phone Number
									</span>
									<span className="the-text">
										<a href={`tel:${this.state.propertyOwner.owner_name}`}>{this.state.propertyOwner.phone_number}</a>
									</span>
								</div>

								<div className="labeled-text">
									<span className="label">
										Email Address
									</span>
									<span className="the-text">
										<a href={`mailto:${this.state.propertyOwner.email}`}>{this.state.propertyOwner.email}</a>
									</span>
								</div>

							</div>
		
							<h2 className="section-title">Entities</h2>
							
							{
								this.state.propertyOwner.acf.entities ? (
									<div className="white-tile entity-list topmargin-2">
									{this.state.propertyOwner.acf.entities.map( entity => (
										<ListItem rowOne={entity.entity.post_title} href={`/entity/${entity.entity.post_name}`} key={entity.entity.ID} />
										)
									)}
									</div>
								) : (
									<div className="card topmargin-2">
										<p>Sorry. No Entities.</p>
									</div>
								)
							}
							

							<h2 className="section-title">Properties</h2>
			
							{
								this.state.propertyOwner.acf.properties ? (
									<div className="white-tile property-list topmargin-2">
									{this.state.propertyOwner.acf.properties.map( property => (
										<ListItem rowOne={property.property.post_title} href={`/property/${property.property.post_name}`} key={property.property.ID} />
										)
									)}
									</div>
								) : (
									<div className="card topmargin-2">
										<p>Sorry. No Properties.</p>
									</div>
								)
							}
							
						</div>	
						</div>
					}
									
				</div>
	}
}


export default PropertyOwner;