function solve(input1, input2) {

    let storeArr = [];
    let orderedArr = [];
    for (const line of input1) {
        storeArr.push(line);
    }
    for (const line of input2) {
        orderedArr.push(line);
    }

    let storeStock = {};
    for (let i = 0; i < storeArr.length; i += 2) {
        storeStock[storeArr[i]] = storeArr[i + 1];
    }


    for (let i = 0; i < orderedArr.length; i += 2) {
        if (!storeStock.hasOwnProperty(orderedArr[i])) {
            storeStock[orderedArr[i]] = orderedArr[i + 1];
        } else {
            let storeCount =  Number(storeStock[orderedArr[i]]);
            let orderCount = Number(orderedArr[i + 1]);
            storeStock[orderedArr[i]] = storeCount + orderCount;
        }
    }

    for (const key in storeStock) {
        console.log(`${key} -> ${storeStock[key]}`);
    }
}

solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);