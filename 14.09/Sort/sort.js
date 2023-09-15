const input = prompt("Enter numbers. Please, separate them by spaces");
const arr = input.split(" ").map(Number);

// I decided to use Bubble Sort algorithm
const len = arr.length;
let swap;

do {
    swap = false;
    for (let i = 0; i < len - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            const temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
            swap = true;
        }
    }
}
while (swap);

alert("Here is your sorted array: " + arr.join(", "));