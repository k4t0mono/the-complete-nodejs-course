// weather.js

const axios = require('axios');

const config = require('../util/config.js');

var getCurrent = (address, callback) => {
	var address = encodeURIComponent(address);
	var geocodeURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.GOOGLE_API_KEY}`;
	var info = {};

	axios.get(geocodeURL).then(
		(response) => {
			if(response.data.status === 'ZERO_RESULTS') {
				throw new Error('Unable to find that address');			
			}
			
			info.address = response.data.results[0].formatted_address;

			var location = response.data.results[0].geometry.location;
			var lat = location.lat;
			var lng = location.lng;
			var weatherURL = `https://api.darksky.net/forecast/${config.DARKSKY_API_KEY}/${lat},${lng}?units=si`;
			return axios.get(weatherURL);
		}
	).then(
		(response) => {
			var currently = response.data.currently;

			info.temperature = currently.temperature;
			info.apparentTemperature = currently.apparentTemperature;
			info.dewPoint = currently.dewPoint;
			info.humidity = currently.humidity;
			info.pressure = currently.pressure;
			info.windSpeed = currently.windSpeed;

			callback(info);
		}
	).catch(
		(e) => {
			if(e.code === 'ENOTFOUND') {
				console.error('Unable to connect to API server.');
			} else {
				console.error(e.message);	
			}
		}
	);
}

var getCurrentFormated = (address, callback) => {
	getCurrent(address, (response) => {
		callback(
			`${response.address}\n`
			+ `Temperature: ${response.temperature} °C\n`
			+ `Apparent temperature: ${response.apparentTemperature} °C\n`
			+ `Dew point: ${response.dewPoint} °C\n`
			+ `Humidity: ${response.humidity*100}%\n`
			+ `Pressure: ${response.pressure} hPa\n`
			+ `Wind speed: ${response.windSpeed} Km/h\n`
		);
	});
}

module.exports = { 
	getCurrent,
	getCurrentFormated
};
