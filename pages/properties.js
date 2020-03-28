import React from 'react'

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class Properties extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	properties: [],
	    	isLoading: true 
	    };
	}
	
	static async getInitialProps({store, isServer, pathname, query}) {                             
         	
    }
	
	componentDidMount(){
		fetch(publicRuntimeConfig.api_base  + 'properties')
			  	.then(res => {					  			  								
					return res.json()

			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					properties: json,
      					isLoading: false      					
      				}		      				      				
      			))		
	}

	render() {
		
		return <div className="properties page">
					<Meta title="Properties" 
							desc="" 
							canonical=""
					/>
					<div className="container">				
						<PageTitle title="Properties" />				
						<PageSearch placeholder="Properties" />	
	
						<h3>{this.props.testing}</h3>					

						<div className="white-tile property-owners-list list topmargin-2">			
							{
							this.state.isLoading ? 						
							<div className="block-loading">
								<div className="loader"></div>
							</div>							
							:	
							this.state.properties.map( property => (
										<TwoRowListItem rowOne={property.title.rendered} rowTwo={property.property_address} href={`/property/${property.slug}`} key={property.id} />
									)
								)								
							}
							
						</div>
					</div>			
				</div>
	}
}


export default Properties