function calc() {
    const firstNum = Number(document.getElementById('num1').value);

    const secInput = document.getElementById('num2');
    let secNum = Number(secInput.value);//втори вариант за обръщане в число

    const sumInput = document.getElementById('sum');
    let sum = firstNum + secNum;

    sumInput.value = sum; //закачаме към нашия инпут резултата
}
