
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
    const submitButton = document.getElementById("submit-button");

    // General validation function for any input field
    function validate(input, errorElement, minLength, errorMessage) {
        if (input.value.trim().length < minLength) {
            errorElement.textContent = errorMessage;
            return false;
        } else {
            errorElement.textContent = "";
            return true;
        }
    }

    // Email validation function
    function validateEmail() {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const emailError = document.getElementById("email-error");
        if (!emailPattern.test(emailInput.value.trim())) {
            emailError.textContent = "Enter a valid email.";
            return false;
        } else {
            emailError.textContent = "";
            return true;
        }
    }

    // Function to check the validity of the form and enable/disable the submit button
    function checkFormValidity() {
        const isFormValid = validate(nameInput, document.getElementById("name-error"), 3, "At least 3 characters.") &&
                             validateEmail() &&
                             validate(messageInput, document.getElementById("message-error"), 20, "At least 20 characters.");
                             
        submitButton.disabled = !isFormValid;
    }

    // Event listener for input changes to validate the form in real-time
    form.addEventListener("input", checkFormValidity);

    // Form submission handler
    form.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent form from submitting normally
        if (!submitButton.disabled) {
            alert("Form submitted successfully!");
            form.reset(); // Reset form fields
            checkFormValidity(); // Recheck form validity
        }
    });

    // Initial check to ensure the form is valid when the page is loaded
    checkFormValidity();
});


document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.querySelector(".navbar");

    menuIcon.addEventListener("click", function () {
        navbar.classList.toggle("active");
    });
});
