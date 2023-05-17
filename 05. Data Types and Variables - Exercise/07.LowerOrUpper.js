function solve(string) {
    let stringToNum = string.charCodeAt(0);
    if (stringToNum >= 65 && stringToNum <= 90) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}
solve('L')