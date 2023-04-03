// map function
// will take in two arguments: an array to map and a callback function
// map array will return a new array based on the results of the callback function

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    let result = false;

    for (let i = 0; i < arr1.length; i++) {

      if (arr1[i] !== arr2[i]) {
        return false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

// test cases
const numbers = [1, 5, 6, 12];
const results2 = map(numbers, number => number * 5);
assertArraysEqual(results2, [5, 25, 30, 60]);

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

const results4 = map(words, word => word + "s");
assertArraysEqual(results4, ["grounds", "controls", "tos", "majors", "toms"]);