function equalSums(arr) {
    let leftSum = 0;
    let rightSum = 0;
    let isEqual = false;
    for (let currentNumIndex = 0; currentNumIndex < arr.length; currentNumIndex++) {
        for (let i = 0; i < arr.length; i++) {
            if (i !== currentNumIndex) {
                let num = Number(arr[i]);
                if (i < currentNumIndex) {
                    leftSum += num;
                } else if (i > currentNumIndex) {
                    rightSum += num;
                }
            }
            if (currentNumIndex === 0) {
                leftSum = 0;
            } else if (currentNumIndex === arr.length - 1) {
                rightSum = 0;
            }
        }
        if (leftSum === rightSum) {
            console.log(currentNumIndex);
            isEqual = true;
        } else {
            leftSum = 0;
            rightSum = 0;
        }
    }
    if (!isEqual) {
        console.log('no');
    }
}
equalSums([10, 5, 5, 99,

    3, 4, 2, 5, 1,
    
    1, 4]);
equalSums([1, 2, 3]);