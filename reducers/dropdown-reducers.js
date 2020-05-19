const dropdownReducer = (state = '', {type, payload}) => {
    switch (type){
        case 'DROPDOWN_STATUS':
            return {...state, dropdownStatus: payload}
		case 'PROPERTIES_DROPDOWN_LIST':
            return {...state, propertiesDropList: payload}
		case 'SELECTED_PROPERTY':
            return {...state, selectedProperty: payload}
        case 'SELECTED_STATUS':
            return {...state, selectedStatus: payload}
        case 'DROP_BUTTON_TEXT':
            return {...state, dropButtonText: payload}                
        default:
            return state    
    }
}

export default dropdownReducer