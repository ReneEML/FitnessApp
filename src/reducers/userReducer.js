import {SET_USER} from '../actions/types';

const initialState = {
    email: "",
    id: "",
    name: "",
}

const userReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                email: action.data.email,
                id: action.data.id,
                name: action.data.name
            }
        default:
            return state;
    }
}

export default userReducer;