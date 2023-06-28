function solve(firstNum, secondNum, thirdNum){
    const sum = (a, b) => a + b;
    const subtract = (mySum, num) => mySum - num;

    return subtract(sum(firstNum, secondNum), thirdNum);

    // let sumNum = sum(firstNum, secondNum);
    // let result = subtract(sumNum, thirdNum);
    // console.log(result);
    //
    // function sum(a, b){
    //     return a + b;
    // }
    //
    // function subtract(c, d){
    //     return c - d;
    // }
}

console.log(solve(23, 6, 10));
console.log(solve(1, 17, 30));
console.log(solve(42, 58, 100));