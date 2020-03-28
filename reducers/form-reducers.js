const formReducers = (state = '', {type, payload}) => {
    switch (type){
        case 'SIMPLE_DROPDOWN_STATUS':
            return {...state, simpleDropdownStatus: payload}

        default:
            return state    
    }
}

export default formReducers