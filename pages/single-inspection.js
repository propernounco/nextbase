import React from 'react'
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'

import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import Modal from '../partials/modal.js'

import Router from 'next/router'

import ListItem from '../partials/list-item.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class SingleInspection extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	inspectionSections:[],
	    	propertyTitle: '',
	    	allListItems: [],
	    	goodResponses: 0,
	    	fairResponses: 0,
	    	poorResponses: 0,
	    	naResponses: 0,	    	
	    	totalQuestions: 0,
			answeredQuestions: 0,
			percentComplete: 0,
	    	isLoading: true	    	
	    };
	}

	static async getInitialProps({ store, isServer, pathname, query, asPath, req, res }) {	

		return {
			path: req.url,
			slug: req.params.slug
		}	
	    //return { custom: "custom" };
	}

	componentDidMount(){
		
		fetch(publicRuntimeConfig.api_base + 'property_inspections?slug=' + this.props.slug)
			  	.then(res => {					  			  								
					return res.json()
			  	})			  				  	
				.then(json => this.setState(
      				{ 	      					      					
      					inspection: json[0],
      					isLoading: false      					
      				}		      				      				
      			))
      			.then(data => {

      				let inspectionData = this.state.inspection.acf
					let goodResponses = 0;
					let fairResponses = 0;
					let poorResponses = 0;
					let naResponses = 0;
					let answeredQuestions = 0;
					let totalQuestions = 0;

					this.setState({
						propertyTitle: this.state.inspection.acf.inspection_property.post_title
					})
					
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



		
		// console.log(answeredQuestions)
		// console.log(goodResponses)
		// console.log(fairResponses)
		// console.log(poorResponses)
		// console.log(naResponses)

	}


	render() {	

		function deleteInspection(id){
			Router.push('/property-inspections')
		}

		function confirmDelete(){					
			MicroModal.show('confirm-delete')			
		}


			
		return <div className="single-inspection page">
							
				<Meta title="Single Inspection" 
						desc="" 
						canonical=""
				/>

				<div className="container">
		
					<PageTitle title={this.state.propertyTitle} />										

					<div className="text-center">
						<h3>January 12, 2020 Inspection</h3>
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
						<ListItem rowOne="View Inspection Media" href="/property-media" />						
					</div>				

					<div className="topmargin-3">
						<button className="button delete full-width" onClick={() => confirmDelete()} >Delete Inspection</button>
					</div>
					
					<Modal id="confirm-delete">
						<div className="content">
							<div className="text-center">
								<h2>Are You Sure You Want To Delete This Inspection?</h2>
								<button className="topmargin-3 full-width button primary" type="primary" onClick={() => deleteInspection(2)} >Confirm Delete Inspection</button>
							</div>
						</div>	
					</Modal>

				</div>
			
		</div>
	}
}


export default SingleInspection;