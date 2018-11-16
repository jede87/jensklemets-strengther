import { combineReducers } from 'redux';
import movements from './movementReducer';

const rootReducer = combineReducers({
	movements
});

export default rootReducer;
