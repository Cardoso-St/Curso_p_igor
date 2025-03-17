document.getElementById("logar").addEventListener("click", function() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    
    if (email === "admin@email.com" && senha === "123456") {
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("login-error").style.display = "block";
    }
});