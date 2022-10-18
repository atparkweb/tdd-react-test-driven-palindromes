function normalize(str) {
  return str
    .toLowerCase()
    .replace(' ', '')
    .replace(/[^a-z]/g, '');
}

function reverse(str) {
  return str.split('').reverse().join('');
}

module.exports = {
  normalize,
  reverse,
};
