const palindromes = function(string) {
  string = string.toLowerCase().replace(/[^a-z0-9]+/g, '');
  return string === string.split('').reverse().join('');
} 


module.exports = palindromes
