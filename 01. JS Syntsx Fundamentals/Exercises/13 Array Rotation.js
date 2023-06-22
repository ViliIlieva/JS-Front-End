function solve(arr, num){
    for (let i = 0; i < num; i++) {
        let firstNum = arr.shift();
        arr.push(firstNum);
    }

    console.log(arr.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);