function convertToObj(jsonString){
    let data = JSON.parse(jsonString);

    for (const dataKey in data) {
        console.log(`${dataKey}: ${data[dataKey]}`)
    }
}

convertToObj('{"name": "George", "age": 40, "town": "Sofia"}');
convertToObj('{"name": "Peter", "age": 35, "town": "Plovdiv"}');

