// sever.js

const express = require('express');

var app = express();

app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!</h1>');
	res.send({
		name: 'KatoMono Enkeli',
		likes: [
			'Mathues',
			'Programming',
			'Star Wars'
		]
	});
});

app.get('/about', (req, res) => {
	res.send('About page');
});

app.get('/bad', (req, res) => {
	res.send({
		code: 404,
		mensage: 'Some error happen'
	});
});

app.listen(3000);
