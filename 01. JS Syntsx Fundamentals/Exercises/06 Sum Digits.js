function solve(num){
    let sum = 0;
    let numString = num.toString();
    let arr = [];
    arr = numString.split('');

    arr.forEach(element => {
        sum = sum + parseInt(element);
    });
    console.log(sum);
}

solve(245678);
solve(97561);
solve(543);