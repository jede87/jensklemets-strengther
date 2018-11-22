import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function movementReducer(
	state = initialState.exerciseTypes,
	action
) {
	switch (action.type) {
		case types.ADD_EXERCISETYPE_SUCCESS:
			return [...state, Object.assign({}, action.exerciseType)];
		case types.UPDATE_EXERCISETYPE_SUCCESS:
			return state;
		case types.DELETE_EXERCISETYPE_SUCCESS:
			return state;
		case types.LOAD_EXERCISETYPES_SUCCESS:
			return action.exerciseTypes;
		default:
			return state;
	}
}
