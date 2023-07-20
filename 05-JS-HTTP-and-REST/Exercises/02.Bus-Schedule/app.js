function solve() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';
    let stopID = 'depot';
    let nameStop = '';

    let info = document.querySelector('.info');
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

    function depart() {
        fetch(`${BASE_URL}${stopID}`)
            .then(res => res.json())
            .then((busStop) => {
                let {name, next} = busStop
                nameStop = name;
                info.textContent = `Next stop ${name}`;
                stopID = next;
                departBtn.disabled = true;
                arriveBtn.disabled = false;
            })
            .catch(err => {
                console.log(err);
            })
    }

    async function arrive() {
        info.textContent = `Arriving at ${nameStop}`;
        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();