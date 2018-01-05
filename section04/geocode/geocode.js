// geocode.js

const request = require('request');

var geocodeAddress = (address, callback) => {
	address = encodeURIComponent(address)

	request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDgKUgY_fTGo85qhVOCHP0rNxGpVcxuZ-k`,
		json: true
	},

	(error, response, body) => {
		if(error) {
			callback('Unable to connect to Google servers.');

		} else if(body.status === 'ZERO_RESULTS') {
			callback('Unable to find address.');

		} else if(body.status === 'OK') {
			var result = body.results[0];
			callback(undefined, {
				address: result.formatted_address,
				latitude: result.geometry.location.lat,
				longitude: result.geometry.location.lng
			});

		} else {
			console.log('Heeeeeelp me, pleeeese!!! ;w;');
			console.log(body);
		}
	});
}

module.exports = {
	geocodeAddress
}
