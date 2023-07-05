function addressBook(input){
    let addressBookMap = {};

    for (const line of input) {
        let [name, address] = line.split(':');
        addressBookMap[name] = address;//ако има повтарящи се имена то презаписва новия адрес към името
    }

    let sortedNames = Object.keys(addressBookMap)//така взима само ключовете от обекта
        .sort((nameA, nameB) => nameA.localeCompare(nameB));//сортира по азбучен ред
    //обхождаме обекта и печатаме необходимото
    for (const name of sortedNames) {
        console.log(`${name} -> ${addressBookMap[name]}`);
    }
}

addressBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);