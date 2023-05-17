function factorialDivision(firstNumber, secondNumber) {
    function factorial(n) {
        if (n === 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

    let firstNumberFactorial = factorial(firstNumber);
    let secondNumberFactorial = factorial(secondNumber);
    let result = firstNumberFactorial / secondNumberFactorial;
    console.log(result.toFixed(2));
}
factorialDivision(5,2)