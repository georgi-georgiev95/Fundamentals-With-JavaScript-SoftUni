function solve(charOne, charTwo, charThree) {
    let chars = [charOne, charTwo, charThree];
    let result = "";
    for (let i = chars.length - 1; i >= 0; i--) {
        result += chars[i] + " ";
    }
    console.log(result);
}
solve('A',
'B',
'C'
)