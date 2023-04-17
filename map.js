// map function
// will take in two arguments: an array to map and a callback function
// map array will return a new array based on the results of the callback function

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map

