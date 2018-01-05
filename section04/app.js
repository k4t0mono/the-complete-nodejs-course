// app.js

const yargs = require('yargs');

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

geocode.geocodeAddress(argv.address, (errorMsg, results) => {
	if(errorMsg) {
		console.log(errorMsg);
	} else {
		console.log(JSON.stringify(results, undefined, 2));
	}
});

