const year = document.getElementById("year");
const leadForm = document.getElementById("leadForm");
const formMessage = document.getElementById("formMessage");

if (year) {
    year.textContent = new Date().getFullYear();
}

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
