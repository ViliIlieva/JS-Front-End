function solve(num, operation1, operation2, operation3, operation4, operation5){
    let arr = [];
    arr.push(operation1, operation2, operation3, operation4, operation5);

    for (let i = 0; i < 5 ; i++) {
        switch (arr[i]){
            case 'chop':
                num = num /2;
                console.log(num);
                break;
            case 'dice':
                num = Math.sqrt(num);
                console.log(num);
                break;
            case 'spice':
                num = num + 1;
                console.log(num);
                break;
            case 'bake':
                num = num * 3;
                console.log(num);
                break;
            case 'fillet':
                num = num * 0.8;
                console.log(num.toFixed(1));
                break;
        }
    }
}

solve('32', 'chop', 'chop', 'chop', 'chop', 'chop');
solve('9', 'dice', 'spice', 'chop', 'bake', 'fillet');