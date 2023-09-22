let player = 'X';
let moves = 0;
let gameOver = false;

function turn(cell) {
    if (!cell.innerText && !gameOver) {
        cell.innerText = player;
        moves++;
        check();
        player = player == "X" ? "O" : "X";
        player == 'X' && computerTurn();
    }
}

function computerTurn() {
    if (!gameOver) {
        const cells = document.querySelectorAll(".cell");
        const empty = [];
        cells.forEach(cell => {
            if (!cell.innerText)
                empty.push(cell);
        });
        if (empty.length > 0) {
            const ran_num = Math.floor(Math.random() * empty.length);
            empty[ran_num].innerText = 'X';
            moves++;
            check();
            player = 'O';
        }
    }
}

function check() {
    const cells = document.querySelectorAll('.cell');

    for (let i = 0; i < 3; i++) {
        if (cells[i * 3].innerText && cells[i * 3].innerText == cells[i * 3 + 1].innerText && cells[i * 3].innerText == cells[i * 3 + 2].innerText) {
            gameOver = true;
            document.getElementById("message").innerText = `${player} is a winner!`;
            return;
        }

        if (cells[i].innerText && cells[i].innerText == cells[i + 3].innerText && cells[i].innerText == cells[i + 6].innerText) {
            gameOver = true;
            document.getElementById("message").innerText = `${player} is a winner!`;
            return;
        }
    }

    if ((cells[0].innerText && cells[0].innerText == cells[4].innerText && cells[0].innerText == cells[8].innerText) ||
        (cells[2].innerText && cells[2].innerText == cells[4].innerText && cells[2].innerText == cells[6].innerText)) {
        gameOver = true;
        document.getElementById("message").innerText = `${player} is a winner!`;
        return;
    }

    if (moves == 9) {
        gameOver = true;
        document.getElementById("message").innerText = "It's a draw!";
    }
}

if (player == 'X') {
    computerTurn();
}