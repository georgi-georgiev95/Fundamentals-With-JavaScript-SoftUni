function sortArray(inputArray) {
    inputArray.sort(function(a, b) {
      // Compare length of strings
      if (a.length !== b.length) {
        return a.length - b.length;
      }
      // If length is equal, compare alphabetically, ignoring case
      return a.localeCompare(b);
    });
    console.log(inputArray.join('\n'));
  }
//sortArray(["alpha", "beta", "gamma"]);
//sortArray(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortArray(["test", "Deny", "omen", "Default"]);
