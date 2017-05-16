import { combineReducers } from 'redux';

function reducer(state = {}, action){
    switch(action.type){
        case 'message':
            return Object.assign({}, {message: action.data});
        case 'AUTH': 
            return Object.assign({}, {auth: action.role});
        default:
            return state;
    }
}

export default reducer;
