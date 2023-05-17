function parking(inputData) {
    let parkingInfo = new Map();
    inputData.forEach(line => {
        let command = line.split(', ');
        let action = command[0];
        let number = command[1];
        parkingInfo.set(number, action);
    })
    
    let sortedArray = Array.from(parkingInfo).sort();
    let counter = 0;
    for (const kvp of sortedArray) {
        if (kvp[1] === 'IN') {
            console.log(kvp[0]); 
        } else {
            counter++
        }
    }
    if (counter === sortedArray.length) {
        console.log(`Parking Lot is Empty`)
    }
}
parking(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']

)