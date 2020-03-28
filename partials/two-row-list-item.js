import Link from 'next/link'
import RightCaret from '../public/static/svg/right-caret.svg'


const TwoRowListItem = (props) => (
		
	<Link href={`${props.href}`} >
		<a className="two-row-list-item list-item" data-state-name={`${props.stateName ? props.stateName : ''}`} data-state-value={`${props.stateValue ? props.stateValue : ''}`} >		
			<div className="left">
				<span className="big">{props.rowOne}</span>
				<span className="small">{props.rowTwo}</span>
			</div>
			<div className="right">
				<RightCaret />
			</div>
		</a>
	</Link>
	
)
export default TwoRowListItem