function dictionary(jsonArray) { // приема масив
    const terms = {}; // създава празен обект
    for (const line of jsonArray) { // обхожда масива
        const lineObject = JSON.parse(line); // всеки ред става обект
        for (const key in lineObject) { // обхожда обекта
            terms[key] = lineObject[key];   // запазва ключ - стойност и така обектите се събират в един
        }
    }
    const sortedTerms = Object.keys(terms).sort(); // връща масив от ключовете и ги сортира
    for (const term of sortedTerms) { // обхожда сортирания масив с ключове
        console.log(`Term: ${term} => Definition: ${terms[term]}`); // печата ключа (думата) от сортирания масив и взима референтната и стойност от създадения обект 
    }
}

dictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)