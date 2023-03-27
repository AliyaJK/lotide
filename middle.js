const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
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
};

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

// implement middle which will take in an array
// return the middle-most element
// if array has 1 or 2 elements, return empty array
// if array has odd # of elements, return single middle
// if array has even # of elements, return two middle

const middle = function(array) {
  if (array.length <= 2) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[Math.ceil(array.length / 2 - 1)], array[Math.ceil(array.length / 2)]];
  } else {
    return [array[Math.floor(array.length / 2)]];
  }
};



console.log(middle([1])); // => []
console.log(middle([1, 2])); // => []
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4])); // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
const testArray = [1, 3, 4, 67, 7];
middle(testArray); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(testArray, [1, 3, 4, 67, 7]);
