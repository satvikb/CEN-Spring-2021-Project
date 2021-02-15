function sum(a, b) {
  return a + b;
}
function subtract(a, b){
  return a - b;
}
function multiply(a, b, c){
  return a * b * c;
}
function stringsEqual(string1, string2){
  return string1 === string2
}

exports.sum = sum
exports.subtract = subtract
exports.multiply = multiply
exports.stringsEqual = stringsEqual

// module.exports = sum;
// module.exports = subtract;
// module.exports = multiply;
// module.exports = stringsEqual;
