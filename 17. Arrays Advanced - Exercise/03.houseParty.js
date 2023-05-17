function houseParty(inputArray) {
    let goingArray = [];

    for (let index = 0; index < inputArray.length; index++){
        let currentInfoArray = inputArray[index].split(' ');
        let name = currentInfoArray[0];
        if (currentInfoArray.length === 3) {
            if (!goingArray.includes(name)) {
                goingArray.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (!goingArray.includes(name)) {
                console.log(`${name} is not in the list!`)
            } else {
                let indexOfRejected = goingArray.indexOf(name);
                goingArray.splice(indexOfRejected, 1);
            }
            
        }
    }

    console.log(goingArray.join('\n'));
}
houseParty(['Allie is going!',
'George is going!',
'John is not going!',
'George is not going!']
)
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)