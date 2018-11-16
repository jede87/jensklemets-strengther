import delay from './delay';
import uuid from 'uuid';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const movements = [
	{
		id: uuid(),
		title: 'Squats',
		muscleGroups: ['legs']
	}
];

class MovementApi {
	static getAllMovements() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], movements));
			}, delay);
		});
	}

	static saveMovement(movement) {
		movement = Object.assign({}, movement); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minMovementTitleLength = 1;
				if (movement.title.length < minMovementTitleLength) {
					reject(
						`Title must be at least ${minMovementTitleLength} characters.`
					);
				}

				if (movement.id) {
					const existingMovementIndex = movements.findIndex(
						a => (a.id = movement.id)
					);
					movements.splice(existingMovementIndex, 1, movement);
				} else {
					//Just simulating creation here.
					//The server would generate ids and watchHref's for new movements in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					movement.id = uuid();
					movements.push(movement);
				}

				resolve(movement);
			}, delay);
		});
	}

	static deleteMovement(movementId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfMovementToDelete = movements.findIndex(
					movement => {
						movement.id = movementId;
					}
				);
				movements.splice(indexOfMovementToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default MovementApi;
