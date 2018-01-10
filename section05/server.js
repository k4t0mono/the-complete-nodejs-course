// sever.js

const express = require('express');
const hbs = require('hbs');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
	//res.send('<h1>Hello Express!</h1>');
	//res.send({
		//name: 'KatoMono Enkeli',
		//likes: [
			//'Mathues',
			//'Programming',
			//'Star Wars'
		//]
	//});
	res.render('home.hbs', {
		pageTitle: 'Home page',
		currentYear: new Date().getFullYear(),
		welcomeMsg: 'Welcome and be assimilated ...'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page',
		currentYear: new Date().getFullYear()
	});
});

app.get('/bad', (req, res) => {
	res.send({
		code: 404,
		mensage: 'Some error happen'
	});
});


app.listen(3000, () => {
	console.log('Server start at port 3000');
});
