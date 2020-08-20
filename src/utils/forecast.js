const request = require('request');

const forecast = (lat, long, callback) => {
	const url = 'http://api.weatherstack.com/current?access_key=e1f450f178adc53df1e4b1df9878785c&query=' + lat + ',' + long + '&units=f';

	request({ url, json: true }, (error, { body } = {}) => {
		if(error) {
			callback('Unable to connect to weather service!');
		} else if(body.error) {
			callback('Unable to find location.');
		} else {
			callback(undefined, body.current.weather_descriptions[0] + ". It is currently "+body.current.temperature + " degrees out. It feels like " + body.current.feelslike + " degrees out.");
		}
	});
}

module.exports = forecast;