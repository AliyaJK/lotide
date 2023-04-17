// findKey function which takes in an object and a callback
// should scan the object and return the first key for which the callback returns a truthy value
// if no key is found it should return undefined

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;