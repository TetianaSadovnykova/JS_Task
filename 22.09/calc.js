let currentInput = "";
let operator = "";
let prevInput = "";
const output = $("#output");

$(".number").on("click", function () {
    const digit = $(this).text();
    currentInput += digit;
    updateScreen(currentInput);
});

$(".operator").on("click", function () {
    const op = $(this).text();
    if (currentInput !== "") {
        if (prevInput !== "") {
            currentInput = calculate(prevInput, currentInput, operator);
            updateScreen(currentInput);
        }
        prevInput = currentInput;
        currentInput = "";
    }
    operator = op;
});

$("#equals").on("click", function () {
    if (prevInput !== "" && currentInput !== "") {
        currentInput = calculate(prevInput, currentInput, operator);
        updateScreen(currentInput);
        prevInput = "";
        operator = "";
    }
});

$("#clear").on("click", function () {
    currentInput = "";
    prevInput = "";
    operator = "";
    updateScreen(currentInput);
});

$("#clearEntry").on("click", function () {
    currentInput = "";
    updateScreen(currentInput);
});

$("#backspace").on("click", function () {
    currentInput = currentInput.slice(0, -1);
    updateScreen(currentInput);
});

$("#decimal").on("click", function () {
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateScreen(currentInput);
    }
});

$("#percentage").on("click", function () {
    if (currentInput !== "") {
        currentInput = (+(currentInput) / 100).toString();
        updateScreen(currentInput);
    }
});

$("#back").on("click", function () {
    if (currentInput !== "0") {
        currentInput = (1 / +(currentInput)).toString();
        updateScreen(currentInput);
    } else {
        currentInput = "Error";
        updateScreen(currentInput);
    }
});

$("#square").on("click", function () {
    currentInput = (Math.pow(+(currentInput), 2)).toString();
    updateScreen(currentInput);
});

$("#squareRoot").on("click", function () {
    if (+(currentInput) >= 0) {
        currentInput = (Math.sqrt(+(currentInput))).toString();
        updateScreen(currentInput);
    } else {
        currentInput = "Error";
        updateScreen(currentInput);
    }
});

$("#negate").on("click", function () {
    if (currentInput !== "0") {
        currentInput = (-parseFloat(currentInput)).toString();
        updateScreen(currentInput);
    }
});

function calculate(num1, num2, op) {
    num1 = +(num1);
    num2 = +(num2);
    switch (op) {
        case "+":
            return (num1 + num2).toString();
        case "-":
            return (num1 - num2).toString();
        case "×":
            return (num1 * num2).toString();
        case "÷":
            if (num2 == 0) {
                return "Error";
            }
            return (num1 / num2).toString();
        default:
            return num2.toString();
    }
}

function updateScreen(text) {
    output.text(text);
}