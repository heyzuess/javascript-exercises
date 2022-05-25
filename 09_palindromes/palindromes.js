const palindromes = function (word) {
    let myWord = filterWord(word);
    let reverse = reverseString(myWord);
    return reverse === myWord;
};

function filterWord (string) {
    string = string.toLowerCase();

    let filterOut = [
        '!', ',', "'", '"', '.', '?', ' '
    ]

    for (let filter of filterOut) {
        string = string.replaceAll(filter, '');
    }

    return string;
}

function reverseString (string) {
    let val = "";
    for (let i = string.length - 1; i >= 0; i--) {
        val += string[i];
    }
    return val;
}

// Do not edit below this line
module.exports = palindromes;
