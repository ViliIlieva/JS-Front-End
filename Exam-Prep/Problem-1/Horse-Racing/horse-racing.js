function solve(input) {
    let horse = [...input.shift().split('|')];

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
        let overtakingIndex = horse.indexOf(overtakingHorse);
        let overtakenIndex = horse.indexOf(overtakenHorse);
        if(overtakingIndex < overtakenIndex){
            [overtakingHorse[overtakingIndex], overtakenHorse[overtakenIndex]] =
                [overtakingHorse[overtakenIndex], overtakenHorse[overtakingIndex]];
            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`)
        }

    }

    function dropByOnePosition(horseName) {
        let index = horse.indexOf(horseName);
        if (index !== 0) {//значи не е на последна позиция
            horse.splice(index, 1);
            index = index - 1;
            horse.splice(index, 0, horseName);
            console.log(`Trouble for ${horseName} - drops one position.`);
        }
    }

    function ragesTwoPosition(horseName) {

    }

    function lastBecomesFirst() {

    }

}

solve(
    (['Onyx|Domino|Sugar|Fiona',
        'Trouble Onyx',
        'Retake Onyx Sugar',
        'Rage Domino',
        'Miracle',
        'Finish'])
)