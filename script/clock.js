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

    document.getElementById("clock-lock").innerHTML = currentTimeStr;
    document.getElementById("clock-2").innerHTML = currentTimeStr;
    document.getElementById("DateDay").innerHTML=currentDateStr;
}