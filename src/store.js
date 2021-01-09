import {createStore, combineReducers} from 'redux'
import userReducer from './reducers/userReducer';
import activeProgramReducer from './reducers/activeProgramReducer'
import maxesReducer from './reducers/maxesReducer';

const rootReducer = combineReducers({
    userReducer: userReducer,
    activeProgramReducer: activeProgramReducer,
    maxesReducer: maxesReducer

});

const configureStore = () => createStore(rootReducer);

export default configureStore;