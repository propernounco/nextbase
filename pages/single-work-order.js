import React from 'react'
import getConfig from 'next/config'

import { connect } from 'react-redux'

const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

import Head from 'next/head'
import Meta from '../partials/seo-meta.js'

import PageTitle from '../partials/page-title.js'
import PageSearch from '../partials/page-search.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import DownCaret from '../public/static/svg/caret-down.svg'

import SimpleDrop from '../partials/simple-drop.js'
import StatusSimpleDrop from '../partials/status-simple-drop.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();


class SingleWorkOrder extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	workOrder: [],
	    	isLoading: true,
	    	employees: [] 

	    };
	}

	static async getInitialProps({ store, isServer, pathname, query, asPath, req, res }) {	    
	    
		const request = await fetch(publicRuntimeConfig.api_base + 'work_orders?slug=' + req.params.slug)	   
	    const errorCode = request.statusCode > 200 ? request.statusCode : false;
	    const workOrder = await request.json(); 
			  
		if(workOrder.length <= 0){
			ctx.res.statusCode = 404	
			meta_title = "404 Page Not Found | TCII "
	    	meta_desc = ""
			return {
				errorCode				
			}	    
		}
		else{		

			let workOrderStatus = workOrder[0].acf.status == 'todo' ? 'To Do' : workOrder[0].acf.status


			store.dispatch(
		    	{
		    		type: "DROPDOWN_STATUS",
		    		payload: ""
		    	}	    	
		    )	    
		    store.dispatch(
		    	{
		    		type: "SIMPLE_DROPDOWN_STATUS",
		    		payload: ""
		    	}	    	
		    )	    
		    store.dispatch(
		    	{
		    		type: "ASSIGNED_EMPLOYEE",
		    		payload: workOrder[0].acf.employee.nickname
		    	}	    	
		    )	
		    store.dispatch(
		    	{
		    		type: "WORK_ORDER_STATUS",
		    		payload: workOrderStatus
		    	}	    	
		    )	
		  
		    let statusOptions = [
				{
					text: 'To Do',
					value: 'todo'
				},
				{
					text: 'Pending',
					value: 'pending'
				},
				{
					text: 'Complete',
					value: 'complete'
				}
		    ]
		    
			return {
		    	errorCode,
			    workOrder: workOrder[0],
			    path: req.url,
			    propertySlug: req.params.slug,			    
		    	statusOptions: statusOptions		    	
			}
		}		    

	}

	componentDidMount(){
		
	 	let employees = []   	
		fetch(publicRuntimeConfig.api_base + 'users')
	  	.then(res => {					
			return res.json()
	  	}).then(json => {
			json.map(employee => {
				employees.push({text: employee.name, value: employee.id})
			})
			return employees
	  	})			  				  	
		.then(employees => this.setState(
			{ 	      					      					
				employees: employees      					
			}		      				      				
		)).then(() => {
			
		})		        				


    }

	render() {

		const changeDropState = () => this.props.dispatch({ 
				type: "DROPDOWN_STATUS",
				payload: "active"
			});

		const closeSidebar = () => this.props.dispatch({ 
				type: "DROPDOWN_STATUS",
				payload: ""
			});
				
		return <div className="single-work-order page">
					<Meta title="Single Work Order" 
							desc="" 
							canonical=""
					/>
					<div className="container">				
						<PageTitle title="Leaky Roof" />								
					
						<StatusSimpleDrop dropClass="status-drop" currentStatus={this.props.workOrders.workOrderStatus} dropItems={this.props.statusOptions} {...this.props} />			

						<SimpleDrop dropClass="employee-drop" buttonVal={this.props.workOrders.assignedEmployee} dropItems={this.state.employees} {...this.props} />						

						<h2 className="section-title">Description</h2>

						<div className="card topmargin-3">			
							<p>
								{this.props.workOrder.acf.work_description}
							</p>
						</div>		


						<h2 className="section-title">Photos</h2>

						<div className="split-grid work-order-images">
							
							{
								this.props.workOrder.acf.images.map(image => (
										<a className="item" key={image.id}>
											<img src={image.url} alt={image.name}/>
										</a>
									)
								)
							}												

						</div>

					</div>								
					
				</div>
	}
}


export default connect(state => state)(SingleWorkOrder)