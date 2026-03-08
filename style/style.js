

// loging sectoin

const userName = document.getElementById("username");
const password = document.getElementById("password");
const loginBtn = document.getElementById("login-btn");

// funtion run for login section
loginBtn.addEventListener("click", function () {
    const usernameValue = userName.value.trim().toLowerCase(); 
    const passwordValue = password.value.trim().toLowerCase(); 


    if (usernameValue === "admin" && passwordValue === "admin1234") {
        /* alert("Login successful!"); */
        window.location.href = "home.html";
    } else {
        alert("Invalid username or password. Please try again.");
    }
})
//  end loging section



// home page js





