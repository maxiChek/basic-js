const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight( arr ) {
  let unit = [];

  arr.forEach((el, index) => {
    if(el === -1) {
      unit.push([el, index])
    }
  });

  const array = arr.filter(el => el !== -1)

  array.sort((a, b) => a - b)

  unit.forEach(el => {
    array.splice(el[1], 0, el[0])
  })

  return array
}

module.exports = {
  sortByHeight
}

module.exports = {
  sortByHeight
};
