const request = require('request');

const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

request(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
  } else {
    const data = JSON.parse(body);
    if (data.length > 0) {
      const firstEntry = data[0];
      console.log(`${firstEntry.name}: ${firstEntry.description}`);
    } else {
      console.log(`No results found for the breed "${breedName}".`);
    }
  }
});