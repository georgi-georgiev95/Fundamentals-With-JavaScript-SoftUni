function nonDecreasingSubsed(arr) {
    let result = "";
    let lastBiggestElement = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
        if (i === 0) {
            result += arr[i] + " ";
        } else {
            if (lastBiggestElement !== Number.MIN_SAFE_INTEGER) {
                previousElement = lastBiggestElement;
                currentElement = Number(arr[i]);
                if (currentElement >= previousElement) {
                    result += currentElement + " ";
                } else {
                    lastBiggestElement = previousElement;
                    continue;
                }
            } else {
                let previousElement = Number(arr[i - 1]);
                let currentElement = Number(arr[i]);
                if (currentElement >= previousElement) {
                    result += currentElement + " ";
                } else {
                    lastBiggestElement = previousElement;
                    continue;
                }
            }
        }
    }
    console.log(result)
}
nonDecreasingSubsed([ 1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubsed([ 1, 2, 3, 4]);
nonDecreasingSubsed([ 20, 3, 2, 15, 6, 1]);