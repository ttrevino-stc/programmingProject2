let countdown;
const timerDisplay = document.getElementById("timerDisplay");
const timeInput = document.getElementById("timeInput");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

startBtn.addEventListener("click", () => {
    clearInterval(countdown);
    let timeLeft = parseInt(timeInput.value);
    if (isNaN(timeLeft) || timeLeft < 1 || timeLeft > 60) {
        alert("Please enter a number between 1 and 60");
        return;
    }

    countdown = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(countdown);
            alert("Time's up!");
            timerDisplay.innerText = "00:00";
        } else {
            timerDisplay.innerText = `00:${timeLeft < 10 ? "0" : ""}${timeLeft}`;
            timeLeft--;
        }
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(countdown);
    timerDisplay.innerText = "00:00";
});
