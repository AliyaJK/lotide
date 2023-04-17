const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');


const words = ["ground", "control", "to", "major", "tom"];

const results1 = map(words, word => word[0]);
console.log(results1);

// test cases
const numbers = [1, 5, 6, 12];
const results2 = map(numbers, number => number * 5);
assertArraysEqual(results2, [5, 25, 30, 60]);

const results3 = map(words, word => word.length);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);

const results4 = map(words, word => word + "s");
assertArraysEqual(results4, ["grounds", "controls", "tos", "majors", "toms"]);