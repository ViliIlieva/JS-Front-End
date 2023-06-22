function solve(words, text){
    let replacedText = '';
    let wordsArr = words.split(', ');
    let templatesArr = text.split(' ');

    for (let i = 0; i < templatesArr.length; i++) {
        let search = templatesArr[i];
        if(search.includes('*')){
            for (let j = 0; j < wordsArr.length; j++) {
                let replacement = wordsArr[j];
                if(search.length === replacement.length ){
                    replacedText = text.replace(search, replacement);
                    text = replacedText;
                    break;
                }
            }
        }
    }

    console.log(text);
}

solve('great, learning',
    'softuni is ***** place for ******** new programming languages'
);