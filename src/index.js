/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let count = 0;
  for (let i = 0; i < preferences.length; i++) {
    let first = preferences[i];
    let second = preferences[first - 1];
    let third = preferences[second - 1];
    if (third === i + 1 && i !== first - 1) {
      delete preferences[i, first - 1, second - 1];
      count = count + 1;
    }
  }
  return count;
};
