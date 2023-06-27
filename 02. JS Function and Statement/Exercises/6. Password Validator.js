function passValidator(str){
    let checkPassLength = new RegExp("^.{6,10}$");
    let checkForSpecialSymbol = new RegExp("^[A-Za-z0-9]*$");
    let checkAtLeastTwoDigits = new RegExp("[0-9].*[0-9]");
    let passIsValid = true;

    if (!checkPassLength.test(str)){
        console.log("Password must be between 6 and 10 characters");
        passIsValid = false;
    }
    if (!checkForSpecialSymbol.test(str)) {
        console.log("Password must consist only of letters and digits");
        passIsValid = false;
    }
    if(!checkAtLeastTwoDigits.test(str)){
        console.log("Password must have at least 2 digits");
        passIsValid = false;
    }

    if(passIsValid){
        console.log("Password is valid");
    }
}

passValidator('logIn');
passValidator('MyPass123');
passValidator('Pa$s$s');