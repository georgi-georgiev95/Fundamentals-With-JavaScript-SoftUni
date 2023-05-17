function printCharsInRange(firstChar, secondChar) {
    let startingChar = Math.min(firstChar.charCodeAt(),secondChar.charCodeAt());
    let finalChar = Math.max(firstChar.charCodeAt(),secondChar.charCodeAt());
    let resultArray = [];

    for (let firstCharToPrint = startingChar + 1; firstCharToPrint < finalChar; firstCharToPrint++) {
        let currentChar = String.fromCharCode(firstCharToPrint);
        resultArray.push(currentChar);
    }

    return resultArray.join(' ');
}

console.log(printCharsInRange('#', ':'));   