function searchForNumber(firstArray, secondArray) {
    let newArrayLength = secondArray[0];
    let numbersToDelete = secondArray[1];
    let numberToSearch = secondArray[2];

    let newArray = firstArray.splice(0, newArrayLength);
    newArray.splice(0, numbersToDelete);
    let counter = 0;
    for (const el of newArray) {
        if (el === numberToSearch) {
            counter++;
        }
    }
    console.log(`Number ${numberToSearch} occurs ${counter} times.`)
}
searchForNumber([5, 2, 3, 4, 1, 6],
    [3, 2, 3]
    )