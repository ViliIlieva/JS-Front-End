function perfectNum(number) {
    let temp = 0;
    for (let i = 1; i <= number / 2; i++) {
        if (number % i === 0) {
            temp += i;
        }
    }

    if (temp === number && temp !== 0) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }

    //функцията reduce минава през целия масив и сумира елементите му, два по два,
    //let sum = 0;
    // let arrSum = arr.reduce((prevValue, currentValue) =>
    // return prevValue + currentValue, sum);
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);