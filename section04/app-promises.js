// app.js

const yargs = require('yargs');
const axios = require('axios');

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

var address = encodeURIComponent(argv.address);
var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${process.env.GOOGLE_API_KEY}`;

axios.get(geocodeURL).then(
	(response) => {
		if(response.data.status === 'ZERO_RESULTS') {
			throw new Error('Unable to find that address');			
		}
		
		console.log(response.data.results[0].formatted_address);

		var location = response.data.results[0].geometry.location;
		var lat = location.lat;
		var lng = location.lng;
		var weatherURL = `https://api.darksky.net/forecast/${process.env.DARKSKY_API_KEY}/${lat},${lng}?units=si`;
		return axios.get(weatherURL);
	}
).then(
	(response) => {
		var currently = response.data.currently;
		console.log(
			`Temperatura: ${currently.temperature} °C\n`
			+ `Sensção térmica: ${currently.apparentTemperature} °C\n`
			+ `Ponto de orvalho: ${currently.dewPoint} °C\n`
			+ `Humidade: ${currently.humidity*100}%`

		);
	}
).catch(
	(e) => {
		if(e.code === 'ENOTFOUND') {
			console.log('Unable to connect to API server.');
		} else {
			console.log(e.message);	
		}
	}
);
