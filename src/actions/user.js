import {SET_USER} from '../actions/types';

export const setUser = (user) => (
    {
        type: SET_USER,
        data: user
    }
)