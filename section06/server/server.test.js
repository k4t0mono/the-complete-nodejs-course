// server.test.js

const request = require('supertest');
const expect = require('expect');

var app = require('./server.js').app;

it('should return hello world response', (done) => {
	request(app)
		.get('/')
		.expect(404)
		.expect((res) => {
			expect(res.body).toInclude({
				error: 'Page not found'
			});
		})
		.end(done);
});

it('should include KatoMono in users', (done) => {
	request(app)
		.get('/users')
		.expect(200)
		.expect((res) => {
			expect(res.body).toInclude({
				name: 'KatoMono Enkeli',
				age: 19
			})
		})
		.end(done);
});
