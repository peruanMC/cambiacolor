const colorInput = document.getElementById("color-input");
const changeColorButton = document.getElementById("change-color-button");
const container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    const color = colorInput.value;
    container.style.backgroundColor = color;
});
