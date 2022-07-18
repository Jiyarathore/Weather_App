//if password is correct then we will redirect to main page
const name = document.getElementById('name');
let validUser = false;

const mainpage = () => {
    //validate password here
    let regex = /^1234$/;
    let str = name.value;
    if (regex.test(str)) {
        name.classList.remove('is-invalid');
        validUser = true;
        let content = document.getElementById('content');
        let overflowHidden = document.getElementById('overflow-hidden');
        
        content.classList.add('show-content');
        overflowHidden.classList.add('hide');
    }
    else {
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
    if (e.keyCode === 13) {
        mainpage();
    }
})

