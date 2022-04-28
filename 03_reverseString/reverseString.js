const reverseString = function(string) {
    let newString = '';
    let stringArray = string.split('');

    for (let i = stringArray.length-1; i >= 0; i--) {
        newString += stringArray[i];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
