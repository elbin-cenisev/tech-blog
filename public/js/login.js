async function login(button) {
    event.preventDefault();

    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/user/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert("Email or Password is incorrect.");
        }
    }
    else {
        alert("You have not entered all necessary information yet.");
    }
}

function showSignUp(button) {
    let signUpForm = document.getElementById("signUpForm");
    let loginForm = document.getElementById("loginForm");
    let signupBtn = document.getElementById("signupBtn");

    if (signUpForm.style.display === "none") {
        signUpForm.style.display = "block";
        loginForm.style.display = "none";
        signupBtn.style.display = "none";
    }
}

async function signUp(button) {
    event.preventDefault();

    const name = document.querySelector('#signUpName').value.trim();
    const email = document.querySelector('#signUpEmail').value.trim();
    const password = document.querySelector('#signUpPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/user/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
    else {
        alert("You have not entered all necessary information yet.");
    }
}

function showLogin(button) {
    let loginForm = document.getElementById("loginForm");
    let signUpForm = document.getElementById("signUpForm");
    let signupBtn = document.getElementById("signupBtn");

    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        signUpForm.style.display = "none";
        signupBtn.style.display = "block";
    }
}