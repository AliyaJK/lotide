// take in a soource array and an itemsToRemove array
const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      newArray.push(element);

    }
  }
  return (newArray);
};

module.exports = without;
