// app.js

const yargs = require('yargs');

const weather = require('./weather/weather.js');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather for',
			string: true
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

weather.getCurrent(argv.address, (response) => {
	console.log(
		`${response.address}\n`
		+ `Temperature: ${response.temperature} °C\n`
		+ `Apparent temperature: ${response.apparentTemperature} °C\n`
		+ `Dew point: ${response.dewPoint} °C\n`
		+ `Humidity: ${response.humidity*100}%\n`
		+ `Pressure: ${response.pressure} hPa\n`
		+ `Wind speed: ${response.windSpeed} Km/h\n`
	);
});
