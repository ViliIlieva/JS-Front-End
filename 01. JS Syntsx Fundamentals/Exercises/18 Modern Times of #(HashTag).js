function solve(text){
    let textArr = text.split(" ");
    let wordsArr = [];

    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i];
        if(currentWord.length > 1 && currentWord.startsWith('#')){
            let word = currentWord.substring(1, currentWord.length);
            wordsArr.push(word);
            console.log(word);
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');