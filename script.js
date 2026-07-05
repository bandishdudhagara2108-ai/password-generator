const password = document.getElementById("password");
const slider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");

const generateBtn = document.querySelector(".generate");
const copyBtn = document.getElementById("copyBtn");

// Update slider
slider.addEventListener("input", () => {
    lengthValue.textContent = slider.value;
});

// Generate password
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

// Copy Password
copyBtn.addEventListener("click", () => {

    if(password.value === "") return;

    navigator.clipboard.writeText(password.value);

    copyBtn.innerHTML = "✅";

    setTimeout(() => {
        copyBtn.innerHTML = "📋";
    }, 1500);

});

// Generate on page load
generatePassword();
