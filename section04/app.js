// app.js

const yargs = require('yargs');
const request = require('request');

const weather = require('./weather/weather.js');
const config = require('./util/config.js');

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

console.log(config);
