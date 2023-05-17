function palindromeIntegers(arrayOfNumbers) {
    let lengthOfArray = arrayOfNumbers.length;
    for (let currentNumberIndex = 0; currentNumberIndex < lengthOfArray; currentNumberIndex++) {
        let currentNumberAsString = arrayOfNumbers[currentNumberIndex].toString();
        let reversedNumberAsString = currentNumberAsString.split('').reverse().join('');
        
        if (currentNumberAsString === reversedNumberAsString) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}

console.log(palindromeIntegers([123,323,421,121]))