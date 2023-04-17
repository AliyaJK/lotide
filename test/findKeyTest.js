const assertEqual = require('../assertEqual');
const findKey = require('../findKey');

const results1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

assertEqual(results1, "noma");

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKey(bestTVShowsByGenre, x => x === "The Expanse"), "sciFi");
assertEqual(findKey(bestTVShowsByGenre, x => x === "That '70s Show"), undefined);