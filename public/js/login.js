
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "a" && password === "a") {
        alert("You have successfully logged in.");
        window.location.href="index";
    } else {
        alert("Incorrect credentials");
    }
})