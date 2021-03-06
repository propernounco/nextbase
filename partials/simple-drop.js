import { connect } from 'react-redux'
import DownCaret from '../public/static/svg/caret-down.svg'

const simpleDrop = (props) => {
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

	function closeSimpleDrop(e){		
		e.preventDefault()
		e.target.parentNode.querySelectorAll('.bg')[0].classList.remove('active')		
		e.target.parentNode.querySelectorAll('.dropdown')[0].classList.remove('active')		
	}

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
					props.dropItems.map( item => 
						<button type="button" className="item" value={item.value} key={item.value}>
							{item.text}
						</button>
					)
				}								
			</div>
		</div>
	)
}

export default connect(state => state)(simpleDrop)