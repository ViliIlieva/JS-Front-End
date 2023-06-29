function solve(n){
    let arr = Array(n).fill(new Array(n).fill(n)).forEach(row => console.log(row.join(' ')));
    //Array(n) прави масив от три елемента
    //във fill правим нов масив и става матрица
    //.fill пълни този масив със подадената стойност
}

solve(3);
solve(7);
solve(2);