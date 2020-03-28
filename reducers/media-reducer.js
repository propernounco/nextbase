const mediaReducer = (state = '', {type, payload}) => {	
    switch (type) {
        case 'FOO':
            return {...state, foo: payload};        
        case 'ASSIGNED_EMPLOYEE':
            return {...state, assignedEmployee: payload};       		
        case 'WORK_ORDER_STATUS':
            return {...state, workOrderStatus: payload};                   
        default:
            return state
    }
};

export default mediaReducer
