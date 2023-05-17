function solve(n) {
    let result = "";
    for (let rows = 1; rows <= n; rows++) {
        for (let cols = 1; cols <= rows; cols++) {
            result += rows + " ";
        }
        console.log(result);
        result = "";
    }
}