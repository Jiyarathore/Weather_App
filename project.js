console.log("this is clock");


//function for clock
function updateClock() {
    //get current date
    let currentTime = new Date();

    //extract hr,mins,secs from date
    let currentHour = currentTime.getHours();
    let currentMinutes = currentTime.getMinutes();
    let currentSeconds = currentTime.getSeconds();
    let day = currentTime.getDate();
    let month = currentTime.getMonth();

    const dateToMonth = {
        0: "Jan",
        1: "Feb",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7:"Aug",
        8:"Sept",
        9:"Oct",
        10:"Nov",
        11:"Dec"
    }

    //pad 0 if minute or secind is less than 10 (single digit)
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    //ye eseliye kiya taki 12:8:7 === 12:08:07 ho jayee

    let timeOfDay = (currentHour < 12) ? "AM" : "PM";

    currentHour = (currentHour > 12) ? currentHour - 12 : currentHour;
    currentHour = (currentHour == 0) ? 12 : currentHour;

    let currentTimeStr = currentHour + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay ;
    let currentDateStr = day+" "+ dateToMonth[month];

    document.getElementById("clock").innerHTML = currentTimeStr;
    document.getElementById("DateDay").innerHTML=currentDateStr;
}

//weather caards

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
        if (index == 0) {

        }
        else {
            DayForcast += `<div class="card" id="weatherCard">
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

//showing password page on clicking frontpage

const passwordpage= document.getElementById('password-page');
passwordpage.addEventListener('click',()=>{
    console.log("passwordpage is clicked");
    let password=document.getElementById('password');
    let clock=document.getElementById('clock');
    let DateDay=document.getElementById("DateDay");
    console.log("password",password);
    password.classList.add('show');
    clock.classList.add('hide');
    DateDay.classList.add('hide');
})

//if password is correct then we will redirect to main page
const name = document.getElementById('name');
let validUser = false;

const mainpage = () => {
    console.log("name is blurred");
    //validate password here
    let regex = /^1234$/;
    let str = name.value;
    console.log(regex, str);
    if (regex.test(str)) {
        console.log('it matched i.e. name is valid');
        name.classList.remove('is-invalid');
        validUser = true;
        let content = document.getElementById('content');
        let passwordPage = document.getElementById('password');
        // let clock2=document.getElementById('clock');
        console.log("content", content);
        content.classList.add('show');
        passwordPage.classList.add('hide');
        // clock2.classList.add('hide');
    }
    else {
        console.log("no match i.e. name is not valid");
        name.classList.add('is-invalid');
        validUser = false;
    }
}

//by blur we can get main page after correct password
name.addEventListener('blur', () => {
    mainpage();
})

//by pressing enter key we get main page
name.addEventListener('keypress', (e) => {

    if (e.keycode === 13) {
        mainpage();
    }
})
//  const show=()=>{
//     const box2=document.getElementsByClassName("content");
//     box2[0].style.display="none";
//  }

//  const box=document.getElementById("bg-img");
//     box.addEventListener('click',()=>{
//     if(true)
//     {
//         show();
//     }
//  })


// const apiKey = `5d15d09cacaa8f2ffa788844e90bea81`;

// function getWeatherData() {
//     navigator.geolocation.getCurrentPosition((success) => {
//         console.log(success);

//         let { latitude, longitude } = success.coords;
//         fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${apiKey}`)
//             .then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 showWeatherData(data);

//             })
//     })
// }
// getWeatherData();


// function showWeatherData(data) {

//     let weatherCard = document.getElementById("weatherCard");
//     const unixToDate = (string) => {
//         const unixTime = string;
//         const date = new Date(unixTime * 1000);
//         const newText = date.toLocaleDateString("en-US");

//         return (new Date(newText)).getDay()
//     };

//     const dateToDay = {
//         0: "Sun",
//         1: "Mon",
//         2: "Tue",
//         3: "Wed",
//         4: "Thru",
//         5: "Fri",
//         6: "Sat"
//     }
//     let DayForcast = '';
//     data.daily.forEach((day, index) => {
//         if (index == 0) {

//         }
//         else {
//             DayForcast += `<div class="card" id="weatherCard">
//         <img src=" http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png" class="card-img-top" alt="...">
//            <div class="card-body">
//                <h2 class="temp">${day.temp.day} C</h2>
//                <h6 class="day">${dateToDay[unixToDate(day.dt)]}</h6>
//            </div>
//         </div> `
//         }

//     })

//     weatherCard.innerHTML = DayForcast;
// }

// const name= document.getElementById('name');
// let validUser=false;

// name.addEventListener('blur',()=>{
//     console.log("name is blurred");
//     //validate name here
//     let regex=/1234/;
//     let str=name.value;
//     console.log(regex,str);
//     if(regex.test(str)){
//         console.log('it matched i.e. name is valid');
//         name.classList.remove('is-invalid');
//         validUser=true;
//         let content=document.getElementById('content');
//         console.log("content",content);
//         content.classList.add('show');
//     }
//     else{
//         console.log("no match i.e. name is not valid");
//         name.classList.add('is-invalid');
//         validUser=false;
//     }

// })

// let submit= document.getElementById('submit');
// submit.addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log("You clicked on submit");
//     console.log(validUser);
//     //Submit your form here
// if(validUser){
//     console.log('user is valid.');
// }
// })

// let compress=document.getElementById(compress);
// compress.addEventListener('blur',()=>{
//     console.log("compress is blurred");
// })


