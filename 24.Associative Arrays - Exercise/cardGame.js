function playerHandPower(input) {
    let allCards = {};
    input.forEach(line => {
        let [name, cards] = line.split(': ');
        if (allCards.hasOwnProperty(name)) {
            let currentCards = allCards[name];
            allCards[name] = currentCards + ', ' + cards;
        } else {
            allCards[name] = cards;
        }
    })
    let uniqueCards = {};
    for (const kvp of Object.entries(allCards)) {
        let unique = new Set(kvp[1].split(', '));
        let uniqueDraws = Array.from(unique.values());
        uniqueCards[kvp[0]] = uniqueDraws.toString();
    }

    let result = {};
    for (let [name, cards] of Object.entries(uniqueCards)) {
        let card = cards.split(',');
        let sum = 0;
        card.forEach(draw => {
            let p = '';
            let s = '';
            if (draw.length > 2) {
                p = draw[0] +''+ draw[1];
                s = draw[2];
            } else {
                p = draw[0];
                s = draw[1];
            }
            switch (p) {
                case 'J':
                    p = 11;
                    break;
                case 'Q':
                    p = 12;
                    break;
                case 'K':
                    p = 13;
                    break;
                case 'A':
                    p = 14;
                    break;
                default:
                    p = Number(p);
            }
            switch (s) {
                case 'S':
                    s = 4;
                    break;
                case 'H':
                    s = 3;
                    break;
                case 'D':
                    s = 2;
                    break;
                case 'C':
                    s = 1;
                    break;
            }
            sum += p * s
        })
        result[name] = sum;
    }

    for (let [name, score] of Object.entries(result)) {
        console.log(`${name}: ${score}`);
    }
}
playerHandPower([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]

)


//P (2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q, K, A)
//                               11 12 13 14
//S -> 4, H-> 3, D -> 2, C -> 1
//p*t;

