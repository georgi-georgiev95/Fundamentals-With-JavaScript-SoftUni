function checkPassword(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log("Password must be between 6 and 10 characters");
    }
    
    let secondCondition = true;
    for (let i = 0; i < password.length; i++) {
        let currentDigitCode = password.charCodeAt(i);
        if (currentDigitCode < 48 || (currentDigitCode > 57 && currentDigitCode < 65) || (currentDigitCode > 90 && currentDigitCode < 97) || currentDigitCode > 122) {
            isValid = false;
            secondCondition = false;
        }          
    }

    if (!secondCondition) {
        console.log("Password must consist only of letters and digits");
    }

    let digitsCount = 0;
    for (let i = 0; i < password.length; i++) {
        let currentDigitCode = password.charCodeAt(i);
        if (currentDigitCode >= 48 && currentDigitCode <= 57) {
            digitsCount++;
        }
    }

    if (!(digitsCount >= 2)) {
        isValid = false;
        console.log("Password must have at least 2 digits");
    }
    
    if (isValid) {
        console.log("Password is valid");
    }
}
checkPassword('Pa$s$s');