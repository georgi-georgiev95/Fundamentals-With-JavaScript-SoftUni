function oddOccurrences(input) {
    let result = new Map();
    let words = input.split(' ').map(x => x.toLowerCase());
    words.forEach(word => {
        if (result.has(word)) {
            let currentCount = Number(result.get(word));
            let newCount = currentCount + 1;
            result.set(word, newCount);
        } else {
            result.set(word, 1);
        }
    })
    let resultString = '';
    for (const kvp of result) {
        if (kvp[1] % 2 !== 0) {
            resultString+=`${kvp[0]} `
        }
    }
    console.log(resultString);
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')