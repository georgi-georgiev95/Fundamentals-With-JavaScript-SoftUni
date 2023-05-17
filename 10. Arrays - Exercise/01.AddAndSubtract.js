function addAndSubstract(arr) {
    let sumOldArray = 0;
    let sumNewArray = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i]);
        sumOldArray += currentNum;
        if (currentNum % 2 === 0) {
            currentNum += i;
        } else {
            currentNum -= i;
        }
        arr[i] = currentNum;
        sumNewArray += arr[i];
    }
    console.log(arr);
    console.log(sumOldArray);
    console.log(sumNewArray);
}
addAndSubstract([-5, 11, 3, 0, 2])
addAndSubstract([5, 15, 23, 56, 35])