const loadingReducer = (state = '', {type, payload}) => {
    switch (type){
        case 'LOADING_WINDOW_STATUS':
            return {...state, loadingWindowStatus: payload}
		case 'LOADING_WINDOW_MESSAGE':
            return {...state, loadingWindowMessage: payload}
        default:
            return state    
    }
}

export default loadingReducer