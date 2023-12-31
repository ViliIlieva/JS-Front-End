function solve(input){
    const n = input.shift();
    let pieces = {};
    for (let i = 0; i < n; i++) {
        let [piece, composer, key] = input.shift().split('|');
        pieces[piece] = {composer, key};
    }

    let commandParser = {
        'Add': addPiece,
        'Remove': removePiece,
        'ChangeKey': changeKey,
    }

    for (const inputLine of input) {
        if(inputLine === 'Stop'){
            break;
        }
        let command = inputLine.split('|')[0];
        //подавам командата към класа и в скобите останалите елементи, без първия от линията
        commandParser[command](...inputLine.split('|').slice(1));
    }

    for (const piece in pieces) {
        let {composer, key} = pieces[piece];
        console.log(`${piece} -> Composer: ${composer}, Key: ${key}`);
    }

    function addPiece(piece, composer, key){
        if(!pieces.hasOwnProperty(piece)){
            pieces[piece] = {composer, key};
            console.log(`${piece} by ${composer} in ${key} added to the collection!`);
        }else {
            console.log(`${piece} is already in the collection!`);
        }
    }

    function removePiece(piece){
        if(pieces.hasOwnProperty(piece)){
            delete pieces[piece];
            console.log(`Successfully removed ${piece}!`);
        }else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }

    function changeKey(piece, newKey){
        if(pieces.hasOwnProperty(piece)){
            pieces[piece].key = newKey;
            console.log(`Changed the key of ${piece} to ${newKey}!`);
        }else {
            console.log(`Invalid operation! ${piece} does not exist in the collection.`);
        }
    }
}

solve(
    [
        '3',
        'Fur Elise|Beethoven|A Minor',
        'Moonlight Sonata|Beethoven|C# Minor',
        'Clair de Lune|Debussy|C# Minor',
        'Add|Sonata No.2|Chopin|B Minor',
        'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
        'Add|Fur Elise|Beethoven|C# Minor',
        'Remove|Clair de Lune',
        'ChangeKey|Moonlight Sonata|C# Major',
        'Stop'
    ]
);
