function solve(input) {
    // let employees = {};
    // for (const line of input) {
    //     employees[line] = line.length;
    // }
    //
    // for (const key in employees) {
    //     console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    // }
    let employees = input.reduce((data, emploee) => {//първо приемаме data във която ще редуцираме и текущото employee
        data[emploee] = emploee.length;//закачаме ключ и стойност
        return data;//връщаме новото състояние на data
    }, {});//като втори аргумент получаваме мястото където ще редуцираме всичко {} т.е празен обект

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`);
    }
}

solve([
    'Silas Butler',
    'Adnann Buckley',
    'Juan Peterson'
])