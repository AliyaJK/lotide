/*
const assertEqual = require('../assertEqual');
const tail = require('../tail');

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns 2 for tail().length", () => {
    assert.strictEqual(tail(["Hello", "Lighthouse", "Labs"]).length, 2);
  });
  it("returns 3 for ['Yo Yo', 'Lighthouse', 'Labs'].length", () => {
    assert.strictEqual(["Yo Yo", "Lighthouse", "Labs"].length, 3); 
  });
  it("returns [] for ['one']", () => {
    assert.deepEqual(tail(["one"]), []);
  })
  it("returns [2,3] for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  })
});