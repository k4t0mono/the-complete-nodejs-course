// app.js

const request = require('request');

request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombad%20filadelfia',
		json: true
	},

	(error, reponse, body) => {
		console.log(body);
	}
);
