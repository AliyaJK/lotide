const eqArrays = require('./eqArrays');

// function eqObjects should take in two objects and return true or false based on perfect match

const eqObjects = function(object1, object2) {

  // compare object lengths
  if (Object.keys(object1).length === Object.keys(object2).length) {
    for (const key in object1) {
      //check if array
      if (Array.isArray(object1[key]) || Array.isArray(object2[key])) {
        let compare = eqArrays(object1[key], object2[key]);
        if (compare === false) {
          return false;
        }
        //else compare as primitive values
      } else {
        if (object1[key] !== object2[key]) {
          return false;
        }
      }
    }
    return true;
  } else {
    return false;
  }
};

module.exports = eqObjects;