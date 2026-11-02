const { NotImplementedError } = require("../lib");

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  return matrix.flatMap((subMatrix) =>
    subMatrix.filter((item) => item === "^^"),
  ).length;
  // .map((subMatrix) => subMatrix.filter((item) => item === "^^"))
  // .flat().length;
}

module.exports = {
  countCats,
};
