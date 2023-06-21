function solve(start, end){
    let arr = [];
    let sum = 0;
    
    for (let index = start; index <= end; index++) {
        arr.push(index);
        sum = sum + index;
    }

    console.log(arr.join(' '));
    console.log(`Sum: ${sum}`);
}

solve(5, 10);
solve(0, 26);