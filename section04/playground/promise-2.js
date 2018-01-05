// promise-2.js

const request = require('request');

var geocodeAddress = (address) => {
	return new Promise((resolve, reject) => {
		address = encodeURIComponent(address);

		request({
			url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDgKUgY_fTGo85qhVOCHP0rNxGpVcxuZ-k`,
			json: true
		},

		(error, response, body) => {
			if(error) {
				reject('Unable to connect to Google servers.');

			} else if(body.status === 'ZERO_RESULTS') {
				reject('Unable to find address.');

			} else if(body.status === 'OK') {
				var result = body.results[0];
				resolve({
					address: result.formatted_address,
					latitude: result.geometry.location.lat,
					longitude: result.geometry.location.lng
				});

			} else {
				console.log('Heeeeeelp me, pleeeese!!! ;w;');
				console.log(body);
			}
		});	
	});
};

geocodeAddress('City of London').then(
	(location) => {
		console.log(JSON.stringify(location, undefined, 2));
	},

	(errorMsg) => {
		console.log(errorMsg);
	}
);
