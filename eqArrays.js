// function that takes in two arrays
// compares them to each other
// returns true for perfect match, false if not
// use assertEqual to write test cases

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

module.exports = eqArrays;

