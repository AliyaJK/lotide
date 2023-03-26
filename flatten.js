const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
} else {
    let result = false;

    // comparing each element of array 
    for (let i = 0; i < arr1.length; i++) {

        if (arr1[i] !== arr2[i]) {
            return false;
        } else {
            result = true;
        }
    }
    return result;
}
}

// create a function flatten that takes in an array containing elements, including nested arrays
const flatten = function(array) {
  let flatArray = [];
  //loop through elements to check if they're arrays
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      for (const element of array[i]) {
        flatArray.push(element);
      }
    } else {
      flatArray.push(array[i]);
    }
  }
  return flatArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]])) // => [1, 2, 3, 4, 5, 6]
