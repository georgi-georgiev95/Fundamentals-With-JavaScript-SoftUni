function areEqual(arr1, arr2) {
    let sum = 0;
    let isEqual = true;
    for (let i = 0; i < arr1.length; i++) {
        let numOne = Number(arr1[i]);
        let numTwo = Number(arr2[i]);
        if (numOne !== numTwo) {
            console.log(`Arrays are not identical.Found difference at ${i} index`);
            isEqual = false;
            break;
        } else {
            sum += numOne;
        }
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    }
}
areEqual(['1','2','3','4','5'],

['1','2','4','4','5'])