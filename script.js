const form = document.getElementById("contactForm");

if (form) {
    form.addEventListener("submit", function(event) {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            event.preventDefault();
        }
    });
}

const faqButtons = document.querySelectorAll(".faq-btn");

faqButtons.forEach(button => {
    button.addEventListener("click", function() {

        const answer = this.nextElementSibling;

        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    });
});

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
    darkModeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}
