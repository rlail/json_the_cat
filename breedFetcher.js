const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    if (error) {
      callback(error, null);
    } else {
      const data = JSON.parse(body);
      if (data.length > 0) {
        const firstEntry = data[0];
        callback(null, `${firstEntry.name}: ${firstEntry.description}`);
      } else {
        callback(null, `No results found for the breed ${breedName}.`);
      }
    }
  });
};

module.exports = { fetchBreedDescription };