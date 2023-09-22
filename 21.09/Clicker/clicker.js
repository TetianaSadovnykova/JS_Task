let timer = 31;
let count = 0;

function startGame() {
    document.getElementById("start").disabled = true;
    document.getElementById("click").disabled = false;

    document.getElementById("countdown").innerText = timer;

    function countdown() {
        timer--;
        document.getElementById("countdown").innerText = timer;

        if (timer === 0) {
            document.getElementById("click").disabled = true;
            setTimeout (function() {
                alert("Game over! Your managed to do " + count + " clicks! It's great!!!");
            }, 0);
        }
        else
            setTimeout(countdown, 1000);
    }

    countdown();
}

function clickButton() {
    count++;
    document.getElementById("count").innerText = count;
}