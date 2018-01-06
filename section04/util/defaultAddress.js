// Use to setup the default address

const fs = require('fs');
const axios = require('axios');
const toml = require('toml');
var tomlify = require('tomlify-j0.4');

const config = require('../util/config.js');

var set = (address) => {
	return new Promise((resolve, reject) => {
		try{
			var configFile = toml.parse(fs.readFileSync('./config.toml'));
			configFile.defaultAddress = address;
			configFile = `${tomlify.toToml(configFile)}\n`;
			fs.writeFileSync('./config.toml', configFile);
		} catch(e) {
			reject(e);
		}

		resolve();
	});
}

var get = () => {

}

module.exports = {
	set,
	get
}
