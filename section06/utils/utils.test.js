// utils.test.js

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);

	if(res !== 44) {
		throw new Error(`Error: Expected 44, but got ${res}`);
	}
});

it('should return squared number', () => {
	var res = utils.square(3);

	if(res !== 9) {
		throw new Error(`Error: Expected 9, bur got ${res}`);
	}
});
