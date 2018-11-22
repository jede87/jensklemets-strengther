import { combineReducers } from 'redux';
import movements from './movementReducer';
import exerciseTypes from './exerciseTypeReducer';

const rootReducer = combineReducers({
	movements,
	exerciseTypes
});

export default rootReducer;
