function resourcesQuantity(inputData) {
    let result = {};
    for (let index = 0; index < inputData.length; index+=2) {
        let resource = inputData[index];
        let resourceQuantity = Number(inputData[index + 1]);
        if (result.hasOwnProperty(resource)) {
            let currentAmmount = result[resource];
            let newAmmount = currentAmmount + resourceQuantity;
            result[resource] = newAmmount;
        } else {
            result[resource] = resourceQuantity;
        }
    }

    for (let [resource, quantity] of Object.entries(result)) {
        console.log(`${resource} -> ${quantity}`);
    }
}
resourcesQuantity([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]
)