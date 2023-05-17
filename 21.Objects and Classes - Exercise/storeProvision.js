function storeProvision(arr1, arr2) {
    const localStore = {};

    const firstArrayLength = arr1.length;
    const secondArrayLength = arr2.length;

    for (let index = 0; index < firstArrayLength; index += 2) {
        const keyProduct = arr1[index];
        localStore[keyProduct] = Number(arr1[index + 1]);
    }

    for (let index = 0; index < secondArrayLength; index += 2) {
        const keyProductRestock = arr2[index];
        if (!localStore.hasOwnProperty(keyProductRestock)) {
            localStore[keyProductRestock] = 0;
        }
        localStore[keyProductRestock] += Number(arr2[index + 1]);
    }
    
    for (const key in localStore) {
        console.log(`${key} -> ${localStore[key]}`);
    }
}
storeProvision(
    ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
    ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
storeProvision(
    ["Salt", "2", "Fanta", "4", "Apple", "14", "Water", "4", "Juice", "5"],
    ["Sugar", "44", "Oil", "12", "Apple", "7", "Tomatoes", "7", "Bananas", "30"]
);
