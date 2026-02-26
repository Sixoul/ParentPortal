// nav-loader.js
document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
            highlightActivePage();
        });
});

function highlightActivePage() {
    // This logic finds which page you are on and colors the link Ninja Red
    const currentPage = window.location.pathname.split("/").pop();
    const links = document.querySelectorAll(".nav-link, .b-link");
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.style.color = "var(--ninja-red)";
            link.style.fontWeight = "bold";
        }
    });
}