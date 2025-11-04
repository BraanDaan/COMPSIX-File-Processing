const fs = require('fs');

function wordCount(string) {
    string = string.trim().replaceAll("\n"," "); // Remove whitespace and line breaks
    if (string.length === 0) { // Return 0 for specific edge case
        return 0;
    }
    let words = string.split(' ');
    return words.length;
}

function longestWord(string) {
    string = string.replaceAll("\n"," ").replaceAll(".","").replaceAll(",",""); // Remove line breaks and all punctuations
    if (string.length === 0) { // Return null for specific edge case
        return null;
    }
    let words = string.split(' ');
    let longestwordIndex = 0;
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].trim(); // Remove whitespacing from current word
        if (words[i].length > words[longestwordIndex].length) { // Search through the array to find the longest word, then keep record of it's index number.'
            longestwordIndex = i;
        }
    }
    return words[longestwordIndex];
}

function lineCount(string) {
    let lines = string.split('\n');
    return lines.length;
}

const quotesContent = fs.readFileSync('./data/quotes.txt', 'utf8');
const sampleContent = fs.readFileSync('./data/sample-text.txt', 'utf8')

console.log(wordCount(quotesContent)); // Expected output: 108
console.log(wordCount(sampleContent)); // Expected output: 207

console.log(longestWord(quotesContent)); // Expected output: "sophistication"
console.log(longestWord(sampleContent)); // Expected output: "infrastructure"

console.log(lineCount(quotesContent)); // Expected output: 10
console.log(lineCount(sampleContent)); // Expected output: 1

module.exports = { wordCount, longestWord, lineCount};
