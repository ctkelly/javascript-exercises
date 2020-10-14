const sumAll = function(num1, num2) {
    let array = [];
    let step = 1;
    if (typeof num1 === 'string' || typeof num2 === 'string') {
        return 'ERROR';
    } else if (isNaN(num1) === true || isNaN(num2) === true) {
        return 'ERROR';
    } else if (num1 < 0 || num2 < 0) {
        return 'ERROR';
    } else if (num1 < num2) {
        for (let i = num1; i <= num2; i += step) {
          array.push(i);  
        }
        return (array.length / 2) * (num1 + num2);
    } else if (num1 > num2) {
        for (let i = num2; i <= num1; i += step) {
            array.push(i);
        }
        return (array.length / 2) * (num1 + num2);
    }
} 

module.exports = sumAll
