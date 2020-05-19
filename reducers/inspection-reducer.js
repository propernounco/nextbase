const inspectionReducer = (state = '', {type, payload}) => {	
    switch (type) {
        case 'FOO':
            return {...state, foo: payload};        
        case 'CURRENT_INSPECTION_SECTION':
            return {...state, currentInspectionSection: payload};    
        case 'INSPECTION_SECTIONS':
            return {...state, inspectionSections: payload};        
        case 'CURRENT_INSPECTION_SECTION_FIELDS':
            return {...state, currentInspectionSectionFields: payload};        
        case 'ALL_SECTION_QUESTIONS':
            return {...state, allSectionQuestions: payload};                    
        case 'LOAD_LIST_ITEMS':
        	return {...state, listItems: payload};        
        case 'SHOW_ITEM_FORM':
        	return {...state, listItems: payload};        	
        case 'HIDE_ITEM_FORM':
        	return {...state, listItems: payload};       
        case 'INSPECTION_LIST':
            return {...state, inspectionList: payload};
        case 'INSPECTION_LIST_LOADING':
            return {...state, inspectionListLoading: payload};
        default:
            return state
    }
};

export default inspectionReducer
