/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  if (String(n).length === 1) return n;

  let copy = String(n);

  while (copy.length !== 1) {
    const arr = copy.split('').map((e) => Number(e));
    copy = String(arr.reduce((ac, e) => ac + e));
  }

  return Number(copy);
}
module.exports = getSumOfDigits;
