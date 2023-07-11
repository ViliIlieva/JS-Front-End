function solve(input1, input2) {
    const products = [...input1, ...input2]; //създаваме нов масив от други два масива

    const stock = products.reduce((acc, curr, i) => {//от масив да го превърнем в обект
        if (i % 2 === 0) {   //ако елемента е на четна позиция в масива
            if (!acc.hasOwnProperty(curr)) { //проверяваме дали вече има такова пропърти и ако няма
                acc[curr] = Number(products[i + 1]); //добавяме неговата стойност която е на съседния индекс
            } else {
                acc[curr] += Number(products[i + 1]); // ако вече го има сумираме стойностите
            }
        }

        return acc; //връща новосъздадения обект
    }, {});

    Object.keys(stock).forEach((key) => {
        console.log(`${key} -> ${stock[key]}`);
    });


    // let storeArr = [];
    // let orderedArr = [];
    // for (const line of input1) {
    //     storeArr.push(line);
    // }
    // for (const line of input2) {
    //     orderedArr.push(line);
    // }
    //
    // let storeStock = {};
    // for (let i = 0; i < storeArr.length; i += 2) {
    //     storeStock[storeArr[i]] = storeArr[i + 1];
    // }
    //
    //
    // for (let i = 0; i < orderedArr.length; i += 2) {
    //     if (!storeStock.hasOwnProperty(orderedArr[i])) {
    //         storeStock[orderedArr[i]] = orderedArr[i + 1];
    //     } else {
    //         let storeCount =  Number(storeStock[orderedArr[i]]);
    //         let orderCount = Number(orderedArr[i + 1]);
    //         storeStock[orderedArr[i]] = storeCount + orderCount;
    //     }
    // }
    //
    // for (const key in storeStock) {
    //     console.log(`${key} -> ${storeStock[key]}`);
    // }
}

solve(['Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'],
    ['Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30']);