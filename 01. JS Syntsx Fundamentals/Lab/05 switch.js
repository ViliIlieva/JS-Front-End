function solve(firstNum, secondNum, opertion) {
    let result = 0;
    switch(opertion){
        case "+":
        result = firstNum + secondNum;
        break;
        case "-":
        result = firstNum - secondNum;
        break;
        case "*":
        result = firstNum * secondNum;
        break;
        case "/":
        result = firstNum / secondNum;
        break;
        case "%":
        result = firstNum % secondNum;
        break;
        case "**":
        result = firstNum ** secondNum;
        break;
    }
    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');