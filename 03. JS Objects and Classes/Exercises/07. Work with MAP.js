function solve(string){
    string = string.split(' ');
    let res = new Map();

    //така изглежда
    // Map(6) {
    //     'java' => 2,
    //         'c#' => 3,
    //         'php' => 3,
    //         '3' => 2,
    //         '1' => 1,
    //         '5' => 1
    // }

    for (let word of string){
        word = word.toLowerCase()
        if(res.has(word)){
            res.set(word, res.get(word) + 1);
        } else{
            res.set(word, 1);
        }
    }

    for (let item of res){
        if(item[1] % 2 !== 0){
            process.stdout.write(`${item[0]} `) // печата резултата на един ред
        }
    }
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
