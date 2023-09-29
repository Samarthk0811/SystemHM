const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  navbar.classList.toggle("show");
});

const header = document.querySelector(".header");
const scrollLink = document.querySelectorAll(".navbar a:not(:last-child)");



// For the Form Validation    
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        // Prevent the default form submission behavior
        event.preventDefault();

        // Get the input values
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const contactno = document.getElementById("contactno").value.trim();
        const msgContent = document.getElementById("msgContent").value.trim();

        // Simple validation example: Check if name and email are not empty
        if (name === "") {
            alert("Name cannot be empty");
            return;
        }

        if (email === "") {
            alert("Email cannot be empty");
            return;
        }

        // Check if email contains the "@" symbol
        if (!email.includes("@")) {
            alert("Email must contain the '@' symbol");
            return;
        }

        // Check if contactno contains only numbers
        if (!/^\d+$/.test(contactno)) {
            alert("Contact No must contain only numbers");
            return;
        }
    });


