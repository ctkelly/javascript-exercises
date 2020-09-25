
function randomNum() {
  const number = Math.floor(Math.random() * 10);
  return number
} 

  const repeatString = function(string, n) {
    let newString = '';
    if (n == randomNum()) {
    for (let i = 0; i < randomNum; i++) {
    newString += string;
    }
    return newString;
    } else if (n < 0) {
    return 'ERROR';
    } else if (n >= 0) {
    for (let i = 0; i < n; i++) {
    newString +=string;
    }
    return newString;
    }
    } 


module.exports = repeatString
