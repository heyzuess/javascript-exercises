const sumAll = function(num1, num2) {
    for (let arg of arguments) {
        if (isNaN(arg) || typeof(arg) != 'number' || arg < 0) return 'ERROR';
    }

    let start = Math.min(num1, num2);
    let end = Math.max(num1, num2);
    let sum = 0;

    for (let i = start; i <= end; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
