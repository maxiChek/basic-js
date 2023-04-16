const { NotImplementedError } = require('../extensions/index.js');

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
function deleteDigit( n ) {
  let result = 0,
      n_digits = []

   while (n) {
        n_digits.push(n % 10);
        n = Math.floor(n / 10);
    }

    for (let i = 0; i < n_digits.length; i++) {
        let num = 0;
        for (let j = n_digits.length - 1; j >= 0; j--) {
            if (j !== i) {
                num = num * 10 + n_digits[j];
            }
        }
        result = Math.max(num, result);
    }
    
    return result
}

module.exports = {
  deleteDigit
};
