// sever.js

const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

var app = express();

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.use((req, rsp, next) => {
	var now = new Date().toISOString();
	var log = `[${now}]: ${req.method} ${req.url}`;
	console.log(log);

	fs.appendFile('server.log', log + '\n', (err) => {
		if(err) { console.log('Unable to save log file'); }
	});

	next();	
});

//app.use((req, res, next) => {
	//res.render('maintence.hbs');
//});

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getCurrentYear', () => {
	return new Date().getFullYear();
});
hbs.registerHelper('screamIt', (text) => {
	return text.toUpperCase();
});

app.get('/', (req, res) => {
	res.render('home.hbs', {
		pageTitle: 'Home page',
		welcomeMsg: 'Welcome and be assimilated ...'
	});
});

app.get('/about', (req, res) => {
	res.render('about.hbs', {
		pageTitle: 'About page',
	});
});

app.get('/projects', (req, res) => {
	res.render('projects.hbs', {
		pageTitle: 'Projects',
	});
});

app.get('/bad', (req, res) => {
	res.send({
		code: 404,
		mensage: 'Some error happen'
	});
});


app.listen(port, () => {
	console.log(`Server start at port ${port}`);
});
