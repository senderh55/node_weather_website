const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com/current?access_key=fb14c14dbdf7eec51dbd3b73ac88fc85&query=" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect the Weather Server!", undefined);
    } else if (body.error) {
      callback("Unable to find weather for this location", undefined);
    } else {
      const { weather_descriptions, temperature, feelslike } = body.current;
      dataDescription = `${weather_descriptions} throughout the day. It is currently ${temperature} degrees out. and feels like ${feelslike} degrees`;
      callback(undefined, dataDescription);
    }
  });
};

module.exports = forecast;
