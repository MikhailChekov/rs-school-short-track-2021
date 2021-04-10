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
  let arr = String(n).split('');

  arr = arr.map((e) => Number(e));

  const copy = [...arr];
  copy.sort((a, b) => a - b);
  const small = copy[0];
  const ind = arr.indexOf(small);

  arr.splice(ind, 1);

  return Number(arr.join(''));
}

module.exports = deleteDigit;
