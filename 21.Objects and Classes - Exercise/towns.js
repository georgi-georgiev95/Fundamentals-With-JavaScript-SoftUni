function townCoordintes(inputArray) {

    for (const townInfo of inputArray) {
        let townArray = townInfo.split(' | ');
        let town = {
          town: townArray[0],
          latitude: Number(townArray[1]).toFixed(2),
          longitude: Number(townArray[2]).toFixed(2),
        };
        console.log(town);
    }
}
townCoordintes([
  "Sofia | 42.696552 | 23.32601",
  "Beijing | 39.913818 | 116.363625",
]);
townCoordintes(["Plovdiv | 136.45 | 812.575"]);