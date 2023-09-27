const colorInput = document.getElementById("color-input");
const changeColorButton = document.getElementById("change-color-button");
const bodyColorInput = document.getElementById("body-color-input");
const changeBodyColorButton = document.getElementById("change-body-color-button");
const container = document.querySelector(".container");

changeColorButton.addEventListener("click", () => {
    const color = colorInput.value;
    container.style.backgroundColor = color;
});

changeBodyColorButton.addEventListener("click", () => {
    const bodyColor = bodyColorInput.value;
    document.body.style.backgroundColor = bodyColor;
});
