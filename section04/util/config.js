// Set configuration file

const fs = require('fs');
const toml = require('toml');

var configString = ''
try { 
	configString = fs.readFileSync('./config.toml');
} catch(e) {
	fs.writeFileSync('./config.toml', '');
}

try {
	var configFile = toml.parse(configString);
} catch(e) {
	console.error(`Parsing error on line ${e.line}, column ${e.column} : ${e.message}`);
}

var config = {
	GOOGLE_API_KEY: 'GOOGLE_API_KEY' in process.env ? process.env.GOOGLE_API_KEY : configFile.GOOGLE_API_KEY,
	DARKSKY_API_KEY: 'DARKSKY_API_KEY' in process.env ? process.env.DARKSKY_API_KEY : configFile.DARKSKY_API_KEY
}

module.exports = config;
