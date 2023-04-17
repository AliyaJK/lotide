const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

const result1 = countLetters("Zane and zaki");
assertEqual(result1["z"], 2);
assertEqual(result1["Z"], undefined);
assertEqual(result1["a"], 3);
assertEqual(result1["n"], 2);
assertEqual(result1["x"], undefined);