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

module.exports = countLetters;