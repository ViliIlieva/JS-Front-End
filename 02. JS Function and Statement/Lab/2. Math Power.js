function  solve(num, power){
    console.log(pow(num, power));

    function pow(num, pow){
        let result = 1;
        for (let i = 0; i < pow; i++) {
            result *= num;
        }
        return result
    }
}

solve(2,8);
solve(3,4);