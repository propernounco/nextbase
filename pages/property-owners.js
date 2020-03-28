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


class PropertyOwners extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	propertyOwners: [],
	    	isLoading: true 
	    };
	}
	
	static async getInitialProps({store, isServer, pathname, query}) {                                      

    }

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'property_owners')
			  	.then(res => {					  			  								
					return res.json()

			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					propertyOwners: json,
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
						<PageTitle title="Property Owners" />				
						<PageSearch placeholder="Property Owners" />	
						
						<div className="white-tile property-owners-list list topmargin-2">			
							{								
								this.state.isLoading ? 						
								<div className="block-loading">
									<div className="loader"></div>
								</div>							
								:
								this.state.propertyOwners.map( owner => (
										<TwoRowListItem rowOne={owner.owner_name} rowTwo={owner.phone_number} href={`/owners/${owner.slug}`} stateName="propertyOwner" key={owner.slug} />										
									)
								)
							}
						</div>
					</div>			
				</div>
	}
}


export default PropertyOwners