console.log("this is clock");

function updateClock() {
    //get current date
    let currentTime = new Date();

    //extract hr,mins,secs from date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let day=currentTime.getDay();
    let weatherCard = document.getElementById("weatherCard");

    //pad 0 if minute or secind is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    //ye eseliye kiya taki 12:8:7 === 12:08:07 ho jayee

    let timeOfDay = (currentHour < 12) ? "AM" : "PM";

    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;

    document.getElementById("clock").innerHTML = currentTimeStr;
}

const apiKey = `5d15d09cacaa8f2ffa788844e90bea81`;

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

// function unixToDate()  {
//     const unixTime = string;
//     const date = new Date(unixTime * 1000);
//     const newText = date.toLocaleDateString("en-US");
    
//     return newText
//   }

function showWeatherData(data){

    function unixToDate()  {
        const unixTime = data.dt;
        const date = new Date(unixTime * 1000);
        const newText = date.toLocaleDateString("en-US");
        
        return newText
      }

      unixToDate();
 let DayForcast=''
 data.daily.forEach((day,index)=>{
     if(index==0){

     }
     else{
        DayForcast+=`<div class="card" id="weatherCard">
        <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="...">
           <div class="card-body">
               <h2 class="temp">${day.temp.day} C</h2>
               <h6 class="day">unixToDate${(day.dt)}.getDay()</h6>
           </div>
        </div> `
    }
    // <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
 })

 weatherCard.innerHTML=DayForcast;
}
/* <div class="card" id="weatherCard">
<img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="...">
   <div class="card-body">
       <h2 class="temp">${day.temp.day} C</h2>
       <h6 class="day">unixToDate${(day.dt)}.getDay()</h6>
   </div>
</div> */

{/* <div class="card1" id="weatherCard" style="width:20rem; text-align:center; display:inline-block">
        <div class="temp">${day.temp.day} C</div>
        <img src="http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="...">
        <div class="day">unixToDate${(day.dt)}.getDay()</div>
        </div> */}

