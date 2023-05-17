function wordTracker(words) {
    let countingWords = new Map();
    let magicWords = words.shift().split(' ');
    magicWords.forEach(word => {
        countingWords.set(word, 0);
    })

    for (const el of words) {
        if (countingWords.has(el)) {
            let currentCount = Number(countingWords.get(el));
            let newCount = currentCount + 1;
            countingWords.set(el, newCount);
        }
    }
    
    let sortedArray = Array.from(countingWords).sort((a,b) => b[1] - a[1]);
    for (const [word, count] of sortedArray) {
        console.log(`${word} - ${count}`);
    }

}
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']

)