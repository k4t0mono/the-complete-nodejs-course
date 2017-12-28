// app.js

const request = require('request');

request({
		url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombad%20filadelfia',
		json: true
	},

	(error, response, body) => {
		var result = body.results[0];
		console.log(`Address: ${result.formatted_address}`);
		console.log(`Lat: ${result.geometry.location.lat} Lng: ${result.geometry.location.lng}`);
	}
);
