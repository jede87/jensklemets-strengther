import * as types from './actionTypes';

import exerciseTypeApi from '../api/mockExerciseTypeApi';

export function addExerciseType(exerciseType) {
	return { type: types.ADD_EXERCISETYPE_SUCCESS, exerciseType };
}
export function deleteExerciseType(exerciseType) {
	return { type: types.DELETE_EXERCISETYPE_SUCCESS, exerciseType };
}
export function loadExerciseTypesSuccess(exerciseTypes) {
	return { type: types.LOAD_EXERCISETYPES_SUCCESS, exerciseTypes };
}
export function loadExerciseTypes() {
	return function(dispatch) {
		return exerciseTypeApi
			.getAllTypes()
			.then(exerciseTypes => {
				dispatch(loadExerciseTypesSuccess(exerciseTypes));
			})
			.catch(error => {
				throw error;
			});
	};
}
