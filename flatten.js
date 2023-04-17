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

module.exports = flatten;