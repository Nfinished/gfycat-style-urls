const adjectives = require('./adjectives')
const animals = require('./animals')

module.exports = {
	generateCombination(numAdjectives, delimiter) {
		let combination = '';
		const animal = animals[Math.floor(Math.random() * animals.length)]

		for (let i = 0; i < numAdjectives; i++) {
			const adjective = adjectives[Math.floor(Math.random() * adjectives.length)]

			combination += adjective + delimiter
		}

		combination += animal
		return combination
	}
};
