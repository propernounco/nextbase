import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()
const axios = require('axios').default;

const InspectionListItem = (props) => {  	
		
  	function showModal(e){
  		e.preventDefault();
		//e.target.parentNode.classList.add('active')
		e.target.closest('.inspection-list-item-wrap').classList.add('active')
	}

	function hideModal(e){
		e.preventDefault();
		
		e.target.parentNode.parentNode.classList.remove('active')
		e.target.parentNode.classList.remove('active')
	}
	
	function setActiveSectionEvent(e){
		e.preventDefault();
		
		var sections = document.getElementsByClassName('form-section')
		for(let a = 0; a < sections.length; a++){
			sections[a].classList.remove('active')
		}
		var parent = e.target.closest('form')
	
		parent.querySelectorAll('.form-section.section-' + e.target.value)[0].classList.add('active')
	}

	function setActiveSection(section, e){
		
		var sections = document.getElementsByClassName('form-section')
		for(let a = 0; a < sections.length; a++){
			sections[a].classList.remove('active')
		}
		var parent = e.target.closest('form')
	
		parent.querySelectorAll('.form-section.section-' + section)[0].classList.add('active')
	}

	function setFirstSection(e){
		let sections = document.getElementsByClassName('form-section')
		for(let a = 0; a < sections.length; a++){
			sections[a].classList.remove('active')
		}
		let parent = e.target.closest('form')
		parent.querySelectorAll('.form-section.section-1')[0].classList.add('active')
	}
	
	function addNewNote(e){		
		setFirstSection(e)		
	}

	function cancelNewNote(e){		
		setFirstSection(e)
		e.target.closest('.notes').querySelectorAll('textarea')[0].value = ""
	}
	
	function showImage(e){
		setActiveSection(4, e)
		let imgSrc = e.target.getAttribute('src')
		// e.target.parentNode.parentNode.parentNode.parentNode
		e.target.closest('form').querySelectorAll('.single-photo .responsive-img img')[0].src = imgSrc	
	}

	function updateInspectionStatus(e){
		
		let specific_inspection = e.target.getAttribute('data-specific-inspection')
		let section_group = e.target.getAttribute('data-section-group')
		let inspection_block = e.target.getAttribute('data-inspection-block')
		let inspection_id = e.target.getAttribute('data-inspection-id')
		let status_value = e.target.value

		let headers = {
			'Content-type': 'application/json', 
			'Authorization': 'Bearer ' + props.auth_token 
		}

		
		// let propertyId = this.state.propertyId				
		let fieldUpdateUrl = publicRuntimeConfig.acf_api_base + '/property_inspections/' + inspection_id
		let inspectionUpdateData = {
			"fields": {
				[section_group]: {
					[specific_inspection]: {
						[inspection_block]: status_value
					}
				}
			}		
		}

		// let inspectionUpdateData = {"fields": ""}

		// console.log(inspectionUpdateData)
		// inspectionUpdateData["fields"]["front_house_common_areas"]["sidewalk_cleanliness"]["status"] =	status_value
		

		axios.post(fieldUpdateUrl, inspectionUpdateData, {
			headers: headers
		})
		.then(data => {
			console.log(data)
			document.querySelectorAll('.inspection-list-item-wrap.' + specific_inspection + ' .status-icon')[0].classList.remove('todo')
			document.querySelectorAll('.inspection-list-item-wrap.' + specific_inspection + ' .status-icon')[0].classList.add('complete')
			
			// this.setState({
			// 	loadingWindowMessage: "Redirecting to Inspection"
			// })
			// setTimeout(() => {
			// 	Router.push('/inspection/' + newInspectionSlug)						
			// }, 1000)
		})
	}

	return(
		<div className={`inspection-list-item-wrap ${props.specificInspection}`}>
			<button type="button" className="inspection-list-item" onClick={e => showModal(e)}>
				<span className={`status-icon ${props.taskStatus}`}>
					
				</span>
				<span className="task-title">
					{props.title}
				</span>
				<span className="actions">
					<span></span>
					<span></span>
					<span></span>
				</span>
			</button>
			<div className="inspection-list-item-background" onClick={e => hideModal(e)}>
				
			</div>			
			<div className="inspection-list-item-form">				
				<a onClick={e => hideModal(e)} className="close">x</a>
				<h3 className="topmargin-8">{props.title}</h3>
				<form id={props.sectionGroup}>					
					<span className="section-1 form-section active ratings">
						<div className="checkboxes-right">
							<label className="circle-checkbox">
								Good
								{props.status == 'good' ? 
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" value="good" onChange={updateInspectionStatus} defaultChecked />
								:
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" value="good" onChange={updateInspectionStatus}  /> 
								}								
								
							</label>	
							<label className="circle-checkbox">
								Fair
								{props.status == 'fair' ? 
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" value="fair" defaultChecked onChange={updateInspectionStatus} />
								:
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" value="fair" onChange={updateInspectionStatus}  /> 
								}
							</label>	
							<label className="circle-checkbox">
								Poor
								{props.status == 'poor' ? 
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" onChange={updateInspectionStatus} value="poor" defaultChecked />
								:
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" onChange={updateInspectionStatus} value="poor"  /> 
								}
							</label>	

							<label className="circle-checkbox">
								Not Applicable
								{props.status == 'na' ? 
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" onChange={updateInspectionStatus} value="na" defaultChecked />
								:
									<input className="radio inspection_rating" type="radio" data-inspection-id={props.inspectionId} data-section-group={`${props.sectionGroup}`} data-specific-inspection={`${props.specificInspection}`} data-inspection-block="status" name="inspection_rating" onChange={updateInspectionStatus} value="na"  /> 
								}								
							</label>	
						</div>
						
						<div className="container topmargin-3">
							<div className="buttons nomargin">
								<button type="button" onClick={e => setActiveSectionEvent(e)} className="add-note button" value="2">Add A Note</button>
								<button type="button" onClick={e => setActiveSectionEvent(e)} className="add-photo button" value="3">Add A Photo</button>
							</div>
							<button onClick={e => setActiveSectionEvent(e)} className="button full-width topmargin-2" value="3" type="button">View Inspection Media</button>
							<button className="button primary full-width topmargin-2" type="button">Update Inspection Section</button>
							
							<div className="text-center topmargin-5">
								<button className="cancel link">Cancel Review</button>
							</div>
						</div>
						
					</span>

					<span className="section-2 form-section notes">
						<div className="container">
							<div className="textarea-contain">
								<textarea data-inspection-id={props.inspectionId} data-update-val={`${props.sectionGroup}_${props.specificInspection}_notes`} name="inspection-notes" id="" cols="30" rows="10" placeholder="Add A Note..."></textarea>								
							</div>
							<div className="text-center topmargin-3">
								<button className="button primary full-width" type="button" onClick={e => addNewNote(e)}>Add Inspection Note</button>
								<button type="button" className="link cancel" onClick={e => cancelNewNote(e)} value="1">Cancel Note</button>
							</div>							
						</div>						
					</span>

					<span className="section-3 form-section photos">
						<div className="container">
							
							<div className="split-grid">
								<a href="#" className="item" onClick={e => showImage(e)}>
									<img src="/static/images/media/temp-media-1.jpg" alt=""/>
								</a>
								<a href="#" className="item" onClick={e => showImage(e)}>
									<img src="/static/images/media/temp-media-2.jpg" alt=""/>
								</a>
								<a href="#" className="item" onClick={e => showImage(e)}> 
									<img src="/static/images/media/temp-media-3.jpg" alt=""/>
								</a>
								<a href="#" className="item" onClick={e => showImage(e)}>
									<img src="/static/images/media/temp-media-4.jpg" alt=""/>
								</a>
							</div>

							<div className="topmargin-5 text-center">
								<input type="file"/>
								<div className="clear topmargin-5"></div>
							<button type="button" className="link" onClick={e => setActiveSectionEvent(e)} value="1">Go Back</button>
							</div>
							

						</div>
					</span>

					<span className="section-4 form-section single-photo">
						<div className="container">
							<div className="image responsive-img">
								<img src="/static/images/media/temp-media-1.jpg" alt=""/>
							</div>
							<div className="text-center topmargin-5">
								<a href="#" className="text-link go-back link" onClick={e => setActiveSection(3, e)} >Go Back</a>
							</div>							
						</div>						
					</span>

				</form>
			</div>
		</div>
	)
  	

}

export default InspectionListItem