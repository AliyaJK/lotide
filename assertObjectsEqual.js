const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    

    // comparing each element of array
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  }
};

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

// test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium" });


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);