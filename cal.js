document.addEventListener("DOMContentLoaded", function () {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    let currentInput = "";

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            
            if (buttonText === "C") {
                currentInput = "";
            } else if (buttonText === "=") {
                try {
                    currentInput = eval(currentInput).toString();
                } catch (error) {
                    currentInput = "Error";
                }
            } else {
                currentInput += buttonText;
            }
            
            display.value = currentInput;
        });
    });
});




