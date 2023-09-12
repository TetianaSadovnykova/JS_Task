let number;
do {
    number = +prompt("Please, enter the number");
}
while (isNaN(number));

for (let i = 2; i <= number; i++) {
    let prime = true;

    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            prime = false;
            break;
        }
    }
    prime && console.log(i);
}
