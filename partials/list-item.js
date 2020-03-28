import RightCaret from '../public/static/svg/right-caret.svg'

const TwoRowListItem = (props) => (
	

	// {
	// 	props.stateName &&
	// }
	<a href={`${props.href}`} className="list-item" data-state-name={`${props.stateName ? props.stateName : ''}`} data-state-value={`${props.stateValue ? props.stateValue : ''}`} >		
		<div className="left">
			<span className="big">{props.rowOne}</span>			
		</div>
		<div className="right">
			<RightCaret />
		</div>
	</a>
	
)
export default TwoRowListItem