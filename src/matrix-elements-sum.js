const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix ) {

  let array = [];

  for( let i = 1; i < matrix.length; i++){
    if(array.length === 0) {
      array.push(...matrix[i - 1])
    }
    
    for( let j = 0; j < matrix[i].length; j++){
      if( matrix[i - 1][j] !== 0){
        array.push(matrix[i][j])
      }
    }
  }

  return array.reduce( (sum, el) => {
    return sum + el
  }, 0)
}

module.exports = {
  getMatrixElementsSum
};
