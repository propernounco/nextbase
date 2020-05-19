import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const axios = require('axios').default;

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import Router from 'next/router'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'

import TileLink from '../partials/tile-link.js'

import Svg from '../partials/svg.js'
import RightCaret from '../public/static/svg/right-caret.svg';

import LoadingWindow from '../partials/loading-window'

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
	    	propertyId: '',
	    	allUnits: [],
	    	isLoading: true,
	    	loadingWindowStatus: 'hide',
	    	loadingWindowMessage: 'Creating New Inspection.'     
	    };

	    this.createNewInspection = this.createNewInspection.bind(this)
	}

	static async getInitialProps({store, isServer, pathname, query, asPath, req, res}) {
    
		return{
			path: req.url,
			propertySlug: req.params.slug,
			auth_token: req.cookies.tcii_auth_token,
			user_id: req.cookies.tcii_user_id,
		}

    }

    componentDidMount(){

    	console.log(this.props.user_id)
		fetch(publicRuntimeConfig.api_base + 'properties?slug=' + this.props.propertySlug)
		  	.then(res => {					  			  								
				return res.json()
		  	})			  				  	
			.then(json => this.setState(
  				{ 	      					      					
  					property: json[0],
  					propertyTitle: json[0].title.rendered,
  					isLoading: false,
  					propertyId: json[0].id      					
  				}		      				      				
  			))
  			.then(data => {
  				console.log(this.state)

  				fetch(publicRuntimeConfig.api_base + 'property_units?filter[meta_key]=property&filter[meta_value]=' + this.state.propertyId)	
  				.then(res => {
  					return res.json()
  				})
  				.then(json => {
  					console.log(json)
  					this.setState({
						allUnits: json
  					})
  				})
  			})	


	}
	
	createNewInspection(){
	
		this.setState({
			loadingWindowStatus: 'show'
		})

		let date = new Date();
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = date.getFullYear();

		let today = mm + '-' + dd + '-' + yyyy;

		let url_slug = 'inspection-'+ mm + dd + yyyy;
		let propertyTitle = this.state.propertyTitle
		let propertyId = this.state.property.id

		let newInspectionData = {
			title: propertyTitle + ' inspection ' + today,
			content: '',
			status: 'publish'
		}

		let headers = {
			'Content-type': 'application/json', 
			'Authorization': 'Bearer ' + this.props.auth_token 
		}

		let postUrl = publicRuntimeConfig.api_base + 'property_inspections'		

		axios.post(postUrl, newInspectionData, {
			headers: headers
		})
		.then(data => {
			if(data.status == 200 || data.status == 201){
				// Router.push('/inspections/' + propertyId)
			
				this.setState({
					loadingWindowMessage: 'Updating Inspection Data.'
				})

				let newInspectionSlug = data.data.slug
				let newInspectionId = data.data.id
				let propertyId = this.state.propertyId				
				let fieldUpdateUrl = publicRuntimeConfig.acf_api_base + 'property_inspections/' + newInspectionId
				let inspectionUpdateData = {
					"fields": {
						inspector: this.props.user_id,
						inspection_title: 'inspection ' + today,
						inpsection_status: 'in_progress',
						inspection_property: propertyId,
						inspection_date: date
					}
				}
				axios.post(fieldUpdateUrl, inspectionUpdateData, {
					headers: headers
				})
				.then(data => {
					this.setState({
						loadingWindowMessage: "Redirecting to Inspection"
					})
					setTimeout(() => {
						Router.push('/inspection/' + newInspectionSlug)						
					}, 1000)
				})
			}
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
										<div className="unit-assignment topmargin-3">
											<select name="unit_assignment_select" id="unit_assignment_select" className="unit-assignment-select ui-select">
												<option value="">Assign this inspection to a unit?</option>
												{
													this.state.allUnits.map(unit => {
														return(
															<option>{unit.title.rendered}</option>
														)
													})
												}
											</select>
										</div>
										<button className="topmargin-3 full-width button primary" type="primary" onClick={this.createNewInspection} >Start New Inspection</button>
									</div>
								</div>						
							</Modal>
						</div>									
					}					
					
				</div>

				<LoadingWindow visibleState={this.state.loadingWindowStatus} message={this.state.loadingWindowMessage}  />                                      
			
		</div>
	}
}


export default SingleProperty;