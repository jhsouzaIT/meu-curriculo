document.addEventListener("DOMContentLoaded", function() {
    const profilePic = document.querySelector(".profile-pic");
    profilePic.addEventListener("click", function() {
        alert("João Henrique Silva Souza - Desenvolvedor e Eletricista");
    });

    // Efeito de rolagem suave para os links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
});
