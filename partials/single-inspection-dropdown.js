// ${this.state.dropdownStatus}
// {entities.decode(section.title.rendered.replace('Property Inspections &#8211;', ''))}
import { useState, useContext } from 'react';

const Entities = require('html-entities').AllHtmlEntities;
const entities = new Entities();

import getConfig from 'next/config'
const {serverRuntimeConfig, publicRuntimeConfig} = getConfig()

const InspectionDropdown = (props) => {

    const [count, setCount] = useState(0);
	
	const questions = props.inspections.allSectionQuestions

    function closeMenu(e){
		e.preventDefault()
		props.dispatch({
			type:'DROPDOWN_STATUS',
			payload:''
		})
    }

    function updateInspectionList(e, val){
		
		e.preventDefault()		
			
		let newSection = props.inspections.inspectionSections.filter(function (item) {
			return item.slug == val ;
		});
		
		let currentFields = props.inspections.allSectionQuestions.filter(function (item) {
			return item.section == val ;
		});

		
		props.dispatch(
    	{ 
	    		type: "CURRENT_INSPECTION_SECTION", 
	    		payload: newSection[0].title
	    	}	    	
	    );
	    props.dispatch(
	    	{
	    		type: "DROPDOWN_STATUS",
	    		payload: ""
	    	}	    	
	    )
	    props.dispatch(
	    	{
	    		type: "CURRENT_INSPECTION_SECTION_FIELDS",
	    		payload: currentFields
	    	}	    	
	    )


		
    }

	return (
		<div className="sidebar-list">
			
			{				
				props.inspections.inspectionSections ?
				props.inspections.inspectionSections.map(section => (
						<a href="#" key={section.slug} onClick={e => updateInspectionList(e, section.slug)}>
							<span className="item">
								x
							</span>
							<span className="title">
								{entities.decode(section.title)}
							</span>
							<span className="status-icon pending">

							</span>
						</a>
					)				
				)
				:
				<div></div>
			}
			

			<a href="#" className="close-menu" onClick={closeMenu}>Close Menu</a>
		</div>
	)		
	
}

export default InspectionDropdown
