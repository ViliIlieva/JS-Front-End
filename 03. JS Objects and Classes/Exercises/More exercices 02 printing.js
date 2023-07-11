function solve(input){
    const products = input.reduce((acc, curr) => {
        const [key, value] = curr.split(" : ");
        acc[key] = Number(value);
        return acc;
    }, {});

    const sortedKeys = Object.keys(products).sort();
    let letter = sortedKeys[0][0];//взема на първата дума първата буква

    console.log(letter);
    sortedKeys.forEach((key, i) => {
        if (key[0] !== letter) {//дали първата буква от ключа е различна
            letter = key[0];
            console.log(letter);
        }
        console.log(`  ${key} : ${products[key]}`);
    });
}

solve([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);


// You have to create a sorted catalog of store products. You will be given the products’ names and
// prices. You need to order them in alphabetical order.
//     The input comes as an array of strings. Each element holds info about a product in the following
// format:
//     "{productName} : {productPrice}"
// The product’s name will be a string, which will always start with a capital letter, and the price will
// be a number. You can safely assume there will be NO duplicate product input. The comparison for
//     alphabetical order is case-insensitive.
//     As output, you must print all the products in a specified format. They must be ordered exactly as
// specified above. The products must be divided into groups, by the initial of their name. The group's
// initial should be printed, and after that, the products should be printed with 2 spaces before their
// names. For more info check the examples.