import {SET_ACTIVE_PROGRAM} from '../actions/types';

export const setActiveProgram = (program) => (
    {
        type: SET_ACTIVE_PROGRAM,
        data: program
    }
)