
import React from 'react'
// import {connect} from "react-redux";

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import { connect } from 'react-redux'

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'

import PropertiesDrop from '../partials/properties-drop.js'
import Modal from '../partials/modal.js'

const axios = require('axios').default;

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
	    	inspectionTitle: '',
	    	inspections: {},
	    	properties: [],
	    	images: [],
	    	selectedProperty: false
	    };
	    // this.getSelectedPropertyImages = this.getSelectedPropertyImages.bind(this)
	}
	
	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {      
  		
		store.dispatch({ 
	    	type: "MEDIA_LOADING", 
	    	payload: true
	    })
	
		console.log(req.params.slug)

  		return{
  			inspectionId: req.params.slug,
	    	path: req.url,
	    	auth_token: req.cookies.tcii_auth_token,
			user_id: req.cookies.tcii_user_id
  		}
    }

    
	
	componentDidMount(){
		
		axios.get(publicRuntimeConfig.api_base + 'media?filter[meta_key]=inspection&filter[meta_value]=' + this.props.inspectionId)
		.then(json => {
			console.log(json.data)
	
			this.setState({
				inspectionTitle: json.data[0].acf.inspection.post_title
			})

			this.props.dispatch(
	    		{ 
		    		type: "CURRENT_IMAGES", 
		    		payload: json.data
		    	}	    	
		    )

		    this.props.dispatch(
	    		{ 
		    		type: "MEDIA_LOADING", 
		    		payload: false
		    	}	    	
		    )

		})		

		
		
	}
	

	render() {
		
		// const setOwnerState = () => this.props.dispatch({ type: 'property_owner',
		// 		payload: 'ahhhhh' });
		
		console.log(this.state)

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
						<PageTitle title={this.state.inspectionTitle} />				
						
						{
							this.props.media.mediaLoading ? 
							<div className="block-loading">
								<div className="loader"></div>
							</div>
							:
							
							<div className="property-media-block">
								{
									this.props.media.currentImages.length > 0 ? 
									
										<div className="single-grid media-grid topmargin-3">	
											{
												this.props.media.currentImages.map(image => 
													<div className="item" key={image.slug}>
														<img src={`${image.source_url}`} alt="Image" onClick={() => setModalImage(image)} />
													</div>						
												)	
											}
										</div>
									:

									<div className="card topmargin-3">
										Sorry no images
									</div>
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

export default connect(state => state)(PropertyOwners);