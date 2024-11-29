let startTime;
let elapsedTime = 0;
let timerInterval;
const timeDisplay = document.getElementById('timeDisplay');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');
function updateTime() {
    const time = Date.now() - startTime + elapsedTime;
    const seconds = Math.floor((time / 1000) % 60);
    const minutes = Math.floor((time / 60000) % 60);
    const hours = Math.floor((time / 3600000) % 24);

    timeDisplay.textContent = 
        `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
function start() {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = false;
}
function stop() {
    clearInterval(timerInterval);
    elapsedTime += Date.now() - startTime;
    startButton.disabled = false;
    stopButton.disabled = true;
}
function reset() {
    clearInterval(timerInterval);
    elapsedTime = 0;
    timeDisplay.textContent = '00:00:00';
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
}
startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
stopButton.disabled = true;
resetButton.disabled = true;
