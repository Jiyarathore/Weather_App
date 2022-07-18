//showing password page on clicking frontpage
const passwordpage= document.getElementById('password-page');

passwordpage.addEventListener('click',()=>{
    let password=document.getElementById('password');
    let lockScreen=document.getElementById('lock-screen');
    passwordpage.classList.add("zoom-in");
    lockScreen.classList.add("blur-effect");
    password.classList.add("show");

})