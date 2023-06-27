function solve(firstNum, secondNum, thirdNum){
    let sumNum = sum(firstNum, secondNum);
    let result = subtract(sumNum, thirdNum);

    console.log(result);

    function sum(a, b){
        return a + b;
    }

    function subtract(c, d){
        return c - d;
    }
}

solve(23, 6, 10);
solve(1, 17, 30);
solve(42, 58, 100);