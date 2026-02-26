document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("nav-placeholder").innerHTML = data;
            // Highlight active link
            const currentPage = window.location.pathname.split("/").pop();
            document.querySelectorAll('.nav-link, .b-link').forEach(link => {
                if(link.getAttribute('href') === currentPage) link.style.color = "var(--ninja-red)";
            });
        });
});