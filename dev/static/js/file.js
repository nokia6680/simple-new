var fileInput = document.querySelector(".order-form__file");
var button = document.querySelector(".order-form__upload");

button.addEventListener("keydown", function(event) {
    if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
    }
});

button.addEventListener("click", function(event) {
    fileInput.focus();
    return false;
});

fileInput.addEventListener("change", function(event) {
    button.innerText = this.value;
});
