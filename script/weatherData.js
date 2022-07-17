const apiKey = `5d15d09cacaa8f2ffa788844e90bea81`;

//function to get weather from api
function getWeatherData() {
    navigator.geolocation.getCurrentPosition((success) => {
        console.log(success);

        let { latitude, longitude } = success.coords;
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data)
                showWeatherData(data);

            })
    })
}
getWeatherData();

//function to show weather on cards
function showWeatherData(data) {

    let weatherCard = document.getElementById("weatherCard");
    const unixToDate = (string) => {
        const unixTime = string;
        const date = new Date(unixTime * 1000);
        const newText = date.toLocaleDateString("en-US");

        return (new Date(newText)).getDay()
    };

    const dateToDay = {
        0: "Sun",
        1: "Mon",
        2: "Tue",
        3: "Wed",
        4: "Thru",
        5: "Fri",
        6: "Sat"
    }
    let DayForcast = '';
    data.daily.forEach((day, index) => {
        if (index !== 0) {
            DayForcast += `
                <div class="card" id="weatherCard">
                <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h2 class="temp">${day.temp.day} C</h2>
                        <h6 class="day">${dateToDay[unixToDate(day.dt)]}</h6>
                    </div>
                </div> `
        }

    })

    weatherCard.innerHTML = DayForcast;
}
