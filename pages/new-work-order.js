import React from 'react'
import getConfig from 'next/config'

import { connect } from 'react-redux'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const axios = require('axios').default;
import Head from 'next/head'
import Meta from '../partials/seo-meta.js'
import Router from 'next/router';

import PageTitle from '../partials/page-title.js'
import TwoRowListItem from '../partials/two-row-list-item.js'
import CallEmail from '../partials/call-email.js'
import DownCaret from '../public/static/svg/caret-down.svg'

import SimpleDrop from '../partials/simple-drop.js'
import PropertiesDrop from '../partials/properties-drop.js'

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

import LoadingWindow from '../partials/loading-window'

let inputCount = 0;

class NewInspection extends React.Component {	
	
	constructor(props) {
	    super(props)	    
	    this.state = { 	    	
	    	properties: [],
	    	issues: [],
	    	issuesLoading: true,	    	
	    	propertiesLoading: true,	    	
	    	isLoading: true,
	    	selectedProperty: '',
	    	selectedIssue: '',
	    	emailCCList: '',
	    	workNote: '',
	    	imageFiles: [],
	    	loadingWindowStatus: 'hide',
	    	loadingWindowMessage: 'Logging In. Please Wait'    
	    };

	    this.createNewWorkOrder = this.createNewWorkOrder.bind(this)
	    this.insertNewWorkOrder = this.insertNewWorkOrder.bind(this)
	    this.handleChange = this.handleChange.bind(this)	    		
		this.addNewImageInput = this.addNewImageInput.bind(this)			
	    
	}

