const removeFromArray = function(myArray, ...myValues) {
    let newArray = [];
    
    for (let i = 0; i < myArray.length; i++) {
        let element = myArray[i];
        if (!myValues.includes(element)) newArray.push(element);
    }

    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
