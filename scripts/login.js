

const loginForm = document.querySelector('#login-form');

//handle form submit
loginForm.addEventListener('submit', function (event) {
    event.preventDefault();
    //collect form data
    const loginData = new FormData(loginForm);
    console.log(
        loginData.get('username'),
        loginData.get('password')

    );
});