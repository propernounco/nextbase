import Link from 'next/link'
import RightCaret from '../public/static/svg/right-caret.svg'


const PropertyListItem = (props) => {
	function setCurrentProperty(e, propertyId){		
		localStorage.setItem('current_property', propertyId)
	}
	
	return (
		<Link href={`${props.href}`} >
			<a className="two-row-list-item list-item" data-state-name={`${props.stateName ? props.stateName : ''}`} onClick={e => setCurrentProperty(e, props.propertyId)} >		
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
}
export default PropertyListItem