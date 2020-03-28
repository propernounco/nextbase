
import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

import PropertiesDrop from '../partials/properties-drop.js'
import Modal from '../partials/modal.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class PropertyOwners extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 	    	
	    	isLoading: true,
	    	propertiesLoading: true,
	    	imagesLoading:true,
	    	inspectionsLoading:true,
	    	inspections: {},
	    	properties: [],
	    	images: []
	    };
	}

	
	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
      
  		return{
  			propertyId: req.params.id,

  		}
    }
	
	componentDidMount(){
		
		fetch(publicRuntimeConfig.api_base + 'properties')
	 	.then(res => {					  			  								
			return res.json()

	  	})			  				  	
		.then(json => this.setState({
				properties: json,	
				propertiesLoading: false	    			    	
			})
		)
		

		fetch(publicRuntimeConfig.api_base + 'media?filter[meta_key]=property&filter[meta_value]=' + this.props.propertyId)
	  	.then(res => {					  			  								
			return res.json()
	  	})			  				  	
		.then(json => this.setState(
			{ 	      					      							
		    	images: json,		    	
				isLoading: false      					
			}		      				      				
		))		
	}


	render() {
		
		// const setOwnerState = () => this.props.dispatch({ type: 'property_owner',
		// 		payload: 'ahhhhh' });
	
		function setModalImage(image){
			let modalImageContainer = document.getElementById('modal-image-container')
			modalImageContainer.innerHTML = '';
			modalImageContainer.innerHTML = '<img src="/static/images/media/temp-media-' + image + '.jpg" />';
			MicroModal.show('media-modal');
		}
		
		return <div className="property-owners page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>
										
					<div className="container">				
						<PageTitle title="Property Media" />				
						
						{
							this.state.propertiesLoading ? 
							<div className="block-loading"><div className="loader">12313</div></div>
							:
							<PropertiesDrop dropClass="property-drop" buttonVal="Kirkman Oaks" dropItems={this.state.properties} {...this.props}  />
						}
										
						
						{
							this.props.isLoading ? 
							<div className="block-loading">
								<div className="loader"></div>
							</div>
							:
							<div className="split-grid media-grid topmargin-3">										
							{
								this.state.images.map(image => 
									<div className="item" key={image.slug}>
										<img src={`${image.guid.rendered}`} alt="Image" onClick={() => setModalImage(image)} />
									</div>						
								)								
							}								
							</div>
						}						
					</div>			

					<Modal id="media-modal">
						<span id="modal-image-container" className="responsive-img modal-image-container"></span>
					</Modal>
				</div>
	}
}


export default PropertyOwners