function solve(input){
    let employees = {};
    for (const line of input) {
        let name = line;

        employees[name] = name.length;
    }

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnann Buckley',
    'Juan Peterson'
])