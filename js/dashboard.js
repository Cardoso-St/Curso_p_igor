document.getElementById("add-user").addEventListener("click", function() {
    window.location.href = "cadastro.html";
});

document.getElementById("search").addEventListener("input", function() {
    const searchValue = this.value.toLowerCase();
    const rows = document.querySelectorAll("#user-list tr");
    
    rows.forEach(row => {
        const name = row.cells[0].textContent.toLowerCase();
        const email = row.cells[1].textContent.toLowerCase();
        if (name.includes(searchValue) || email.includes(searchValue)) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
});