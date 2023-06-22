function solve(num){
    let sum = 0;
    let same = '';
    let arr = [];
    arr = num.toString().split('');

    for (let i = 0; i < arr.length; i++) {
        let firstNum = arr[0];

        sum = sum + parseInt(arr[i]);
        if(firstNum === arr[i]){
            same = 'true';
        }else {
            same = 'false';
        }
    }

    console.log(same);
    console.log(sum);
}

solve(2222222);
solve(1234);