function printMatrix(number) {
    let matrixArr = [];
    for (let rows = 0; rows < number; rows++) {    
        let rowsArr = [];      
        for (let cols = 0; cols < number; cols++) {
            rowsArr.push(number);
        }
        
        matrixArr.push(rowsArr.join(' '));
    }

    console.log(matrixArr.join('\n'));
}
printMatrix(3)