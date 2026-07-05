const password = document.getElementById("password");
const slider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.querySelector(".generate");

// Update slider value
slider.addEventListener("input", () => {
    lengthValue.textContent = slider.value;
});

// Generate Password
generateBtn.addEventListener("click", generatePassword);

function generatePassword() {

    let chars = "";

    if (uppercase.checked)
        chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (lowercase.checked)
        chars += "abcdefghijklmnopqrstuvwxyz";

    if (numbers.checked)
        chars += "0123456789";

    if (symbols.checked)
        chars += "!@#$%^&*()_+-={}[]<>?/";

    if (chars === "") {
        alert("Please select at least one option.");
        return;
    }

    let pass = "";

    for (let i = 0; i < slider.value; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        pass += chars[randomIndex];
    }

    password.value = pass;
}

// Generate one password automatically when page loads
generatePassword();
