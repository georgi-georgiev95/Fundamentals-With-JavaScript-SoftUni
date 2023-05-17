function maxNumber(arr) {
    let result = '';
    for (let i = 1; i <= arr.length; i++) {
        // if (i === arr.length) {
        //     result += Number(arr[i - 1]);
        // }
        let isMax = true;
        let currentNum = Number(arr[i - 1]);
        for (let j = i; j < arr.length; j++) {
            let nextNum = Number(arr[j]);
            if (nextNum >= currentNum) {
                isMax = false;
                break;
            }
        }
        if (isMax) {
            result += currentNum + " ";
        }
    }
    console.log(result);
}
maxNumber([27, 19, 42, 2, 13, 45, 48]);