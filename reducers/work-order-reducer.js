const workOrderReducer = (state = '', {type, payload}) => {	
    switch (type) {
        case 'FOO':
            return {...state, foo: payload};        
        case 'ASSIGNED_EMPLOYEE':
            return {...state, assignedEmployee: payload};       		
        case 'WORK_ORDER_STATUS':
            return {...state, workOrderStatus: payload};  
        case 'WORK_ORDER_LIST_LOADING':
            return {...state, workOrderLoading: payload};                   
        case 'WORK_ORDER_LIST':
            return {...state, workOrderList: payload};                               
        default:
            return state
    }
};

export default workOrderReducer
