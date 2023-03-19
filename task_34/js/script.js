const enter = document.getElementById("form__enter-text");
const square = document.getElementById("form__square");

enter.addEventListener("focus", () => {
    square.toggleAttribute("hidden");
});

enter.addEventListener("blur", () => {
    square.toggleAttribute("hidden");
});