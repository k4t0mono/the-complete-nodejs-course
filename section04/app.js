// app.js

const request = require('request');
const yargs = require('yargs');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Addres to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

console.log(argv.address);

request({
		url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(argv.address)}`,
		json: true
	},

	(error, response, body) => {
		if(error) {
			console.log('Unable to connect to Google servers.');

		} else if(body.status === 'ZERO_RESULTS') {
			console.log('Unable to find address.');

		} else if(body.status === 'OK') {
			var result = body.results[0];
			console.log(`Address: ${result.formatted_address}`);
			console.log(`Lat: ${result.geometry.location.lat} Lng: ${result.geometry.location.lng}`);

		} else {
			console.log('Heeeeeelp me, pleeeese!!! ;w;');
		}
	}
);
