import * as types from '../actions/actionTypes';

export function addMovement(movement) {
	return { type: types.ADD_MOVEMENT_SUCCESS, movement };
}
