// Register the user and log them in automatically
document.querySelector('#registerBtn').addEventListener("click", async function () {
    event.preventDefault();

    const name = document.querySelector('#userName').value.trim();
    const email = document.querySelector('#userEmail').value.trim();
    const password = document.querySelector('#userPassword').value.trim();

    if (name && email && password) {
        const response = await fetch('/api/users/register', {
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
});

// Handles user login
document.querySelector('#loginBtn').addEventListener("click", async function () {
    event.preventDefault();
    
    const email = document.querySelector('#loginEmail').value.trim();
    const password = document.querySelector('#loginPassword').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
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
});