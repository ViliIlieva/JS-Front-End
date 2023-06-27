function solve(num){
    let arr = num.toString().split('');
    let sumEven = 0;
    let sumOdd = 0;
    arr.forEach(n => n % 2 === 0 ? sumEven += parseInt(n) : sumOdd += parseInt(n));

    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

solve( 1000435);
solve( 3495892137259234);