/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  const copy = str;
  const res = [];

  const arr = copy.split('');

  arr.forEach((e, i, a) => {
    if (a[i + 1] === e) {
      if (typeof res[res.length - 1] === 'number') {
        let elem = res.pop();
        res.push(++elem);
      } else {
        res.push(2);
      }
    } else {
      res.push(e);
    }
  });
  return res.map((e) => String(e)).join('');
}

module.exports = encodeLine;
