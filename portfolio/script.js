const year = document.getElementById("year");
const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

if (year) {
    year.textContent = new Date().getFullYear();
}

// Spacebar scrolls to next section
const sections = Array.from(document.querySelectorAll("section, footer"));
document.addEventListener("keydown", function (e) {
    if (e.code === "Space" && e.target === document.body) {
        e.preventDefault();
        const scrollY = window.scrollY + window.innerHeight / 2;
        const next = sections.find(s => s.getBoundingClientRect().top + window.scrollY > scrollY + 10);
        if (next) {
            next.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    }
});

if (leadForm) {
    leadForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!name || !emailPattern.test(email)) {
            formMessage.textContent = "Please enter a valid name and email.";
            return;
        }

        formMessage.textContent = "Thanks! I will reach out shortly with my resume and project links.";
        leadForm.reset();
    });
}
