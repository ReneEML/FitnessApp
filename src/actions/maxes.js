import {SET_BENCH, SET_SQUAT, SET_DEAD} from '../actions/types';

const setBench = (weight) =>(
    {
        type: SET_BENCH,
        data: weight
    }
)

const setSquat = (weight) =>(
    {
        type: SET_SQUAT,
        data: weight
    }
)

const setDead = (weight) =>(
    {
        type: SET_DEAD,
        data: weight
    }
)

export {setBench, setSquat, setDead};