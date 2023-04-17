const letterPositions = function(sentence) {
  const results = {};
  // loop through each index of sentence
  for (let i = 0; i < sentence.length; i++) {
    // if sentence index is not a space
    if (sentence[i] !== " ") {
      //check if letter already has array, if not create array, push letter to the array
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];
      }
    }
  }
  return results;
};

module.exports = letterPositions;