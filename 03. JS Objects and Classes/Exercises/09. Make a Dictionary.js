function solve(input){
    const dictionary = input.reduce((acc, curr) => {
        const term = JSON.parse(curr);
        acc = { ...acc, ...term }; //презаписва стойността ако вече я има, и винаги последната ст-т остава при нас
        return acc;
    }, {});

    // ALTERNATIVE SOLUTION to merge object
    //   let dictionary = {};

    //   input.forEach((jsonString) => {
    //     const term = JSON.parse(jsonString);
    //     dictionary = Object.assign(dictionary, term);//взема един обект и N други обекти и го вкарва към първия, като връща нов обект
    //   });

    const sortedDictionaryTerms = Object.keys(dictionary).sort();//вземаме ключовете и сортираме сямо тях

    sortedDictionaryTerms.forEach((term) =>//минаваме през всички ключове достъпваме стойността в обекта
        console.log(`Term: ${term} => Definition: ${dictionary[term]}`)
    );
}

solve([
        '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
        '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
        '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
        '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
        '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
    ]
);
