const rows = +(prompt("Enter the number of rows for the matrices:"));
const col = +(prompt("Enter the number of columns for the matrices:"));

if (isNaN(rows) || isNaN(col))
    alert("They should be numbers. Try again, please");
else {
    const matrix1 = [];
    const matrix2 = [];
    const matrixSum = [];

    alert("Please, enter values for the first matrix:");
    for (let i = 0; i < rows; i++) {
        matrix1.push([]);
        for (let j = 0; j < col; j++) {
            let value;
            do {
                value = +prompt(`Enter the value at row ${i + 1}, column ${j + 1} for the first matrix:`);
                if (isNaN(value))
                    alert("Only numbers, please. Try again.");
            }
            while (isNaN(value));
            matrix1[i].push(value);
        }
    }
    alert("Please, enter values for the second matrix:");
    for (let i = 0; i < rows; i++) {
        matrix2.push([]);
        for (let j = 0; j < col; j++) {
            let value;
            do {
                value = +prompt(`Enter the value at row ${i + 1}, column ${j + 1} for the second matrix:`);
                if (isNaN(value))
                    alert("Only numbers, please. Try again.");
            }
            while (isNaN(value));
            matrix2[i].push(value);
        }
    }
    for (let i = 0; i < rows; i++) {
        matrixSum.push([]);
        for (let j = 0; j < col; j++) {
            matrixSum[i][j] = matrix1[i][j] + matrix2[i][j];
        }
    }
    console.log("The first matrix:");
    console.table(matrix1);

    console.log("The second matrix:");
    console.table(matrix2);

    console.log("The sum of two matrices:");
    console.table(matrixSum);
}




