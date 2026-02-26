function checkAuth() {
    const session = JSON.parse(localStorage.getItem("ninjaSession"));
    if (!window.location.pathname.includes("index.html") && (!session || !session.isLoggedIn)) {
        window.location.href = "index.html";
    }
    return session;
}

const currentUser = checkAuth();

function logout() {
    localStorage.removeItem("ninjaSession");
    window.location.href = "index.html";
}