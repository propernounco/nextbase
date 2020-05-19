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
const axios = require('axios').default;

import LoadingWindow from '../partials/loading-window'

class SingleWorkOrder extends React.Component {	

	constructor(props) {
	    super(props)	    
	    this.state = { 
	    	isEmptyState: true,
	    	workOrder: [],
	    	isLoading: true,
	    	employees: [],
	    	workNote: '',
	    	allWorkOrderNotes: [],
	    	loadingWindowStatus: 'hide',
	    	loadingWindowMessage: 'Logging In. Please Wait'    
	    };

	    this.handleChange = this.handleChange.bind(this)
	    this.updateWorkOrderNotes = this.updateWorkOrderNotes.bind(this)
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
		    		type: "SELECTED_STATUS",
		    		payload: workOrderStatus
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
		    store.dispatch({
		    	type:"DROP_BUTTON_TEXT",
		    	payload: workOrderStatus.toLowerCase()
		    })
		  
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
		    	statusOptions: statusOptions,
		    	user_id: req.cookies.tcii_user_id,
				auth_token: req.cookies.tcii_auth_token,
				workOrderId: workOrder[0].id,
				updateNotes: workOrder[0].acf.update_notes ? workOrder[0].acf.update_notes : [],
				changeHistory: workOrder[0].acf.updates ? workOrder[0].acf.updates : [],
				headers: {
				'Content-type': 'application/json', 
				'Authorization': 'Bearer ' + req.cookies.tcii_auth_token
				}
		    	
			}
		}		    

	}

	componentDidMount(){
		

		this.setState({
			allWorkOrderNotes: this.props.updateNotes
		})

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

    updateWorkOrderNotes(e){
	
		e.preventDefault();
		this.setState({			
			loadingWindowStatus: 'show',
			loadingWindowMessage: 'Adding New Note. Please Wait.'
		})
		
		let date = new Date();
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = date.getFullYear();

		let today = mm + '-' + dd + '-' + yyyy;

		let newUpdate = {
					date: date,
					work_note: 'Added work order note'
				}
	
		if(this.state.allWorkOrderNotes.length > 0){
			this.state.allWorkOrderNotes.map(item => {
				console.log(item.date)
				item.date = new Date(item.date)
			})
		}
		
		let newNote = {
				date: date,
				work_note: this.state.workNote
			}		
		
		this.props.updateNotes.push(newNote)
		

		if(this.props.changeHistory.length > 0){
			this.props.changeHistory.map(item => {
				console.log(item.date)
				item.date = new Date(item.date)
			})
		}

		this.props.changeHistory.push(newUpdate)

		let fieldUpdateUrl = publicRuntimeConfig.acf_api_base + '/work_orders/' + this.props.workOrderId
		let workOrderData = {
			"fields": {
				update_notes: this.props.updateNotes,
				updates: this.props.changeHistory
			}		
		}

		axios.post(fieldUpdateUrl, workOrderData, {
			headers: this.props.headers
		})
		.then(data => {
			console.log(data)
			this.setState({
				allWorkOrderNotes: data.data.acf.update_notes,
				loadingWindowStatus: 'hide',
			})
			

			document.getElementById("add-worknote-box").value = ''
		})

	}


    handleChange(event) {
		let valName =  event.target.name		
	    this.setState({ [valName]: event.target.value })
	    console.log(this.state)	    
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
					
						<StatusSimpleDrop dropClass="status-drop" currentStatus={this.props.dropdowns.selectedStatus} dropItems={this.props.statusOptions} {...this.props} />			

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
								this.props.workOrder.acf.images ? 							
								this.props.workOrder.acf.images.map(image => (
										<a className="item" key={image.id}>
											<img src={image.url} alt={image.name}/>
										</a>
									)
								)
								:
								<span></span>
							}												

						</div>

				
					{
						this.state.allWorkOrderNotes ? 							
						<div>
							<h2 className="section-title">Notes</h2>
							{
								this.state.allWorkOrderNotes.map(note => (
										<div className="note-card" key={note.id}>
											{note.work_note} 
										</div>
									)
								)
							}
						</div>						
						:
						<span></span>
					}			

					<h2 className="section-title">Add New Note</h2>
					<form className="add-notes-block" id="add-notes-block" onSubmit={e => this.updateWorkOrderNotes(e)}>
						<textarea name="workNote" id="add-worknote-box" rows="5" className="add-notes" onChange={this.handleChange}></textarea>
						<button className="topmargin-2 submit-new-note primary button">add new note</button>
					</form>

					</div>								
					<LoadingWindow visibleState={this.state.loadingWindowStatus} message={this.state.loadingWindowMessage}  />                                      
				</div>
	}
}


export default connect(state => state)(SingleWorkOrder)