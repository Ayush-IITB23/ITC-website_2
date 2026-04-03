// Contact Form Submit Message
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const msg = document.getElementById("formMessage");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            msg.innerText = "Your message has been sent!";
            msg.style.color = "green";
            form.reset();
        });
    }
});