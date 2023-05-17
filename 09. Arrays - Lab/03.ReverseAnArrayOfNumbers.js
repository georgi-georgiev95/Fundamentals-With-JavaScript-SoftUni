function reverseArray(num, arr) {
    let resultArr = [];
    for (let i = num - 1; i >= 0; i--) {
        resultArr.push(arr[i]);
    }
    console.log(resultArr.join(' '));
}
reverseArray(4, [-1, 20, 99, 5])