const { NotImplementedError } = require("../lib");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const str = String(n);
  const variants = [];
  for (let i = 0; i < str.length; i += 1) {
    const numStr = str.slice(0, i) + str.slice(i + 1);
    variants.push(Number(numStr));
  }
  return Math.max(...variants);
}

module.exports = {
  deleteDigit,
};
