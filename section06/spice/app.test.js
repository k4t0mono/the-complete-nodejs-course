// app.test.js

const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app.js');

describe('App', () => {
	var db = {
		saveUser: expect.createSpy()
	};
	app.__set__('db', db);

	test('should call the spy correctly', () => {
		var spy = expect.createSpy();
		spy();
		expect(spy).toHaveBeenCalled();
	});


	test('should call `saveUser` with user object', () => {
		var email = 'k4t0mono@terminus.io';
		var password = '1234asdf';

		app.handleSignup(email, password);
		expect(db.saveUser).toHaveBeenCalledWith({ email, password });
	});

});
