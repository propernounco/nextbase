import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'

import TileLink from '../partials/tile-link.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

class SingleUnit extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	propertyOwner: [],
	    	singleUnit: [],
	    	unitTitle: '',
	    	isLoading: true 
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
                
		// const request = await fetch(publicRuntimeConfig.api_base + 'property_units?slug=' + req.params.slug)	   
	 //    const errorCode = request.statusCode > 200 ? request.statusCode : false;
	 //    const unit = await request.json(); 
	
		// if(unit.length <= 0){
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
		// 	    singleUnit: unit[0]			    
		// 	}
		// }	

		return {
			slug: req.params.slug
		}

    }

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'property_units?slug=' + this.props.slug)
			  	.then(res => {					  			  								
					return res.json()

			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					singleUnit: json[0],
      					unitTitle: json[0].title.rendered,			    
      					isLoading: false      					
      				}		      				      				
      			))
    }
	
	render() {
			
		return <div className="app-index page">
							
				<Meta title={entities.decode(this.state.unitTitle)} 
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
							<PageTitle title={`${this.state.singleUnit.acf.unit_number}`} />												
							<div className="text-center">
								<p className="small">{this.state.singleUnit.acf.property.post_title}</p>
							</div>

							<div className="topmargin-3"></div>															
							
							<TileLink href="/unit-inspections" src="properties" text="Unit Inspections" />
							
							<TileLink href="/work-orders" src="work-orders" text="Work Orders" />

							<TileLink href="/new-inspection" src="properties" text="New Inspection" />

							<TileLink href="/new-inspection" src="media" text="Unit Media" />					
						</div>
					}																
				</div>
			
		</div>
	}
}


export default SingleUnit;