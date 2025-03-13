let timer = 0;
let interval = 0;

const startButton = document.getElementById('startTimer');
const stopButton = document.getElementById('stopTimer');
const resetButton = document.getElementById('resetTimer');
const timerDisplay = document.getElementById('timerDisplay');

function startTimer() {
    if (interval) {
        return;
    }
    interval = setInterval(() => {
        timer++;
        timerDisplay.innerHTML = timer;
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
    interval = 0;
}

function resetTimer() {
    clearInterval(interval);
    timer = 0;
    timerDisplay.innerHTML = timer;
    interval = 0;
}


startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);