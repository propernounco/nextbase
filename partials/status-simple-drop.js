import { connect } from 'react-redux'
import DownCaret from '../public/static/svg/caret-down.svg'

const statusSimpleDrop = (props) => {
	
	function changeSimpleDropState(e){	
		e.currentTarget.parentNode.querySelectorAll('.bg')[0].classList.toggle('active')
		e.currentTarget.parentNode.querySelectorAll('.dropdown')[0].classList.toggle('active')
	}
	function closeSimpleDrop(e){		
		e.target.parentNode.querySelectorAll('.bg')[0].classList.remove('active')		
		e.target.parentNode.querySelectorAll('.dropdown')[0].classList.remove('active')		
	}

	return (
		<div className="simple-dropdown-container topmargin-2">			
			<button className={`page-dropdown ${props.dropClass}`} onClick={e => changeSimpleDropState(e, props.forms.simpleDropdownStatus === 'active' ? '' : 'active')}>														
				<div className="dropdown-section">
					<span className={ props.currentStatus.replace(' ', '').toLowerCase() }></span>
				</div>
				<div className="selected-title">					
					{props.currentStatus.charAt(0).toUpperCase() + props.currentStatus.slice(1)}
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
						<button type="button" className="item" value={item.value} key={item.value}>
							{item.text}
						</button>
					)
				}								
			</div>
		</div>
	)
}

export default connect(state => state)(statusSimpleDrop)