import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
import { connect } from 'react-redux'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

import SimpleDrop from '../partials/simple-drop.js'
import Modal from '../partials/modal.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class PropertyOwners extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 	    	
	    	imagesLoading: true,
	    	inspections: {},
	    	properties: [],
	    	propertiesLoading: true,
	    	images: []
	    };
	}

	
	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
        		
    }
	
	componentDidMount(){
		fetch(publicRuntimeConfig.api_base + 'properties')
	 	.then(res => {					  			  								
			return res.json()
	  	})			  				  	
		.then(json => {
			this.props.dispatch(
	    	{ 
		    		type: "PROPERTIES_DROPDOWN_LIST", 
		    		payload: json
		    	}	    	
		    )

			this.setState({
					properties: json,	
					propertiesLoading: false	    			    					
			})
		})
		

		fetch(publicRuntimeConfig.api_base + 'media')
	  	.then(res => {					  			  								
			return res.json()
	  	})			  				  	
		.then(json => this.setState(
			{ 	      					      							
		    	images: json,		    	
				imagesLoading: false      					
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
							<div className="block-loading"><div className="loader"></div></div>
							:
							<SimpleDrop dropClass="property-drop" buttonVal={this.state.properties[0].title.rendered} dropItems={this.state.properties} {...this.props}  />
						}
						
						{					
							this.state.imagesLoading ? 
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


export default connect(state => state)(PropertyOwners)