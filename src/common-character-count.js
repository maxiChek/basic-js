const { NotImplementedError } = require('../lib');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */

function getCommonCharacterCount(s1, s2) {
  let counter = 0;
  let arrayS1 = s1.split('');
  let str2 = s2;

  while (arrayS1.length) {
    const str1 = arrayS1.pop();
    if (str2.includes(str1)) {
      counter++;
      str2 = str2.replace(str1, '');
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount,
};
