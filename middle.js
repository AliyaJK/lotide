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

module.exports = middle;
