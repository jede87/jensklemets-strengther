import delay from './delay';
import uuid from 'uuid';
// This file mocks a web API by working with the hard-coded data below.
// It uses setTimeout to simulate the delay of an AJAX call.
// All calls return promises.
const types = [
	{
		id: 1,
		title: 'legs'
	},
	{
		id: 2,
		title: 'arms'
	}
];

class TypeApi {
	static getAllTypes() {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(Object.assign([], types));
			}, delay);
		});
	}

	static saveType(type) {
		type = Object.assign({}, type); // to avoid manipulating object passed in.
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				// Simulate server-side validation
				const minTypeTitleLength = 1;
				if (type.title.length < minTypeTitleLength) {
					reject(
						`Title must be at least ${minTypeTitleLength} characters.`
					);
				}

				if (type.id) {
					const existingTypeIndex = types.findIndex(
						a => (a.id = type.id)
					);
					types.splice(existingTypeIndex, 1, type);
				} else {
					//Just simulating creation here.
					//The server would generate ids and watchHref's for new types in a real app.
					//Cloning so copy returned is passed by value rather than by reference.
					type.id = uuid();
					types.push(type);
				}

				resolve(type);
			}, delay);
		});
	}

	static deleteType(typeId) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				const indexOfTypeToDelete = types.findIndex(type => {
					type.id = typeId;
				});
				types.splice(indexOfTypeToDelete, 1);
				resolve();
			}, delay);
		});
	}
}

export default TypeApi;
