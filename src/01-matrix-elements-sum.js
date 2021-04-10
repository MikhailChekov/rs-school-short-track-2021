/**
 * Given m, a rectangular m of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} m
 * @return {Number}
 *
 * @example
 * m = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  if (matrix.length === 1 && matrix[0][0] === 0) {
    return 0;
  }

  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let b = 0; b < matrix[i].length; b++) {
      if (i === 0 || matrix[i - 1][b] !== 0) {
        sum += matrix[i][b];
      }
    }
  }
  return sum;
}

module.exports = getMatrixElementsSum;
