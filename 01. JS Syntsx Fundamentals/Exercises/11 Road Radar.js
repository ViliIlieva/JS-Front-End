function solve(speed, area){
    let speedLimit = 0;
    let overSpeed = 0;
    switch (area){
        case 'motorway':
            speedLimit = 130;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else {
                overSpeed = speed - speedLimit;
                if(overSpeed <= 20){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }else if (overSpeed <= 40){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
        case 'interstate':
            speedLimit = 90;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else {
                overSpeed = speed - speedLimit;
                if(overSpeed <= 20){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }else if (overSpeed <= 40){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
        case 'city':
            speedLimit = 50;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else {
                overSpeed = speed - speedLimit;
                if(overSpeed <= 20){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }else if (overSpeed <= 40){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
        case 'residential':
            speedLimit = 20;
            if(speed <= speedLimit){
                console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
            }else {
                overSpeed = speed - speedLimit;
                if(overSpeed <= 20){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - speeding`);
                }else if (overSpeed <= 40){
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - excessive speeding`);
                }else {
                    console.log(`The speed is ${overSpeed} km/h faster than the allowed speed of ${speedLimit} - reckless driving`);
                }
            }
            break;
    }
}

solve(40, 'city');
solve(21, 'residential');
solve(120, 'interstate');