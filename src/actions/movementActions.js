import * as types from '../actions/actionTypes';

import movementApi from '../api/mockMovementApi';

export function loadMovementsSuccess(movements) {
	return { type: types.LOAD_MOVEMENTS_SUCCESS, movements };
}

export function addMovement(movement) {
	return { type: types.ADD_MOVEMENT_SUCCESS, movement };
}

export function createMovementSuccess(movement) {
	return { type: types.CREATE_MOVEMENT_SUCCESS, movement };
}

export function updateMovementSuccess(movement) {
	return { type: types.UPDATE_MOVEMENT_SUCCESS, movement };
}

export function deleteMovement(movement) {
	return { type: types.DELETE_MOVEMENT_SUCCESS, movement };
}

export function saveMovement(movement) {
	return function(dispatch, getState) {
		return movementApi.saveMovement(movement).then(savedMovement => {
			movement.id
				? dispatch(updateMovementSuccess(savedMovement))
				: dispatch(createMovementSuccess(savedMovement));
		});
	};
}

export function loadMovements() {
	return function(dispatch) {
		return movementApi
			.getAllMovements()
			.then(movements => {
				dispatch(loadMovementsSuccess(movements));
			})
			.catch(error => {
				throw error;
			});
	};
}
