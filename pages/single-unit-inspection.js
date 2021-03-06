import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const axios = require('axios').default;

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import Modal from '../partials/modal.js'

import Router from 'next/router'

import ListItem from '../partials/list-item.js'

import LoadingWindow from '../partials/loading-window'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class SingleInspection extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	inspection: '',
	    	inspectionDate: '',
	    	inspectionData: '',
	    	inspectionId: '',
	    	inspectionSections:[],
	    	propertyTitle: '',
	    	propertyId: '',
	    	propertySlug: '',
	    	allListItems: [],
	    	goodResponses: 0,
	    	fairResponses: 0,
	    	poorResponses: 0,
	    	naResponses: 0,	    	
	    	totalQuestions: 0,
			answeredQuestions: 0,
			percentComplete: 0,
	    	isLoading: true,
	    	loadingWindowStatus: 'hide',
	    	loadingWindowMessage: 'Deleting Inspection.'     	    	
	    };

	    this.confirmDelete = this.confirmDelete.bind(this)
	    this.deleteInspection = this.deleteInspection.bind(this)
	}

	static async getInitialProps({ store, isServer, pathname, query, asPath, req, res }) {	

		return {
			path: req.url,
			slug: req.params.slug,
			unitId: req.params.slug,
			user_id: req.cookies.tcii_user_id,
			auth_token: req.cookies.tcii_auth_token,
			headers: {
			'Content-type': 'application/json', 
			'Authorization': 'Bearer ' + req.cookies.tcii_auth_token
			}
		}	
	    //return { custom: "custom" };
	}

	componentDidMount(){
		// fetch(publicRuntimeConfig.api_base + 'property_inspections?filter[meta_key]=inspection_unit&filter[meta_value]=' + this.props.slug)		
		fetch(publicRuntimeConfig.api_base + 'property_inspections?slug=' + this.props.slug)
			  	.then(res => {					  			  													
					return res.json()
			  	})	
			  	.then(json => {
			  		console.log(json)
			  		return json
			  	})		  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					inspection: json[0],
      					isLoading: false,
      					propertyId: json[0].acf.inspection_property.id ? json[0].acf.inspection_property.id : 0,
      					propertySlug: json[0].acf.inspection_property.post_name,
						propertyTitle: json[0].acf.inspection_property.post_title,
						inspectionDate: json[0].acf.inspection_date,
						inspectionId: json[0].id      					
      				}		      				      				
      			))
      			.then(() => {

      				console.log(this.state)

      				let inspectionData = this.state.inspection.acf
					let goodResponses = 0;
					let fairResponses = 0;
					let poorResponses = 0;
					let naResponses = 0;
					let answeredQuestions = 0;
					let totalQuestions = 0;

					//this.setState({
						// propertyId: this.state.inspection.acf.inspection_property.id,
						// propertyTitle: this.state.inspection.acf.inspection_property.post_title,
						// inspectionDate: this.state.inspection.acf.inspection_date,
						// inspectionId: this.state.inspection.id
					//})
					
					for(var property in inspectionData){
						if(!property.includes('inspect')){				

							for(var data in inspectionData[property]){
								
								totalQuestions++;

								switch(inspectionData[property][data].status){
									case 'good':
										goodResponses++ // = goodResponses + 1;
										answeredQuestions++
										this.setState({
								            goodResponses: goodResponses 					            
								        });
										break;
									case 'fair':
										fairResponses++ // = fairResponses + 1;
										answeredQuestions++
										this.setState({
								            fairResponses: fairResponses					            
								        });
										break;
									case 'poor':
										poorResponses++ // = poorResponses + 1;
										answeredQuestions++
										this.setState({
								            poorResponses: poorResponses				          
								        });
										break;
									case 'na':	
										naResponses++ // = naResponses + 1;
										answeredQuestions++
										this.setState({
								            naResponses: naResponses					            
								        });		
										break;
								} 											
							}

						}			
					}
					this.setState({
			           answeredQuestions: answeredQuestions,
			           totalQuestions: totalQuestions,
			           percentComplete: (answeredQuestions / totalQuestions) * 100				          

			        });

      			})		

	}

	deleteInspection(id){
		// Router.push('/property-inspections')
		this.setState({
			loadingWindowStatus: 'show',
		})

		let delUrl = publicRuntimeConfig.api_base + 'property_inspections/' + id

		axios.delete(delUrl, {
			headers: this.props.headers
		})
		.then(data => {
			this.setState({
				loadingWindowMessage: 'Inspection Deleted. Redirecting.',
			})
			console.log(this.state)
			Router.push('/property/' + this.state.propertySlug)

		})

		console.log(delUrl)
		
	}

	confirmDelete(){					
		MicroModal.show('confirm-delete')			
	}


	render() {	




			
		return <div className="single-inspection page">
							
				<Meta title="Single Inspection" 
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

							<div className="text-center">
								<h3>{this.state.inspectionDate} Inspection</h3>
							</div>
							
							<div className="topmargin-2 card">
								<div className="text center text-center">
									<p>
										<span className="bold">{this.state.answeredQuestions} Of {this.state.totalQuestions}</span>  Tasks Completed
									</p>

									<div className="complete-bar">
										<div className="fill-bar" style={{ width: this.state.percentComplete + '%' }}></div>
									</div>							
								</div>
							</div>		

							<div className="split-grid single-inspection-counts topmargin-2">
								<div className="item">
									<div className="card good">
										<span className="count">{this.state.goodResponses}</span>
										<span className="title">good responses</span>
									</div>
								</div>
								<div className="item">
									<div className="card fair">
										<span className="count">{this.state.fairResponses}</span>
										<span className="title">fair responses</span>
									</div>
								</div>
								<div className="item">
									<div className="card poor">
										<span className="count">{this.state.poorResponses}</span>
										<span className="title">poor responses</span>
									</div>
								</div>
								<div className="item">
									<div className="card na">
										<span className="count">{this.state.naResponses}</span>
										<span className="title">n/a responses</span>
									</div>
								</div>
							</div>
											
							<div className="white-tile list topmargin-3" >			
								<ListItem rowOne="View Full Inspection" href={`${this.props.path}/questions`} />
								<ListItem rowOne="View Inspection Media" href={`/inspection/${this.state.inspectionId}/media`} />						

							</div>				

							<div className="topmargin-3">
								<button className="button delete full-width" onClick={() => this.confirmDelete()} >Delete Inspection</button>
							</div>
							
							<Modal id="confirm-delete">
								<div className="content">
									<div className="text-center">
										<h2>Are You Sure You Want To Delete This Inspection?</h2>
										<button className="topmargin-3 full-width button primary" type="primary" onClick={() => this.deleteInspection(this.state.inspectionId)} >Confirm Delete Inspection</button>
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


export default SingleInspection;