function parkingLot(input) {
    const parking = new Set();//гарантира уникалност, ако добавим втори такъв елемент, го заменя

    input.forEach((entry) => {
        const [command, number] = entry.split(", ");

        if (command === "IN") {
            parking.add(number);
        } else if (command === "OUT") {
            parking.delete(number);
        }
    });

    const carNumbers = Array.from(parking).sort();//Сета не може да се сортира директно, превръща се в масив първо

    if(carNumbers.length > 0){
        carNumbers.forEach(el => console.log(el));
    }else {
        console.log(`Parking Lot is Empty`);
    }
}

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

parkingLot(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);