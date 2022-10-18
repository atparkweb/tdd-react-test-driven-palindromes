const { normalize, reverse } = require('./util');

function palindromes(str) {
  let newStr = reverse(normalize(str));

  const result = [];
  if (newStr === normalize(str)) {
    result.push(newStr);
  }
  return result;
}

module.exports = palindromes;
