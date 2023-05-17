function sorting(inputArray) {
    let sortedArray = inputArray.sort((a, b) => b - a);
    let resultArray = [];
    const startingLenght = sortedArray.length;

    for (let i = 0; i < startingLenght / 2; i++) {
        let currentNumber = sortedArray.shift();
        let nextNumber = sortedArray.pop();
        resultArray.push(currentNumber);
        resultArray.push(nextNumber);
    }

    console.log(resultArray.join(' '));
}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]);