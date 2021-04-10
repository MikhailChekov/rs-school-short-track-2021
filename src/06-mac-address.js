/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Number}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const regex = /^[A-F0-9]{2}$/;
  const arr = n.split('-');
  if (arr.length !== 6) return false;

  let res = true;

  for (let i = 0; i < arr.length; i++) {
    if (!regex.test(arr[i])) {
      res = false;
    }
  }

  return res;
}

module.exports = isMAC48Address;
