const reverseString = function(string) {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString = newString + string[i];
  }
  return newString;
}

module.exports = reverseString
 