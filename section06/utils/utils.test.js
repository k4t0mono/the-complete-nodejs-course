// utils.test.js

const expect = require('expect');

const utils = require('./utils');


describe('Utils', () => {
	
	describe('#add', () => {

		it('should add two numbers', () => {
			var res = utils.add(33, 11);
			
			expect(res).toBe(44).toBeA('number');
		});
	
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
	});


	it('should assync add two numbers', (done) => {
		utils.assyncAdd(4, 3, (sum) => {
			expect(sum).toBe(7).toBeA('number');
			done();
		});
	});


	it('should assync square a number', (done) => {
		utils.assyncSquare(3,  (sq) => {
			expect(sq).toBeA('number').toBe(9);
			done();
		});
	});

});
