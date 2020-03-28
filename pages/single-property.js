import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import Router from 'next/router'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'

import TileLink from '../partials/tile-link.js'

import Svg from '../partials/svg.js'
import RightCaret from '../public/static/svg/right-caret.svg';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

import Modal from '../partials/modal.js'

class SingleProperty extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	propertyOwner: [],
	    	property:{},
	    	propertyTitle:'',
	    	isLoading: true 
	    };
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
    
		return{
			path: req.url,
			propertySlug: req.params.slug
		}

    }

    componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'properties?slug=' + this.props.propertySlug)
		  	.then(res => {					  			  								
				return res.json()
		  	})			  				  	
			.then(json => this.setState(
  				{ 	      					      					
  					property: json[0],
  					propertyTitle: json[0].title.rendered,
  					isLoading: false      					
  				}		      				      				
  			))
  			.then(data => {
  				console.log(this.state)
  			})		
	}


	render() {

		function confirmModal(e) {
			e.preventDefault();
			MicroModal.show('new-inspection-modal');
		}

		function createInspection() {
			let today = new Date();
			let dd = String(today.getDate()).padStart(2, '0');
			let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
			let yyyy = today.getFullYear();

			today = mm + '-' + dd + '-' + yyyy;
	
			let url_slug = 'inspection-'+ mm + dd + yyyy;

			Router.push('/inspection-list')
		}
			
		return <div className="app-index page">
							
				<Meta title={this.state.propertyTitle}
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
							<PageTitle title={this.state.propertyTitle} />															
	
							<div className="topmargin-3"></div>
												
							<TileLink href={`${this.props.path}/details`} src="info-solid" text="Property Information" />
							
							<TileLink href={`/inspections/${this.state.property.id}`} src="properties" text="Property Inspections" />

							<TileLink href={`/units/${this.state.property.id}`} src="units" text="Property Units" />

							<TileLink href={`/owners/${this.state.property.acf.property_owner.post_name}`} src="property-owners" text="Property Owner" />

							<TileLink href={`/property-media/${this.state.property.id}`} src="camera" text="Property Media" />

							<TileLink href={`/work-orders/${this.state.property.id}`} src="work-orders" text="Work Orders" />

							<a href="#" className="tile-link" onClick={e => confirmModal(e)}>
							  <span className="icon"><Svg src='properties' /></span>
							  <span className="text">New Inspection</span>
							  <span className="action"><RightCaret /></span>
							</a>

							<Modal id="new-inspection-modal">
								<div className="content">
									<div className="text-center">
										<h2>Are You Sure You Want To Create A New Inspection?</h2>
										<button className="topmargin-3 full-width button primary" type="primary" onClick={createInspection} >Start New Inspection</button>
									</div>
								</div>						
							</Modal>
						</div>									
					}					

					
				</div>
			
		</div>
	}
}


export default SingleProperty;