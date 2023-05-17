function dungeons(arr) {
    let newArr = arr[0].split("|");
    let startingHealth = 100;
    let roomCounter = 0;
    let coins = 0;
    for (let i = 0; i < newArr.length; i++) {
        roomCounter++;
        let currentAction = newArr[i].split(" ");
        for (let j = 0; j < currentAction.length-1; j++) {
            let word = currentAction[j];
            let num = Number(currentAction[j + 1]);
            if (word !== "potion" && word !== "chest") {
                startingHealth -= num;
                if (startingHealth > 0) {
                    console.log(`You slayed ${word}.`);
                } else {
                    console.log(`You died! Killed by ${word}.`);
                    console.log(`Best room: ${roomCounter}`);
                    return;
                }
            } else if (word === "potion") {
                startingHealth += num;
                if (startingHealth > 100) {
                    console.log(`You healed for ${100 - (startingHealth-num)} hp.`);
                    startingHealth = 100;
                    console.log(`Current health: ${startingHealth} hp.`)
                } else {
                    console.log(`You healed for ${num} hp.`);
                    console.log(`Current health: ${startingHealth} hp.`);
                }
            } else if (word === "chest") {
                coins += num;   
                console.log(`You found ${num} coins.`)
            }
        }
    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${startingHealth}`);
}
dungeons(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);