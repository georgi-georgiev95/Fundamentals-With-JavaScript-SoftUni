function solve(input) {
    let resultArray = [];
    for (let index = 0; index < input.length; index++) {
        let command = input[index];
        let movieObject = {};
        if (command.includes('addMovie')) {
            let movieName = command.split('addMovie ')[1];
            movieObject.name = movieName;
            resultArray.push(movieObject);
        } else if (command.includes('directedBy')) {
            let movieName = command.split(' directedBy ')[0];
            let director = command.split(' directedBy ')[1];
            resultArray.forEach(object => {
                if (object.name === movieName) {
                    object.director = director;
                }
            })
        } else {
            let movieName = command.split(' onDate ')[0];
            let date = command.split(' onDate ')[1];
            resultArray.forEach(object => {
                if (object.name === movieName) {
                    object.date = date;
                }
            })
        }
    }
    for (const obj of resultArray) {
        if (obj.name && obj.director && obj.date) {
            console.log(JSON.stringify(obj));
        }
    }
}