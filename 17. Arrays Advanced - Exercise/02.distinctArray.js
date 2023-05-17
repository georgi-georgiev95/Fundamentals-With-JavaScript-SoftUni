// function removeEqualNumbers(inputArray) {
//     for (let currentNumIndex = 0; currentNumIndex < inputArray.length; currentNumIndex++) {
//         let currentNum = inputArray[currentNumIndex];
//         for (let i = 0; i < inputArray.length; i++) {
//             let compareNum = inputArray[i];
//             if (currentNumIndex !== i) {
//                 if (currentNum === compareNum) {
//                     inputArray.splice(i, 1);
//                 }
//             }
//         }
//     }
//     console.log(inputArray.join(' '))
// }
// //removeEqualNumbers([1, 2, 3, 4]);
// removeEqualNumbers([7, 8, 9, 7, 2, 3, 4, 1, 2]);


//working solution
function removeEqualNumbers(inputArray) {

    let uniqueNumbersArray = [];
    let arrayLength = inputArray.length;

    for (let index = 0; index < arrayLength; index++) {
        if (!uniqueNumbersArray.includes(inputArray[index])) {
            uniqueNumbersArray.push(inputArray[index]);
        }
    }
    console.log(uniqueNumbersArray.join(' '));
}
