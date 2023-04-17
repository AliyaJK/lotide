const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');


const resultArray = letterPositions("hello");
assertArraysEqual(resultArray.h, [0]);
assertArraysEqual(resultArray.e, [1]);
assertArraysEqual(resultArray.l, [2, 3]);
assertArraysEqual(resultArray.o, [4]);