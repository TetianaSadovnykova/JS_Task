/*let number;
do {
    number = +prompt("Please, enter the number");
}
while (isNaN(number));

for (let i = 1; i <= number; i++) {
    if (i % 3 == 0 && i % 5 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else console.log(i);
    }
*/
do {
    number = +prompt("Please, enter the number");
}
while (isNaN(number));

const arr = [];  // Array is created with numbers 1, 2, 3 .... entered number.
for (let i = 0; i < number; i++)
    arr[i] = i + 1;

// Each third, fifth and fifteenth element of the array is changed to proper name
for (let i = 2; i < number; i+=3)
    arr[i] = "Fizz";

for (let i = 4; i < number; i+=5)
    arr[i] = "Buzz";

for (let i = 14; i < number; i+=15)
    arr[i] = "FizzBuzz";

console.log(arr);
