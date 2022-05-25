const fibonacci = function(size) {
    if (size < 0) return "OOPS";

    let length = parseInt(size);
    length--;

    let numbers = [1,];
    let current = numbers[0];
    
    for (let i = 0; i < length; i++) {
        let prev = i <= 0 ? 0 : numbers[i-1];
        current += prev;
        numbers.push(current);
    }

    return numbers[length];
};

// Do not edit below this line
module.exports = fibonacci;
