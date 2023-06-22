function solve(word, text){
    let textArr = text.split(" ");
    let wordFound = false;

    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i].toLowerCase();

        if(currentWord === word){
            console.log(word);
            wordFound = true;
            break;
        }
    }
    if(!wordFound){
        console.log(`${word} not found!`);
    }
}

solve('javascript',
    'JavaScript is the best programming language'
);
solve('python',
    'JavaScript is the best programming language'
);