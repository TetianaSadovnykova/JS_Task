// Task#2
let name = prompt("Please, enter your name", "");
console.log(name + " logged in!");


// Task#3
const a = prompt("Please, enter the first text value", "");
const b = prompt("Please, enter the second text value", "");

const numA = parseFloat(a);
const numB = parseFloat(b);

if (!isNaN(numA) && !isNaN(numB)) {
  alert(numA + numB);
}
else {
  alert(a + b);
}

// Task#4
name = prompt("Please, enter your name", "");
const date = prompt("Please, enter your date of birth", "");
alert("Name: "+ name + "\nDate of birth: "+ date);



