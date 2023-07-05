function meetings(input){
    let meetingObj = {};
    for (const line of input) {
        let[day, name] = line.split(" ");

        if(meetingObj.hasOwnProperty(day)){
            console.log(`Conflict on ${day}!`)
        }else {
            meetingObj[day] = name;
            console.log(`Scheduled for ${day}`)
        }
    }

    for (const key in meetingObj) {
        console.log(`${key} -> ${meetingObj[key]}`)
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);