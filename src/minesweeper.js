const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((row, rowIndex) => {
    return row.map((cell, colIndex) => {
      let mines = 0;
      for (let i = rowIndex - 1; i <= rowIndex + 1; i += 1) {
        for (let j = colIndex - 1; j <= colIndex + 1; j += 1) {
          // Проверяем границы И пропускаем саму текущую клетку
          if (
            i >= 0 &&
            i < matrix.length &&
            j >= 0 &&
            j < row.length &&
            !(i === rowIndex && j === colIndex) && // <--- ВОТ ЭТА ПРОВЕРКА
            matrix[i][j]
          ) {
            mines += 1;
          }
        }
      }
      return mines;
    });
  });
}

module.exports = {
  minesweeper,
};
