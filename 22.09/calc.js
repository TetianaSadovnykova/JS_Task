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
        currentInput = calculate(prevInput, currentInput, operator);
        updateScreen(currentInput);
        prevInput = currentInput;
        currentInput = "";
    }
    operator = op;
});

$("#equals").on("click", function () {
    operator = "";
    }
);

$("#clear").on("click", function () {
    currentInput = "";
    prevInput = "";
    operator = "";
    updateScreen("0");
});

$("#clearEntry").on("click", function () {
    currentInput = "";
    updateScreen(prevInput);
});

$("#backspace").on("click", function () {
    currentInput = currentInput.slice(0, -1);
    if (currentInput == "")
        updateScreen("0");
    else
        updateScreen(currentInput);
});

$("#decimal").on("click", function () {
    const digit = $(this).text();
    if (!currentInput.includes(".")) {
        currentInput += ".";
        updateScreen(currentInput);
    }
});

$("#percentage").on("click", function () {
    currentInput = +(currentInput * prevInput / 100);
    updateScreen(currentInput);
});

$("#back").on("click", function () {
    if (currentInput !== "0") {
        currentInput = (1 / +(currentInput));
        updateScreen(currentInput);
    } else {
        currentInput = "Error: div by 0";
        updateScreen(currentInput);
    }
});

$("#square").on("click", function () {
    currentInput *= currentInput;
    updateScreen(currentInput);
});

$("#squareRoot").on("click", function () {
    if ((currentInput) >= 0) {
        currentInput = (Math.sqrt(currentInput));
        updateScreen(currentInput);
    } else {
        currentInput = "Error: root";
        updateScreen(currentInput);
    }
});

$("#negate").on("click", function () {
    if (currentInput !== "0") {
        currentInput = -(parseFloat(currentInput));
        updateScreen(currentInput);
    }
});

function calculate(num1, num2, op) {
    num1 = +(num1);
    num2 = +(num2);
    let result;

    switch (op) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "×":
            result = num1 * num2;
            break;
        case "÷":
            if (num2 == 0) {
                return "Error: div by 0";
            }
            result = num1 / num2;
            break;
        default:
            result = num2;
    }

    return result;
}

function updateScreen(text) {
    const max = 99999999999999;

    if (+text > max) {
        output.text("Error: digits limit");
    }
    else {
        output.text(text);
    }
}



