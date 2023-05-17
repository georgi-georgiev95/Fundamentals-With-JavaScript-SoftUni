function equalSequence(arr) {
    let sequence = 1;
    let maxSequence = 0;
    let maxSequenceNum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i !== 0) {
            let currentNum = Number(arr[i]);
            let previousNum = Number(arr[i - 1]);
            if (currentNum === previousNum) {
                sequence++;
                if (sequence > maxSequence) {
                    maxSequence = sequence;
                    maxSequenceNum = currentNum;
                }
            } else {
                sequence = 1;
            }
        } 
    }
    console.log(`${(maxSequenceNum + " ").repeat(maxSequence)}`);
}
equalSequence([0, 1, 1, 5, 2, 2, 6, 3, 3])