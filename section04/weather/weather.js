// weather.js

const request = require('request');

var getWeather = (lat, lon, callback) => {
  request({
		url: `https://api.darksky.net/forecast/636e7965c828c7815aa160dfd2572a10/${lat},${lon}?units=si`,
		json: true
		},
	
		(error, response, body) => {
			if(!error && response.statusCode === 200) {
				var now = body.currently;
				callback(undefined, {
					temperature: now.temperature,
					apparentTemperature: now.apparentTemperature,
					dewPoint: now.dewPoint,
					humidity: now.humidity
				});

			} else {
				callback('Unable to connect to Forecasr.io server.');
			}
		}
	);
}

module.exports = {
	getWeather
};
