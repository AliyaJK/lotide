const letterPositions = function(sentence) {
  const results = {};
  // loop through each index of sentence
  for (let i = 0; i < sentence.length; i++) {
    // if sentence index is not a space
    if (sentence[i] !== " ") {
      //check if letter already has array, if not create array, push letter to the array
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

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

const resultArray = letterPositions("hello");
assertArraysEqual(resultArray.h, [0]);
assertArraysEqual(resultArray.e, [1]);
assertArraysEqual(resultArray.l, [2, 3]);
assertArraysEqual(resultArray.o, [4]);