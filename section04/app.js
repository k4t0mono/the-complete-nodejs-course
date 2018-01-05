// app.js

const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');

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

request({
	url: 'https://api.darksky.net/forecast/636e7965c828c7815aa160dfd2572a10/-20.8904,-45.280?units=si',
	json: true
	},
	
	(error, response, body) => {
		if(!error && response.statusCode === 200) {
			console.log(`${body.currently.temperature} °C`);

		} else {
			console.log('Unable to connect to Forecasr.io server.');
		}
	}
);

//geocode.geocodeAddress(argv.address, (errorMsg, results) => {
	//if(errorMsg) {
		//console.log(errorMsg);
	//} else {
		//console.log(JSON.stringify(results, undefined, 2));
	//}
//});

