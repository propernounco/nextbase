import { connect } from 'react-redux'
import DownCaret from '../public/static/svg/caret-down.svg'
const axios = require('axios').default;
import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()


const propertiesDrop = (props) => {
	// const changeSimpleDropState = (value) => props.dispatch({ 
	// 		type: "SIMPLE_DROPDOWN_STATUS",
	// 		payload: value
	// 	});

	// const closeSimpleDrop = () => props.dispatch({ 
	// 		type: "SIMPLE_DROPDOWN_STATUS",
	// 		payload: ""
	// 	});

	function changeSimpleDropState(e){	
		e.preventDefault()
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
		e.preventDefault()	
		e.target.parentNode.querySelectorAll('.bg')[0].classList.remove('active')		
		e.target.parentNode.querySelectorAll('.dropdown')[0].classList.remove('active')		
	}	

	function testChange(){
		console.log('yup')
	}

	
	function getSelectedPropertyImages(id){
		props.dispatch({
			type: "MEDIA_LOADING",
			payload: true
		})
		axios.get(publicRuntimeConfig.api_base + 'media?filter[meta_key]=property&filter[meta_value]=' + id)	  			
		.then(json => {		
			console.log(json)	
			props.dispatch({
				type: "CURRENT_IMAGES", 
		    	payload: json.data
			})
			props.dispatch({
				type: "MEDIA_LOADING",
				payload: false
			})
		})
    }

	function refreshWorkOrders(propertyId){
		
		props.dispatch({ 
			type: "WORK_ORDER_LIST_LOADING",
			payload: true
		});	

		axios.get(publicRuntimeConfig.api_base + 'work_orders?filter[meta_key]=property&filter[meta_value]=' + propertyId)		
				.then(json => {
					props.dispatch({
						type:"WORK_ORDER_LIST",
						payload: json.data
					})

					props.dispatch({ 
						type: "WORK_ORDER_LIST_LOADING",
						payload: false
					});	
				})

	}

	function setSelectedProperty(e, callback){
	
		e.preventDefault();

		let propId = e.target.getAttribute('data-property-id')
		let propName = e.target.value

		props.dispatch({ 
			type: "SELECTED_PROPERTY",
			payload: propId
		});

		props.dispatch({ 
			type: "DROP_BUTTON_TEXT",
			payload: propName
		});
	
		closeAllDrops()		
	
		if(callback){
			eval(callback + '('+ propId +')')
		}

	}



	

	// console.log(props)

	return (
		<div className="simple-dropdown-container topmargin-2">		

			<button className={`page-dropdown ${props.dropClass}`} onClick={e => changeSimpleDropState(e)}>														
				<div className="selected-title">
					{props.buttonVal}
				</div>
				<div className="drop-icon">
					<DownCaret />
				</div>
			</button>
			
			<div onClick={e => closeSimpleDrop(e)} className="bg">
			</div>

			<div className={`dropdown`}>
				{
					props.dropItems.map( listItem => 
						{
							if(props.changeFunc){
								return (
									<button type="button" className="item" data-property-id={listItem.id} value={listItem.title.rendered} key={listItem.slug} onClick={e => setSelectedProperty(e, props.changeFunc)}>
										{listItem.title.rendered}
									</button>
								)
							}
							else{
								return (
									<button type="button" className="item" data-property-id={listItem.id} value={listItem.title.rendered} key={listItem.slug} onClick={setSelectedProperty}>
										{listItem.title.rendered}
									</button>
								)
							}
						}

					)
				}								
			</div>
		</div>
	)
}

export default connect(state => state)(propertiesDrop)