function solve(arr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (let index = 0; index < arr.length; index++) {
       if(arr[index] % 2 === 0){
        sumEven = sumEven + arr[index];
       }else{
        sumOdd = sumOdd + arr[index];
       } 
    }
    console.log(sumEven - sumOdd);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);