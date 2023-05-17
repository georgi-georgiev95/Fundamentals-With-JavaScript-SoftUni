function oddAndEvenSum(number) {
    let numberAsString = number.toString();
    let stringLength = numberAsString.length;
    let evenSum = 0;
    let oddSum = 0;
    for (let index = 0; index < stringLength; index++) {
        let currentNumber = Number(numberAsString[index]);
        if (currentNumber % 2 === 0) {
            evenSum += currentNumber;
        } else {
            oddSum += currentNumber;
        }
    }

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}