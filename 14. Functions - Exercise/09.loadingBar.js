function loadingBar(number) {
    let percentCount = number / 10;
    let dotsCount = 10 - percentCount;

    if (number === 100) {
        console.log("100% Complete!");
    } else {
        console.log(`${number}% [${'%'.repeat(percentCount)}${'.'.repeat(dotsCount)}]`);
        console.log("Still loading...");
    }
}
loadingBar(30);