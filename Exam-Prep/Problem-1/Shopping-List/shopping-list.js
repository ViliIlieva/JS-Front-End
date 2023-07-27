function solve(input) {
    let shoppingList = Array.from(input.shift().split('!'));

    let commandParser = {
        'Urgent': addItemAtStart,
        'Unnecessary': removeItem,
        'Correct': correct,
        'Rearrange': rearrange,
    }

    for (const inputLine of input) {
        if (inputLine === 'Go Shopping!') {
            break;
        }
        let command = inputLine.split(' ')[0];
        commandParser[command](inputLine.split(' ').slice(1));
    }

    //print in the end
    console.log(shoppingList.join(', '))

    function addItemAtStart(item) {
        if (!shoppingList.includes(item[0])) {
            shoppingList.unshift(item[0]);
        }
    }

    function removeItem(item) {
        if (shoppingList.includes(item[0])) {
            let indexOf = shoppingList.indexOf(item[0]);
            shoppingList.splice(indexOf, 1);
        }
    }

    function correct(item) {
        let oldItem = item[0];
        let newItem = item[1];
        if (shoppingList.includes(oldItem)) {
            let indexOf = shoppingList.indexOf(oldItem);
            shoppingList.splice(indexOf, 1);
            shoppingList.splice(indexOf, 0, newItem);
        }
    }

    function rearrange(item) {
        if (shoppingList.includes(item[0])) {
            removeItem(item);
            shoppingList.push(item[0]);
        }
    }
}

solve(
    (["Milk!Pepper!Salt!Water!Banana",
        "Urgent Salt",
        "Unnecessary Grapes",
        "Correct Pepper Onion",
        "Rearrange Grapes",
        "Correct Tomatoes Potatoes",
        "Go Shopping!"])

)