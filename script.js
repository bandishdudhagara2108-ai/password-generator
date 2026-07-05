const slider = document.getElementById("length");
const lengthValue = document.getElementById("lengthValue");

slider.addEventListener("input", () => {
    lengthValue.textContent = slider.value;
});
