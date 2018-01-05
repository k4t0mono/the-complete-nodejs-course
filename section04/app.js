// app.js

const yargs = require('yargs');
const request = require('request');

const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

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

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
	if(errorMsg) {
		console.log(errorMsg);
	} else {
		console.log(results.address);

		weather.getWeather(results.latitude, results.longitude, (errorMsg1, results1) => {
			if(errorMsg1) {
				console.log(errorMsg1);
			} else {
				console.log(
					`Temperatura: ${results1.temperature} °C\n`
					+ `Sensção térmica: ${results1.apparentTemperature} °C\n`
					+ `Ponto de orvalho: ${results1.dewPoint} °C\n`
					+ `Humidade: ${results1.humidity*100}%`
				);
			}
		});
	}
});

