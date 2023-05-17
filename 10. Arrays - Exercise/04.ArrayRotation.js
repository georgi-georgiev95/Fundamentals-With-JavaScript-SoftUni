function arrayRotation(arr, n) {
    for (let rotation = 1; rotation <= n; rotation++) {
        for (let i = 0; i <= arr.length; i++) {
            arr.push(arr[0]);
            arr.shift();
        }
    }
    console.log(arr.join(' '));
}
arrayRotation([
    51, //0
    47, //1
    32, //2
    61, //3
    21  //4
], 2);
arrayRotation([32, 21, 61, 1], 4);
arrayRotation([2, 4, 15, 31], 5)