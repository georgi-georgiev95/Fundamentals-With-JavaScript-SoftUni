function avgGrades(data) {
    let info = new Map();
    data.forEach(line => {
        let name = line.split(' ')[0];
        let grades = line.split(name + ' ')[1].split(' ').toString();
        if (info.has(name)) {
            let currentGrades = info.get(name);
            let newGrades = currentGrades +','+ grades;
            info.set(name, newGrades);
        } else {
            info.set(name, grades);
        }
    })
    let myArr = [];
    for (const kvp of info) {
        let currentGrades = kvp[1].split(',').map(x => Number(x));
        let count = currentGrades.length;
        let sum = currentGrades.reduce((a, b) => a + b);
        let average = (sum / count).toFixed(2);
        myArr.push([kvp[0], average]);
        
    }
    myArr.sort();
    for (const kvp of myArr) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }
}
avgGrades(['Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6']
)