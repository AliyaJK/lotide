const assertObjectsEqual = require('./assertObjectsEqual');

// test cases
const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual({ color: "red", size: "medium" }, { color: "red", size: "medium" });


const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);