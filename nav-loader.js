document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("nav-placeholder");
    if (!placeholder) return;

    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            placeholder.innerHTML = data;
            
            // Highlight the active page
            const currentPage = window.location.pathname.split("/").pop() || "index.html";
            const links = document.querySelectorAll(".nav-link, .b-link");
            links.forEach(link => {
                if (link.getAttribute("href") === currentPage) {
                    link.classList.add("active-link");
                }
            });
        })
        .catch(err => console.error("Could not load navigation:", err));
});