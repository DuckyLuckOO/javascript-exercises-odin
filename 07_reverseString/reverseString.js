const reverseString = function(str) {
    let result = "";
    let letters = str.split('');
    for (let i = 0; i < str.length; i++) {
        result+=letters[str.length-i-1];
    }
    return result;

};

// Do not edit below this line
module.exports = reverseString;
