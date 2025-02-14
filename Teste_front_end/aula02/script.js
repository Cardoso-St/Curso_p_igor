document.getElementById("adicionarTarefa").addEventListener("click", function () {


    //seleciona o input e depois pega seu valor
    const inputTarefa = document.querySelector("#tarefa")
    const tarefa = inputTarefa.Value.trim();

    // Seleciona UL
    const ListaTarefas = document.querySelector("listaTarefas")

    // Cria LI e adiciona  tarefa dentro dela
    const li = document.createElement("li");
    li.textContent = textTarefa;

    ListaTarefas.appendChild
    console.log(textTarefa)

    // Limpa o campo de input
    inputTarefa = "";
})

document.getElementById("#limpar")

function limparTarefas(){
    const listaTarefas = document.querySelector("#listaTarefas")listaTarefas.innerHTML = ""
}