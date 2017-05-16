import { combineReducers } from 'redux';

function reducer(state = {}, action){
    switch(action.type){
        case 'message':
            return Object.assign({}, {message: action.data});
        case 'AUTH': 
            return Object.assign({}, state, {auth: action.role});
        case 'RECEIVE_COURSES': 
            return Object.assign({}, state, {courses: action.courses});
        case 'RECEIVE_LECTORS': 
            return Object.assign({}, state, {lectors: action.lectors});
        default:
            return state;
    }
}

export default reducer;
