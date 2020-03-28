import { combineReducers } from 'redux'



const navReducer = (state = '', {type, payload}) => {
    switch (type){
        case 'dropdownStatus':
            return {...state, dropdownStatus: payload}
        default:
            return state    
    }
}


const inspectionReducer = (state = '', {type, payload}) => {
    switch (type) {
        case 'FOO':
            return {...state, foo: payload};        
        default:
            return state
    }
};

const allReducers = combineReducers({
    navigation: navReducer,
    inspections: inspectionReducer
})


export default allReducers
