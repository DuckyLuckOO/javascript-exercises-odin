const removeFromArray = function(arr, ...others) {
    let result = arr;
    for (let char of others) {
        result = result.filter(x  => x !== char);
    }
    return result;
};

// Do not edit below this line
module.exports = removeFromArray;
