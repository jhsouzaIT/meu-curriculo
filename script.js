document.addEventListener("DOMContentLoaded", function() {
    const menuLinks = document.querySelectorAll("nav ul li a");
    const pages = ["index.html", "about.html", "resume.html", "contact.html"];
    
    menuLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetPage = this.getAttribute("href");
            
            if (pages.includes(targetPage)) {
                document.body.style.transition = "opacity 0.3s ease-in-out";
                document.body.style.opacity = 0;
                setTimeout(() => {
                    window.location.href = targetPage;
                }, 300);
            }
        });
    });
});
