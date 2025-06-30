document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
        let isValid = true;
        let messages = [];

        const fullname = document.getElementById("fullname").value.trim();
        const email = document.getElementById("email").value.trim();
        const dob = document.getElementById("dob").value;
        const country = document.getElementById("country").value;
        const message = document.getElementById("message").value.trim();
        const genderMale = document.getElementById("male").checked;
        const genderFemale = document.getElementById("female").checked;

        if (fullname === "") {
            isValid = false;
            messages.push("Full Name is required.");
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        if (!genderMale && !genderFemale) {
            isValid = false;
            messages.push("Please select a gender.");
        }

        if (dob === "") {
            isValid = false;
            messages.push("Please select your date of birth.");
        }

        if (country === "") {
            isValid = false;
            messages.push("Please choose your country.");
        }

        if (message.length < 10) {
            isValid = false;
            messages.push("Message must be at least 10 characters long.");
        }

        if (!isValid) {
            e.preventDefault();
            alert(messages.join("\n"));
        }
    });
});
