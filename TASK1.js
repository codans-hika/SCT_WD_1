const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const sosBtn = document.getElementById("sosBtn");
const message = document.getElementById("message");

sosBtn.addEventListener("click", () => {
    message.innerHTML =
        "🚨 Emergency Alert Sent Successfully!";
});

/* Close menu after clicking */

document.querySelectorAll(".nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
    });
});
