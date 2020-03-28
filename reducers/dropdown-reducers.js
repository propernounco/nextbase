const dropdownReducer = (state = '', {type, payload}) => {
    switch (type){
        case 'DROPDOWN_STATUS':
            return {...state, dropdownStatus: payload}
		case 'PROPERTIES_DROPDOWN_LIST':
            return {...state, propertiesDropList: payload}
        default:
            return state    
    }
}

export default dropdownReducer