function train(inputArray) {
    let wagonsAndPassangers = inputArray[0].split(' ').map(x => Number(x));
    let maximumCapacityOfWagons = Number(inputArray[1]);
    
    for (let index = 2; index < inputArray.length; index++) {
        let currentCommand = inputArray[index].split(' ');
        if (Number.isInteger(Number(currentCommand[0]))) {
            let passengersToPlace = Number(currentCommand[0]);
            for (let i = 0; i < wagonsAndPassangers.length; i++) {
                let currentWagon = wagonsAndPassangers[i];
                if ((currentWagon + passengersToPlace) <= maximumCapacityOfWagons) {
                    wagonsAndPassangers[i] = (currentWagon + passengersToPlace);
                    break;
                }
            }
        } else {
            wagonsAndPassangers.push(Number(currentCommand[1]));
        }
    }
    console.log(wagonsAndPassangers.join(' '));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
