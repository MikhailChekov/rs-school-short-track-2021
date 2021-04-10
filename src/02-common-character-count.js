/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} _s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const s1arr = s1.split('');
  const s2arr = s2.split('');

  let sum = 0;

  s1arr.forEach((e) => {
    if (s2arr.includes(e)) {
      sum++;
      const ind = s2arr.indexOf(e);
      s2arr.splice(ind, 1);
    }
  });
  return sum;
}

module.exports = getCommonCharacterCount;
