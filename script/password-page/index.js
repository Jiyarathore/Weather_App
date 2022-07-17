//showing password page on clicking frontpage
const passwordpage= document.getElementById('password-page');

passwordpage.addEventListener('click',()=>{
    let password=document.getElementById('password');
    let lockScreen=document.getElementById('lock-screen');
    passwordpage.classList.add("zoom-in");
    lockScreen.classList.add("blur-effect");
    password.classList.add("show");

    // let clock=document.getElementById('clock-lock');
    // let DateDay=document.getElementById("DateDay");
    // console.log("password",password);
    // password.classList.add('show');
    // clock.classList.add('hide');
    // DateDay.classList.add('hide');


})