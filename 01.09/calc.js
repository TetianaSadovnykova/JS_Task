const a = +prompt("Please, enter the first number", "");
const b = +prompt("Please, enter the second namber", "");

(isNaN(a) || isNaN(b)) && console.log("I need only numbers");

console.log(a + " + " + b + " = " + (a + b));
console.log(a + " - " + b + " = " + (a - b));
console.log(a + " * " + b + " = " + (a * b));
console.log(a + " / " + b + " = " + (a / b));
console.log(a + " % " + b + " = " + (a % b));
console.log(a + " ** " + b + " = " + (a ** b));

a > b && console.log(a + " > " + b);
a < b && console.log(a + " < " + b);
a == b && console.log(a + " = " + b);
a != b && console.log(a + " != " + b);

a > b ? console.log(a + " is greater than " + b) : console.log(b + " is greater or equal to " + a);
