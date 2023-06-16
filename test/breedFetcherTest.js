const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      assert.equal(err, null);

      const expectedDesc = "Siberian: The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns an error for an invalid/non-existent breed', (done) => {
    fetchBreedDescription('InvalidBreed', (err, desc) => {
      const expectedDesc = `No results found for the breed InvalidBreed.`
      assert.equal(err, null);
      assert.equal(desc, expectedDesc);

      done();
    });
  });
});