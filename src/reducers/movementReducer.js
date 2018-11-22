import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function movementReducer(
	state = initialState.movements,
	action
) {
	switch (action.type) {
		case types.ADD_MOVEMENT_SUCCESS:
			return [...state, Object.assign({}, action.movement)];
		case types.CREATE_MOVEMENT_SUCCESS:
			return [...state, Object.assign({}, action.movement)];
		case types.UPDATE_MOVEMENT_SUCCESS:
			return [
				...state.filter(movement => movement.id !== action.movement.id),
				Object.assign({}, action.movement)
			];
		case types.DELETE_MOVEMENT_SUCCESS:
			return state;
		case types.LOAD_MOVEMENTS_SUCCESS:
			return action.movements;
		default:
			return state;
	}
}
