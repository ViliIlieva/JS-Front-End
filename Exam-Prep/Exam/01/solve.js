function solve(input){
        const n = input.shift();
        let riders = {};
        for (let i = 0; i < n; i++) {
                let [rider, capacity, position] = input.shift().split('|');
                riders[rider] = {capacity, position};
        }

        let commandParser = {
                'StopForFuel': stopForFuel,
                'Overtaking': overtaking,
                'EngineFail': engineFail,
        }

        for (const line of input) {
                if(line === 'Finish'){
                        break;
                }
                let command = line.split(' - ')[0];

                commandParser[command](...line.split(' - ').slice(1));
        }

        function stopForFuel(rider, minFuel, newPosition){
                if(Number(riders[rider].capacity) < Number(minFuel)){
                        riders[rider].position = newPosition;
                        riders[rider].capacity = 100;
                        console.log(`${rider} stopped to refuel but lost his position, now he is ${newPosition}.`)
                }else {
                        console.log(`${rider} does not need to stop for fuel!`)
                }
        }

        function overtaking(rider1, rider2){
                let rider1Position = riders[rider1].position;
                let rider2Position = riders[rider2].position;
                if(rider1Position < rider2Position){
                        riders[rider1].position = rider2Position;
                        riders[rider2].position = rider1Position;
                        console.log(`${rider1} overtook ${rider2}!`)
                }
        }

        function engineFail(rider, lapsLeft){
                delete riders[rider];
                console.log(`${rider} is out of the race because of a technical issue, ${lapsLeft} laps before the finish.`)
        }

        for (const key in riders) {
                let{capacity, position} = riders[key];
                console.log(key);
                console.log(`  Final position: ${position}`)
        }
}

solve(
    (["3",
            "Valentino Rossi|100|1",
            "Marc Marquez|90|2",
            "Jorge Lorenzo|80|3",
            "StopForFuel - Valentino Rossi - 50 - 1",
            "Overtaking - Marc Marquez - Jorge Lorenzo",
            "EngineFail - Marc Marquez - 10",
            "Finish"])
)