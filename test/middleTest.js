/*
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

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
*/

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns ['Lighthouse'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(middle(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse']);
  });
  it("returns [] for []", () => {
    assert.deepEqual(middle([]), []);
  });
  it("returns [] for ['one']", () => {
    assert.deepEqual(middle(["one"]), []);
  });
});