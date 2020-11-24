const removeFromArray = function() {

}

/* Try without using forEach()

const removeFromArray = function(array, ...toRemove) {
    let testArray = [the array to be passed in];
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (testArray[i] !== toRemove) {
            newArray.push(item);
        }
        return newArray;
    }
}
*/

/* Try with forEach()
    
const removeFromArray = function(array, ...toRemove) {
    let testArray = [the array to be passed in];
    let newArray = [];
    forEach(element in array), check, starting from [0] {
        if element === toRemove, then ignore that element and move on to check the next element;
        if element !== toRemove, then newArray.push(), then move on to next element;
    }
    return newArray;
}
*/

module.exports = removeFromArray
