//Login User
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("loginUsername").value;
    let password = document.getElementById("loginPassword").value;
    let message = document.getElementById("message");

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(user => user.username === username && user.password === password);

    if (validUser) {
        message.style.color = "green";
        message.textContent = "Login successfull";
    }else {
        message.style.color = "red";
        message.textContent = "Invalid username or password!";
    }
    document.getElementById("loginForm").reset();
});

//Register User
document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("regUsername").value;
    let password = document.getElementById("regPassword").value;

    if(username === "" || password === "") {
        alert("All fields are requires!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let userExits = users.some(user => user.username === username);
    if (userExits) {
        alert("Usename already taken!");
        return;
    }
    users.push({username,password});
    localStorage.setItem("users",JSON.stringify(users));

    alert("Registration successfull you can now log in.");
    document.getElementById("registerForm").reset();
});

    