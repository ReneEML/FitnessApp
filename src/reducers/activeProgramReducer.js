import {SET_ACTIVE_PROGRAM} from '../actions/types';

const initialState = {
    start: "",
    template: "",
    id: "",
}

const activeProgramReducer = (state = initialState, action) =>{
    switch(action.type){
        case SET_ACTIVE_PROGRAM:
            return {
                ...state,
                start: action.data.start,
                template: action.data.template,
                id: action.data.id
            }
        default:
            return state;
    }
}

export default activeProgramReducer;