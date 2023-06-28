function solve(n){
    let arr = Array(n).fill(n);

    for (let i = 0; i < n; i++) {
        console.log(arr.join(' '));
    }
}

solve(3);
solve(7);
solve(2);