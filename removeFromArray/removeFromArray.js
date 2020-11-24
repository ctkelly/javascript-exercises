const removeFromArray = function(array, ...toRemove) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (toRemove.indexOf(array[i]) === -1) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}

/* Another way:

const removeFromArray = function(array, ...toRemove) {
    let newArray = [];
    function checkAndPush(element) {
        if (toRemove.indexOf(element) === -1) {
            newArray.push(element);
        }
    }
    array.forEach(checkAndPush);
    return newArray;
}
*/

module.exports = removeFromArray
