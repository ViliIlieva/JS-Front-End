function simpleCalculator(n, m, operation) {
    const add = (a, b) => a + b;
    const subtract = (a, b) => a - b;
    const divide = (a, b) => a / b;
    const multiply = (a, b) => a * b;

    const operationMap = {
        add: add,
        subtract: subtract,
        divide: divide,
        multiply
    }

    return operationMap[operation](n, m);
}

console.log(simpleCalculator(5, 5, 'multiply'));
console.log(simpleCalculator(40, 8,  'divide'));
console.log(simpleCalculator(12, 19, 'add'));
console.log(simpleCalculator(50, 13, 'subtract'));