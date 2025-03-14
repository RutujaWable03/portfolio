
document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
    }

    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-mode");

        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const submitButton = form.querySelector(".btn");

    function validate(input, errorElement, minLength, errorMessage) {
        if (input.value.trim().length < minLength) {
            errorElement.textContent = errorMessage;
            return false;
        }
        errorElement.textContent = "";
        return true;
    }

    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validate(emailInput, document.getElementById("email-error"), 1, "Enter a valid email.") &&
               emailPattern.test(emailInput.value.trim());
    }

    function checkFormValidity() {
        submitButton.disabled = !(validate(nameInput, document.getElementById("name-error"), 3, "At least 3 characters.") &&
                                  validateEmail() &&
                                  validate(messageInput, document.getElementById("message-error"), 20, "At least 20 characters."));
    }

    form.addEventListener("input", checkFormValidity);

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        if (!submitButton.disabled) {
            alert("Form submitted successfully!");
            form.reset();
            checkFormValidity();
        }
    });

    checkFormValidity();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
