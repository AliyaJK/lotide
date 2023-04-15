const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  const results = {};

  for (const letter of sentence) {
    lowercaseLetter = letter.toLowerCase();
    if (lowercaseLetter !== ' ') {
      if (results[lowercaseLetter]) {
        results[lowercaseLetter] += 1;
      } else {
        results[lowercaseLetter] = 1;
      }
    }
  }
  return results;
};

const result1 = countLetters("Zane and zaki");
assertEqual(result1["z"], 2);
assertEqual(result1["Z"], undefined);
assertEqual(result1["a"], 3);
assertEqual(result1["n"], 2);
assertEqual(result1["x"], undefined);