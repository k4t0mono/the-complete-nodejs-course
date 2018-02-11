// utils.test.js

const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
	var res = utils.add(33, 11);
	
	expect(res).toBe(44).toBeA('number');
});

it('should return squared number', () => {
	var res = utils.square(3);

	expect(res).toBe(9).toBeA('number');
});

it('should verify first and last name are set', () => {
	var k4t0 = {
		age: 19,
		spice: "ocelot"
	}

	var result = utils.setName(k4t0, "KatoMono Enkeli");

	expect(result).toInclude({
		firstName: "KatoMono",
		lastName: "Enkeli"
	}).toBeA('object');
})
