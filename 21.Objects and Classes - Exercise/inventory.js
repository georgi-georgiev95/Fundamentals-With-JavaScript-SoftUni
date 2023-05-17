function registerForHeroes(list) {
    let resultArray = [];

    for (const line of list) {
        let [name, level, items] = line.split(' / ');
        let hero = {
            hero: name,
            level: level,
            items: items,
        }
        resultArray.push(hero);
    }
    
    resultArray.sort((a, b) => a.level - b.level);

    // for (const line of resultArray) {
    //     for (const key in line) {
    //         if (key === 'hero') {
    //             console.log(`Hero: ${line[key]}`);
    //         } else if (key === 'level') {
    //             console.log(`level => ${line[key]}`);
    //         } else {
    //             console.log(`items => ${line[key]}`);
    //         }
    //     }
    // }

    resultArray.forEach((hero) => {
        console.log(`Hero: ${hero.hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`)
    })

}
registerForHeroes([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);
registerForHeroes([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);