function magicSum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let previousNum = Number(arr[i - 1]);
            for (let j = i; j < arr.length; j++) {
                let currentNum = Number(arr[j]);
                if ((currentNum + previousNum) === num) {
                    console.log(previousNum + " " + currentNum);
                }
            }
        }
    }
}
magicSum([1, 2, 3, 4, 5, 6],

    6)