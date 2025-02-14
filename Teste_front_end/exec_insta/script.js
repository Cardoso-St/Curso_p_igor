document.getElementById("botao").addEventListener("click",
    function () {
        const telefone = document.getElementById("telefone");
        const senha = document.getElementById("senha");
        const nome = document.getElementById("nome");
        const nomeUtilizador = document.getElementById("nomeUtilizador");

        const telefoneValue = telefone.value;
        const senhaValue = senha.value;
        const nomeValue = nome.value;
        const nomeUtilizadorValue = nomeUtilizador.value;

        if (telefoneValue === "") {
            telefone.classList.add("erro")
            return

        } else {
            telefone.classList.remove("erro")
        }

        if (senhaValue === "") {
            senha.classList.add("erro")
            return

        } else {
            senha.classList.remove("erro")
        }

        if (nomeValue === "") {
            nome.classList.add("erro")
            return

        } else {
            nome.classList.remove("erro")
        }

        if (nomeUtilizadorValue === "") {
            nomeUtilizador.classList.add("erro")
            return

        } else {
            nomeUtilizador.classList.remove("erro")
        }

        window.location.href = "Boas.html"
    })