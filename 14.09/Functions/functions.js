// Task#1
function ageAnalysis(age) {
    if (age < 18)
        return "You are an underaged";
    else
        return "You are an adult";
}

// Example#1
const yourAge = +prompt("Please, enter your age");
alert(ageAnalysis(yourAge));

// Task#2
function hello(name, age) {
    return `Hello, ${name}! You are ${age} years old.`;
}

// Example#2
const yourName = prompt("Please, enter your name");
alert(hello(yourName, yourAge));

// Task#3
function rectangleArea(width, height) {
    return width * height;
}

// Example#3
const width = +prompt("Please, enter rectangle width");
const height = +prompt("Please, enter rectangle height");
const area = rectangleArea(width, height);
alert(`The area of the rectangle is ${area} square smth`);

//Task#4
function add(x) {
    return function(y) {
        return x + y;
    }
}

//Example#4
const number1 = +prompt("Please, enter x");
const number2 = +prompt("Please, enter y");
const addX = add(number1);
const result4 = addX(number2);
alert(number1 + "+" + number2 + "=" + result4);

//Task#5
function calcSumAvr(arr) {
    const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    const avr = sum / arr.length;
    return {sum, avr};
}

// Example#5
const myArray = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];
const result5 = calcSumAvr(myArray);
console.log(`Sum is: ${result5.sum}`);
console.log(`Average is: ${result5.avr}`);

//Task#6
function divXY(x, y) {
    try {
        if (y == 0)
            throw new Error("Attention!!! Division by zero!");
        const result6 = x / y;
        return result6;
    }
    catch (error) {
        console.error(error.message);
    }
}

// Example#6
const num1 = 25;
const num2 = 0;
const result6 = divXY(num1, num2);
if (result6 !== undefined)
    console.log(`${num1} / ${num2} = ${result6}`);

