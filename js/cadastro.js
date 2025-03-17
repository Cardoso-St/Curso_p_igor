document.getElementById("senha2").addEventListener("input", function() {
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const botaoCadastrar = document.getElementById("cadastrar");
    
    if (senha1 === senha2 && senha1 !== "") {
        botaoCadastrar.disabled = false;
    } else {
        botaoCadastrar.disabled = true;
    }
});

document.getElementById("cadastrar").addEventListener("click", function() {
    window.location.href = "dashboard.html";
});