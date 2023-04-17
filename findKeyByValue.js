const findKeyByValue = function(object, value) {
  // search through all object keys
  const objectKeys = Object.keys(object);
  // loop through object keys, if key is equal to value, return it
  for (const key of objectKeys) {
    if (object[key] === value)
      return key;
  }
};

module.exports = findKeyByValue;