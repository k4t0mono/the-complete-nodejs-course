// app.js

const yargs = require('yargs');

const weather = require('./weather/weather.js');
const defaultAddress = require('./util/defaultAddress.js');

const argv = yargs
	.options({
		address: {
			demand: false,
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

if(!argv.address) {
	defaultAddress.get().then((r) => {
		weather.getCurrentFormated(r, (a) => {
			console.log(a.trim())
		});

	}).catch((err) => {
		console.error(err);
		process.exit(1);
	});

} else {
	if(argv.setDefault) {
		defaultAddress.set(argv.address).then(() => {
			console.log('Default address setted');
		});
	}

	weather.getCurrentFormated(argv.address, (a) => {
		console.log(a.trim());
	});
}

