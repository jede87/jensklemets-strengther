import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function movementReducer(
	state = initialState.movements,
	action
) {
	switch (action.type) {
		case types.ADD_MOVEMENT_SUCCESS:
			return state;
		case types.UPDATE_MOVEMENT_SUCCESS:
			return state;
		case types.DELETE_MOVEMENT_SUCCESS:
			return state;
		case types.LOAD_MOVEMENTS_SUCCESS:
			return action.payload;
		default:
			return state;
	}
}