	static async getInitialProps({ store, isServer, pathname, query, asPath, req, res }) {	    

		store.dispatch({ 
    		type: "DROP_BUTTON_TEXT", 
    		payload: "Select A Property"
    	})

    	return{			
			auth_token: req.cookies.tcii_auth_token,
			user_id: req.cookies.tcii_user_id,
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

	    let issues = [
			{
				text: 'Roof',
				value: '1'
			},
			{
				text: 'AC',
				value: '2'
			},
			{
				text: 'Leak',
				value: '3'
			},
			{
				text: 'Heat',
				value: '4'
			}
	    ]

		this.setState({			
	    	issues: issues,	    	
	    	issuesLoading: false    	
		})
	}	
	

	insertNewWorkOrder(formData, imageData){
	
		let postUrl = publicRuntimeConfig.api_base + 'work_orders';		
		let mediaUrl = publicRuntimeConfig.custom_api_base + 'multiupload';

		let headers = {
			'Content-type': 'application/json', 
			'Authorization': 'Bearer ' + this.props.auth_token						
		}

		let multipartHeaders = {
			'Content-Type': 'multipart/form-data',	
			'Authorization': 'Bearer ' + this.props.auth_token						
		}

		let allData = formData;

		let date = new Date();
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = date.getFullYear();

		let today = mm + '-' + dd + '-' + yyyy;

		let newWorkOrderData = {
			title: 'new work order ' + today + ' ' + this.props.dropdowns.dropButtonText,
			content: '',
			status: 'publish'
		}

		if(imageData){	

			let imageIdArr;

			this.setState({			
				loadingWindowMessage: 'Uploading Photos. Please Wait.'
			})
				
			axios.post(mediaUrl, imageData, {
				headers: multipartHeaders
			})
			.then(data => {
				imageIdArr = data.data
				
				axios.post(postUrl, newWorkOrderData, {
					headers: headers
				})
				.then(data => {
					this.setState({			
						loadingWindowMessage: 'Finalizing Work Order. Please Wait.'
					})
				
					console.log('insert done')
					let fieldUpdateUrl = publicRuntimeConfig.acf_api_base + '/work_orders/' + data.data.id
					let inspectionUpdateData = {
						"fields": {
							issue: allData.issue,
							status: 'todo',
							employee: this.props.user_id,
							work_description: allData.work_description,
							work_order_date: date,
							images: imageIdArr,
							property: allData.property
						}
					}

					axios.post(fieldUpdateUrl, inspectionUpdateData, {
						headers: headers
					})
					.then(data => {
						console.log(data)
						console.log('finished insert')
						this.setState({			
							loadingWindowMessage: 'Work Order Created.'
						})
						setTimeout(() => {
							Router.back()
						}, 1500)	
					})
				})
			})
		}
		else{

			this.setState({			
				loadingWindowMessage: 'Creating Work Order. Please Wait.'
			})

			axios.post(postUrl, newWorkOrderData, {
				headers: headers
			})
			.then(data => {
				console.log(data)
				
				this.setState({			
					loadingWindowMessage: 'Finalizing Work Order. Please Wait.'
				})
				console.log('insert done')
				let fieldUpdateUrl = publicRuntimeConfig.acf_api_base + 'work_orders/' + data.data.id
				let inspectionUpdateData = {
					"fields": {
						issue: allData.issue,
						status: 'todo',
						employee: this.props.user_id,
						work_description: allData.work_description,
						work_order_date: date,
						property: allData.property
					}
				}

				axios.post(fieldUpdateUrl, inspectionUpdateData, {
					headers: headers
				})
				.then(data => {
					console.log(data)
					console.log('finished insert')
					this.setState({			
						loadingWindowMessage: 'Work Order. Submitted.'
					})
					setTimeout(() => {
						this.setState({			
							loadingWindowStatus: 'hide'
						})
						Router.back()
					}, 1500)	
				})
			})

		}
		
	}

	createNewWorkOrder(e){
		e.preventDefault();
	
		let validated = true;

		this.setState({
			loadingWindowStatus: 'show',
			loadingWindowMessage: 'Submitting Your Work Order. Please Wait.'
		})

		if(!this.props.dropdowns.selectedProperty){
			document.getElementsByClassName('property-drop')[0].style.border = '1px solid red';
			setTimeout(() => {
				document.getElementsByClassName('property-drop')[0].style.border = '0px';	
			}, 1000)
			validated = false;
		}
		if(!this.state.workNote){
			document.getElementById('work-note').style.border = '1px solid red';
			setTimeout(() => {
				document.getElementById('work-note').style.border = '0px';	
			}, 1000)		
			validated = false;
		}

		if(!validated){
			return;
		}

		let formData = {
			property: this.props.dropdowns.selectedProperty,
			issue: "roof",
			email_cc: this.state.emailCCList,
			work_description: this.state.workNote
		}
	
		let imgFormData = null;

		if(this.state.imageFiles.length > 0){

			imgFormData = new FormData()

			let x = 1;

			this.state.imageFiles.map(file => {												
				imgFormData.append("files_" + x , file[0])					
				x++
			})
			this.insertNewWorkOrder(formData, imgFormData)
			// console.log(imgArr)
			return;
		}
	
		console.log('building formdata')
		this.insertNewWorkOrder(formData, imgFormData)
		
	}
	
	handleChange(event) {
		let valName =  event.target.name		
	    this.setState({ [valName]: event.target.value })
	}



	addNewImageInput(e){
		e.preventDefault();		
		let newInput =  document.createElement("input");
		newInput.type = "file";
        newInput.name = "image_upload[" + inputCount + "]";
        newInput.id = "image_upload_" + inputCount ;

        let newInputRow = document.createElement("div")
        newInputRow.classList.add("file-input-row")

		let removeFileLink = document.createElement("a")
		removeFileLink.classList.add("remove-file-row")
		removeFileLink.innerHTML = "x"

		newInputRow.appendChild(newInput)
		newInputRow.appendChild(removeFileLink)

		document.getElementById('workorder-image-uploads').appendChild(newInputRow) 

		document.getElementById('image_upload_'+inputCount).addEventListener('change', (e) => {			  
		  e.target.classList.add('active')
		  
		  let joined = this.state.imageFiles.concat(e.target.files)

		  this.setState({
		  	imageFiles: joined 
		  })

		  console.log(this.state)
		});

		document.getElementById('image_upload_'+inputCount).click()

		inputCount++;
	}
	



	render() {		
	

		return <div className="new-inspection page">
					<Meta title="Login" 
							desc="" 
							canonical=""
					/>
					<div className="container">	
						<PageTitle title="New Work Order" />										
						<form onSubmit={this.createNewWorkOrder}>
				
							{																										
								this.state.propertiesLoading ?
								<div className="block-loading">
									<div className="loader"></div>
								</div>
								:
								<PropertiesDrop dropClass="property-drop" buttonVal={this.props.dropdowns.dropButtonText} dropItems={this.state.properties} {...this.props} />			
							}
							
							{												
														
								this.state.propertiesLoading ?
								<span></span>
								:
								<SimpleDrop dropClass="issue-drop" buttonVal="Select Issue Type" dropItems={this.state.issues} {...this.props} />			
							}						
		
							{												
														
								this.state.propertiesLoading ?
								<span></span>
								:
								<span>
									<input type="text" className="email-cc ui-input full topmargin-2" placeholder="Email CC List" name="emailCCList" onChange={this.handleChange} />
									<div className="textarea-contain topmargin-2">
										<textarea id="work-note" onChange={this.handleChange} className="full-width ui-textarea" name="workNote" placeholder="Add A Note" cols="30" rows="10"></textarea>
									</div>		
				
									<button type="button" className="topmargin-2 add-photos button full-width white" onClick={this.addNewImageInput}>Add Photos To Work Order</button>

									<div id="workorder-image-uploads">
										
									</div>
	
									<div id="uploads-test"></div>

									<button type="submit" className="topmargin-2 primary button full-width">Submit Work Order</button>
										
									<div className="text center text-center topmargin-2">
										<a href="/single-property" className="cancel link">Cancel Work Order</a>
									</div>	
								</span>	
							
							}

						</form>
									
						
					</div>						
					<LoadingWindow visibleState={this.state.loadingWindowStatus} message={this.state.loadingWindowMessage}  />                                      
				</div>
	}
}


export default connect(state => state)(NewInspection);