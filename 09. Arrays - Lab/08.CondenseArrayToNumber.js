// function solve(input) {
//     if (input.length === 1) {
//         console.log(input[0]);
//         return;
//     }
//     for (let i = 0; i < input.length - 1; i++) {
//         input[i] = Number(input[i]) + Number(input[i + 1]);
//     }
//     input.pop();
//     solve(input);
// }
// solve([2, 10, 3])

// function sumDigits(arr) {
//     if (arr.length === 1) {
//         console.log(arr[0]);
//         return;
//     }

//     for (let i = 0; i < arr.length - 1; i++) {
//         arr[i] = Number(arr[i] + arr[i + 1]);
//     }
//     arr.pop();

//     sumDigits(arr);
// }
// sumDigits([1])

function condenseArray(arr) {
  let currArr = arr;
  while (currArr.length > 1) {
    let newArr = [];
    for (let i = 0; i < currArr.length - 1; i++) {
      let firstElement = currArr[i];
      let secondElement = currArr[i + 1];
      newArr.push(firstElement + secondElement);
    }
    currArr = newArr;
  }
  console.log(currArr); 
}

condenseArray([2, 10, 3]);
