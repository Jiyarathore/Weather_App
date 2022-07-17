console.log("this is clock");

//weather caards





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


