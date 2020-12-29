import {combineReducers} from 'redux';
import tasks from './taskReducer';
import categories from './categoryReducer';

const rootReducer = combineReducers({
    tasks,categories
});

export default rootReducer;