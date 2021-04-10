/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const findDuplicates = (arr) => arr.filter((item, index) => arr.indexOf(item) !== index);
  const nameCopy = [...names];

  function checkDupl(arr) {
    let copy = [...arr];
    let res = [...arr];

    const dupl = findDuplicates(arr);
    const singleDupl = dupl[0];
    dupl.push(singleDupl);
    copy = dupl.map((e, i) => {
      if (i > 0) {
        let c = e;
        c += `(${i})`;
        return c;
      }
      return e;
    });
    copy.reverse();

    res = res.map((e) => {
      let c = e;
      if (e === singleDupl) {
        c = copy.pop();
      }
      return c;
    });

    if (findDuplicates(res).length) {
      return checkDupl(res);
    }
    return res;
  }
  const res = checkDupl(nameCopy);

  return res;
}

module.exports = renameFiles;
