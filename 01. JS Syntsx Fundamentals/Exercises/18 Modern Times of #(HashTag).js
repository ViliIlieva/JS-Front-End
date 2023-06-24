function solve(text){
    let textArr = text.split(" ");
    let wordsArr = [];


    for (let i = 0; i < textArr.length; i++) {
        let currentWord = textArr[i];
        if(currentWord.length > 1 &&
            currentWord.startsWith('#') &&
            /^[A-Za-z]*$/.test(currentWord.substring(1))){
            let word = currentWord.substring(1, currentWord.length);
            wordsArr.push(word);
            console.log(word);
        }
    }
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia');
solve('The symbol # is known #variously in English-speaking #regions as the #number sign');

// function  modernTimes(text){
//     return text.split(' ')
//         .filter((word) => word.startsWith('#') && containsOnlyLetters(word))
//         .map((word) => word.slice(1))
//         .filter((word) => word !== '')
//         .join('\n');
//
//     function containsOnlyLetters(word){
//         return [...word.toLowerCase()]
//             .slice(1)
//             .map((symbol) => symbol.charCodeAt(0))
//             .every(charCode => charCode >= 97 && charCode<= 122);
//     }
// }