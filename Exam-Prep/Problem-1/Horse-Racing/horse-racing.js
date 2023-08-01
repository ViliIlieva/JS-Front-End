function solve(input) {
    let horses = [...input.shift().split('|')];

    let commandParser = {
        'Retake': swap,
        'Trouble': dropByOnePosition,
        'Rage': ragesTwoPosition,
        'Miracle': lastBecomesFirst,
    }

    for (const line of input) {
        if (line === 'Finish') {
            break;
        }
        let command = line.split(' ')[0];
        commandParser[command](...line.split(' ').slice(1));
    }

    function swap(overtakingHorse, overtakenHorse) {
        let overtakingIndex = horses.indexOf(overtakingHorse);
        let overtakenIndex = horses.indexOf(overtakenHorse);
        if (overtakingIndex < overtakenIndex) {
            [horses[overtakingIndex], horses[overtakenIndex]] =
                [horses[overtakenIndex], horses[overtakingIndex]];
            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
        }
    }

    function dropByOnePosition(horseName) {
        let index = horses.indexOf(horseName);

        if (index > 0) {//значи не е на последна позиция
            horses.splice(index, 1);
            index = index - 1;
            horses.splice(index, 0, horseName);
            console.log(`Trouble for ${horseName} - drops one position.`);
        }
    }

    function ragesTwoPosition(horseName) {
        let index = horses.indexOf(horseName);

        if (index === horses.length - 2) {
            horses.splice(index, 1);
            horses.push(horseName);
        } else if (index !== horses.length - 1) {
            let horseToReplace = horses[index + 2];
            horses.splice(index + 2 + 1, 0, horseName);
            horses.splice(index, 1);
        }
        console.log(`${horseName} rages 2 positions ahead.`);
    }

    function lastBecomesFirst() {
        let firstIndex = horses.length - 1;
        let horseName = horses.splice(0, 1);
        horses.push(horseName);
        console.log(`What a miracle - ${horseName} becomes first.`);
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses[horses.length - 1]}`)
}

solve(
    (['Onyx|Domino|Sugar|Fiona|Alex',
        'Retake Domino Alex',
        'Trouble Sugar',
        'Retake Onyx Sugar',
        'Rage Domino',
        'Miracle',
        'Finish'])
)