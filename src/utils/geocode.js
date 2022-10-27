const request = require("request");

const geocode = (address, callback) => {
  const url = `http://api.positionstack.com/v1/forward?access_key=18628f77dbca760e3d73bf146316ef98&query=${address}`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to geocode service!", undefined);
    } else if (body.data.length === 0) {
      callback("Unable to find location!", undefined);
    } else {
      callback(undefined, body.data[0]);
    }
  });
};

module.exports = geocode;
