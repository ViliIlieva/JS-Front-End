function calc() {
    const firstNum = document.getElementById('num1').value;
    const secNum = document.getElementById('num2').value;

    let sum = Number(firstNum) + Number(secNum);

    document.getElementById('sum').value = sum; //закачаме към нашия инпут резултата
}
