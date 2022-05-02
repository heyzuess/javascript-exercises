const leapYears = function(year) {
    if (year % 100 === 0) {
        return year % 400 === 0 ? true : false;
    }

    if (year % 4 > 0) return false;
    return true;
};

// Do not edit below this line
module.exports = leapYears;
