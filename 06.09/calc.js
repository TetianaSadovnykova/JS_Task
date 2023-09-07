const a = +prompt("Please, enter the first number", "");
const b = +prompt("Please, enter the second number", "");

if (!isNaN(a) && !isNaN(b)) {
    const oper = prompt("Please, enter one of the following operations: +, -, /, * or %", "");
    oper == "+" && alert(a + " + " + b + " = " + (a + b));
    oper == "-" && alert(a + " - " + b + " = " + (a - b));
    oper == "/" && alert(a + " / " + b + " = " + (a / b));
    oper == "*" && alert(a + " * " + b + " = " + (a * b));
    oper == "%" && alert(a + " % " + b + " = " + (a % b));
    if (!(oper == "+" || oper == "-" || oper == "/" || oper == "*" || oper == "%"))
        console.error("Mistake: it should be one of the following operations: +, -, /, * or %");
}

else console.error("Mistake: it should be two numbers");