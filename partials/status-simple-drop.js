import { connect } from 'react-redux'
import DownCaret from '../public/static/svg/caret-down.svg'

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const axios = require('axios').default;

const statusSimpleDrop = (props) => {
	
	function changeSimpleDropState(e){	
		e.currentTarget.parentNode.querySelectorAll('.bg')[0].classList.toggle('active')
		e.currentTarget.parentNode.querySelectorAll('.dropdown')[0].classList.toggle('active')
	}

	function closeAllDrops(){
		Array.from(document.querySelectorAll('.bg')).map(item => {
			item.classList.remove('active')				
		})

		Array.from(document.querySelectorAll('.dropdown')).map(item => {
			item.classList.remove('active')				
		})
	}

	function closeSimpleDrop(e){		
		e.target.parentNode.querySelectorAll('.bg')[0].classList.remove('active')		
		e.target.parentNode.querySelectorAll('.dropdown')[0].classList.remove('active')		
	}

	function setSelectedStatus(e){
		e.preventDefault();

		let statusVal = e.target.value
		let workOrderId = e.target.getAttribute('data-item-id')
		
		console.log(statusVal)

		let statusName = e.target.value == 'todo' ? 'to do' : e.target.value

		props.dispatch({ 
			type: "SELECTED_STATUS",
			payload: statusVal
		});

		props.dispatch({ 
			type: "DROP_BUTTON_TEXT",
			payload: statusName
		});

		updateWorkorderStatus(statusVal, workOrderId);
	
		closeAllDrops()		
	}
	
	function updateWorkorderStatus(statusVal, workOrderId){
		// console.log(props.headers)
		// console.log(statusVal)

		let date = new Date();
		let dd = String(date.getDate()).padStart(2, '0');
		let mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
		let yyyy = date.getFullYear();

		let today = mm + '-' + dd + '-' + yyyy;

		let newUpdate = {
					date: date,
					work_note: 'Updated status to ' + statusVal
				}
		
		if(props.changeHistory.length > 0){
			props.changeHistory.map(item => {
				console.log(item.date)
				item.date = new Date(item.date)
			})
		}

		props.changeHistory.push(newUpdate)

		let fieldUpdateUrl = publicRuntimeConfig.acf_api_base + '/work_orders/' + workOrderId
		let workOrderStatusData = {
			"fields": {
				status: statusVal,
				updates: props.changeHistory
			}		
		}

		axios.post(fieldUpdateUrl, workOrderStatusData, {
			headers: props.headers
		})
		.then(data => {
			console.log(data)
		})

	}

	return (
		<div className="simple-dropdown-container topmargin-2">			
			<button className={`page-dropdown ${props.dropClass}`} onClick={e => changeSimpleDropState(e, props.forms.simpleDropdownStatus === 'active' ? '' : 'active')}>														
				<div className="dropdown-section">
					<span className={ props.currentStatus.replace(' ', '').toLowerCase() }></span>
				</div>
				<div className="selected-title">					
					{/*{props.currentStatus.charAt(0).toUpperCase() + props.currentStatus.slice(1)}*/}
					{props.dropdowns.dropButtonText}
				</div>
				<div className="drop-icon">
					<DownCaret />
				</div>
			</button>
			
			<div onClick={e => closeSimpleDrop(e)} className={`bg`}>
			</div>

			<div className='dropdown'>
				{
					props.dropItems.map( item => 
						<button type="button" className="item" value={item.value} key={item.value} data-item-id={props.workOrder.id} onClick={setSelectedStatus}>
							{item.text}
						</button>
					)
				}								
			</div>
		</div>
	)
}

export default connect(state => state)(statusSimpleDrop)