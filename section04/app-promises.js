// app.js

const yargs = require('yargs');

const weather = require('./weather/weather.js');
const defaultAddress = require('./util/defaultAddress.js');

const argv = yargs
	.options({
		address: {
			demand: true,
			alias: 'a',
			describe: 'Address to fetch weather for',
			string: true
		},
		setDefault: {
			demand: false,
			alias: 'd',
			describe: 'Set default address'
		}
	})
	.help()
	.alias('help', 'h')
	.argv;

if(argv.setDefault !== undefined) {
	defaultAddress.set(argv.address).then(() => {
		console.log('Default address setted');
	});
}

//weather.getCurrent(argv.address, (response) => {
	//console.log(
		//`${response.address}\n`
		//+ `Temperature: ${response.temperature} °C\n`
		//+ `Apparent temperature: ${response.apparentTemperature} °C\n`
		//+ `Dew point: ${response.dewPoint} °C\n`
		//+ `Humidity: ${response.humidity*100}%\n`
		//+ `Pressure: ${response.pressure} hPa\n`
		//+ `Wind speed: ${response.windSpeed} Km/h\n`
	//);
//});
