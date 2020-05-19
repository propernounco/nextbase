const mediaReducer = (state = '', {type, payload}) => {	
    switch (type) {
        case 'FOO':
            return {...state, foo: payload};        
        case 'ASSIGNED_EMPLOYEE':
            return {...state, assignedEmployee: payload};       		
        case 'WORK_ORDER_STATUS':
            return {...state, workOrderStatus: payload};                   
        case 'MEDIA_LOADING':
            return {...state, mediaLoading: payload};                       
        case 'CURRENT_IMAGES':
            return {...state, currentImages: payload};                       
        default:
            return state
    }
};

export default mediaReducer
