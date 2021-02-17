const fibonacci = function(number) {
  let previousNumOne = 0;
  let previousNumTwo = 1;
  let nextNum = 1;
  
  if (number < 0) {
    return "OOPS";
  } else {
      for (let i = 2; i <= number; i++) {
        nextNum = previousNumOne + previousNumTwo;
        previousNumOne = previousNumTwo;
        previousNumTwo = nextNum;
      }  
    }
    return nextNum;
}

module.exports = fibonacci
