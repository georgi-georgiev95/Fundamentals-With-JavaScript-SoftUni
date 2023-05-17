function magicMatrice(matrix) {
    let rowTotal = matrix[0].reduce((a, b) => a + b);
    let colTotal = 0;

    matrix.forEach(row => {
        colTotal += row[0];
    });

    let result = true;
    let counter = 0;

    for (let i = 0; i < matrix.length; i++) {
        const currentRow = matrix[i].reduce((acc, item) => acc + item);
        let currentCol = 0;
        for (let j = 0; j < matrix.length; j++) {
            const num = matrix[j][i];
            currentCol += num;
        }
        if (currentRow !== rowTotal || currentCol !== colTotal) {
            result = false;
          	break;
        }

    }

    console.log(result);
}
magicMatrice([    // true;
  [4, 5, 6],
  [6, 5, 4],
  [5, 5, 5],
]);
// magicMatrice([   // false;
//   [11, 32, 45],
//   [21, 0, 1],
//   [21, 1, 1],
// ]);
// magicMatrice([   // true; 
//   [1, 0, 0],
//   [0, 0, 1],
//   [0, 1, 0],
// ]);
