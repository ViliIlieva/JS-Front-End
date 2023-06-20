function solve(num1, num2, num3){
    let largest = 0;
    if(num1 > num2 && num1 > num3){
        largest = num1;
    }else if(num2 > num1 && num2 > num3){
        largest = num2;
    }else{
        largest = num3;
    }

    console.log(`The largest number is ${largest}.`);
}

solve(5, -3, 16);
solve(-3, -5, -22.5);