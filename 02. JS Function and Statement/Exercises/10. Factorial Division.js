function factorialDivision(firstNum, secondNum){
    let firstFactorial = 1;
    let secondFactorial = 1;

    if(firstNum !== 0 && firstNum !== 1){
        for (let i = 2; i <= firstNum; i++) {
            firstFactorial = firstFactorial * i;
        }
    }

    if(secondNum !== 0 && secondNum !== 1){
        for (let i = 2; i <= secondNum; i++) {
            secondFactorial = secondFactorial * i;
        }
    }

    console.log((firstFactorial/secondFactorial).toFixed(2));
}

factorialDivision(5, 2);
factorialDivision(6, 2);