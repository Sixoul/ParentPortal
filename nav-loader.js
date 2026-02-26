document.addEventListener("DOMContentLoaded", function() {
    const placeholder = document.getElementById("nav-placeholder");
    
    if (placeholder) {
        fetch("nav.html")
            .then(response => {
                if (!response.ok) throw new Error("Failed to load nav.html");
                return response.text();
            })
            .then(data => {
                placeholder.innerHTML = data;
                highlightActivePage();
            })
            .catch(err => {
                console.error("Navbar Error:", err);
                placeholder.innerHTML = `<p style="color:red; padding:20px;">
                    Error loading navbar. If testing locally, please use VS Code 'Live Server'.
                </p>`;
            });
    }
});

function highlightActivePage() {
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll(".nav-link, .b-link").forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active-link");
        }
    });
}