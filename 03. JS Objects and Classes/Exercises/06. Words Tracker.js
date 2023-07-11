function solve(input){
    const [searchWord, ...words] = input;

    console.log(searchWord);

    const searchWordArr  = searchWord.split(' ').reduce((acc, curr) => {
        acc[curr] = 0;
        return acc;
    }, {});

    words.forEach(word => {
        if(searchWordArr.hasOwnProperty(word)){
            searchWordArr[word] += 1;
        }
    });

    let sortByValue = Object.entries(searchWordArr)
        .sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    sortByValue.forEach((element) =>
        console.log(`${element[0]} - ${element[1]}`))
}

solve([
        'this sentence',
        'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
);

solve([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
);