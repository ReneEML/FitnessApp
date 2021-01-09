import {SET_BENCH, SET_SQUAT, SET_DEAD} from '../actions/types';

const initialState = {
    squat: "",
    bench: "",
    dead: ""
}

const maxesReducer = (state = initialState, action) => {
    switch(action.type){
        case SET_BENCH:
            return{
                ...state,
                bench: action.data
            }
        case SET_SQUAT:
            return{
                ...state,
                squat: action.data
            }
        case SET_DEAD:
            return{
                ...state,
                dead: action.data
            }
        default:
            return state;
    }
}

export default maxesReducer;