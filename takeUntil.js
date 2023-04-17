// takeUntil will take in two parameters: the array to work with and a callback
// the function will return a "slice of the array with elements taken from the beginning"
// it should keep going until the callback returns a truthy value
// to keep things simple, the callback should only be provided one value: the item in the array

const takeUntil = function(array, callback) {
  const result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result.push(item);
  }
  return result;
};

module.exports = takeUntil;