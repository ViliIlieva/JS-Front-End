function solve(arr){
    for (const arrElement of arr) {
        console.log(checkPalindromeNum(arrElement));
    }

    function checkPalindromeNum(num){
        return num.toString() === num.toString().split('').reverse().join('');
    }
}

solve([123,323,421,121]);
solve([32,2,232,1010]);