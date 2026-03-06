// console.log("Connecting!!!!!");

document.getElementById("login-btn").addEventListener('click', () => {

    const inputUserName = document.getElementById('input-user-name');
    const userName = inputUserName.value;
    console.log(userName);

    const inputPassword = document.getElementById('input-password');
    const password= inputPassword.value;
    console.log(password);

    if (userName === "admin" && password === "admin123") {
        alert("login success");

        window.location.assign("home.html");
    }
    else {
        alert("login failed");

        inputPassword.value = '';
        inputPassword.focus();
    }

})