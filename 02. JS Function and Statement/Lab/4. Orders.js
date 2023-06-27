function totalPrice(product, quantity) {
    let total = 0;
    switch (product){
        case "coffee":
           return  total = (1.50 * quantity).toFixed(2);
        case "water":
           return  total = (1.00 * quantity).toFixed(2);
        case "coke":
           return  total = (1.40 * quantity).toFixed(2);
        case "snacks":
           return  total = (2.00 * quantity).toFixed(2);
    }
}

console.log(totalPrice("water", 5));
console.log(totalPrice("coffee", 2));