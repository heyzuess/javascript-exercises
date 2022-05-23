const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(list) {
  let value = list.reduce((sum, item) => {
    return sum += item;
  }, 0);
  return value;
};

const multiply = function(list) {
  let value = list.reduce((sum, item) => {
    return sum *= item;
  });
  return value;
};

const power = function(a, b) {
  return a ** b;
};

const factorial = function(start) {
  let val = 1;
  for (let i = start; i > 0; i--) {
    val *= i;
  }
  return val;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
