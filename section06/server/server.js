// server.js

const express = require('express');

var app = express();

app.get('/', (req, res) => {
	// res.send("Hello there");
	res
		.status(404)
		.send({
			error: 'Page not found',
			name: 'Todo App v1.0'
		});
});

app.get('/users', (req, res) => {
	res.send([
		{
			name: 'KatoMono Enkeli',
			age: 19
		},
		{
			name: 'Raccoonzinhu do Araguaia',
			age: 16
		}
	]);
});

app.listen(3000);

module.exports.app = app;
