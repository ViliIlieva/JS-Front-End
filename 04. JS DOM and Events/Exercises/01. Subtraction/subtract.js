function subtract() {
    const firstNum = document.getElementById('firstNumber').value;
    const secNum = document.getElementById('secondNumber').value;

    let result = Number(firstNum) - Number(secNum);

    document.getElementById('result').textContent = result;
}