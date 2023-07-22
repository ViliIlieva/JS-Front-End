function attachEvents() {
    const BASE_URL = 'http://localhost:3030/jsonstore/forecaster/locations';
    const TODAY_INFO_URL = 'http://localhost:3030/jsonstore/forecaster/today/';
    const UPCOMING_INFO_URL = 'http://localhost:3030/jsonstore/forecaster/upcoming/';

    document.getElementById('submit').addEventListener('click', getWeather);
    const locationInput = document.getElementById('location');

    const forecast = document.getElementById('forecast');
    const current = document.getElementById('current');
    const upcoming = document.getElementById('upcoming');
    const currentLabel = document.querySelector('#current > .label');
    const upcomingLabel = document.querySelector('#upcoming > .label');

    function getWeather() {
        let locationValue = locationInput.value;
        let contentName = '';
        let codeLocation = '';

        fetch(BASE_URL)
            .then(res => res.json())
            .then((location) => {
                for (const {code, name} of location) {
                    if (name === locationValue) {
                        contentName = name;
                        codeLocation = code;
                    }
                }
            })
            .then(() => {
                if (contentName !== '') {
                    forecast.style.display = "block";

                    fetch(`${TODAY_INFO_URL}${codeLocation}`)
                        .then(res => res.json())
                        .then((todayInfo) => {
                            let {forecast, name} = todayInfo;
                            let {condition, high, low} = forecast;
                            let symbol = setSymbol(condition);

                            current.innerHTML = `
                            <div class="label">Current conditions</div>
                            <div class="forecasts">
                                <span class="condition symbol">${symbol}</span>
                                <span class="condition">
                                    <span class="forecast-data">${name}</span>
                                    <span class="forecast-data">${low}\xB0/${high}\xB0</span>
                                    <span class="forecast-data">${condition}</span>
                                </span>
                            </div>`;
                        })

                    fetch(`${UPCOMING_INFO_URL}${codeLocation}`)
                        .then(res => res.json())
                        .then((upcomingDays) => {
                            let upcomingDayInfoDay = Object.values(upcomingDays['forecast']);
                            let forecastDiv = document.createElement('span');
                            forecastDiv.classList.add("forecast_info");

                            for (const threeDayElement of upcomingDayInfoDay) {
                                let{low, high, condition} = threeDayElement;
                                let symbol = setSymbol(condition);
                                let upcomingSpan = document.createElement('span');
                                upcomingSpan.classList.add("upcoming");
                                upcomingSpan.innerHTML = `
                                        <span class="symbol">${symbol}</span>
                                        <span class="forecast-data">${low}\xB0/${high}\xB0</span>
                                        <span class="forecast-data">${condition}</span>`;
                                forecastDiv.appendChild(upcomingSpan);
                            }
                            upcoming.appendChild(forecastDiv);
                        })
                } else {
                    forecast.style.display = "block";
                    currentLabel.textContent = 'Error';
                    upcomingLabel.textContent = 'Error';
                }
            })
            .catch(err => {
                console.log(err.message);
            })
    }
     function setSymbol(condition){
        let symbol = '';
         switch (condition) {
             case "Sunny":
                 symbol = '&#x2600';
                 break;
             case "Partly sunny":
                 symbol = '&#x26C5';
                 break;
             case "Overcast":
                 symbol = '&#x2601';
                 break;
             case "Rain":
                 symbol = '&#x2614';
                 break;
         }
         return symbol;
     }
}

attachEvents();