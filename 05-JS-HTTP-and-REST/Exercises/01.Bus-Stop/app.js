function getInfo() {
    const BASE_URL = 'http://localhost:3030/jsonstore/bus/businfo/';
    const idBus = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const busesContainer = document.getElementById('buses');

    busesContainer.innerHTML = '';
    fetch(`${BASE_URL}${idBus}`)
        .then((res) => res.json())
        .then((busInfo) =>{
            const {buses, name} = busInfo;
            stopName.textContent = name;

            for (const key in buses) {
                const li = document.createElement('li');
                li.textContent = `Bus ${key} arrive in ${buses[key]} minutes`;
                busesContainer.appendChild(li);
            }
        })
        .catch((err) =>{
            stopName.textContent = 'Error';
        })
}