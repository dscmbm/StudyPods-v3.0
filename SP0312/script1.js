const startButton = document.getElementById('start');
const timeDisplay = document.querySelector('.time');
const customTimeInput = document.querySelector('#custom-time');
let countdown;
let timeLeft;
let timerRunning = false;
let startTime;
let endTime;

function startTimer(duration) {
  if (!timerRunning) {
    if (!timeLeft) {
      startTime = Date.now();
      endTime = startTime + duration * 60 * 1000;
    } else {
      endTime = Date.now() + timeLeft * 1000;
    }
    timerRunning = true;
    countdown = setInterval(() => {
      timeLeft = Math.round((endTime - Date.now()) / 1000);
      if (timeLeft < 0) {
        clearInterval(countdown);
        timeDisplay.textContent = '10:00';
        timerRunning = false;
        document.getElementById('stop-sound').play();
      } else {
        const minutes = Math.floor(timeLeft / 60).toString().padStart(2, '0');
        const seconds = (timeLeft % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${minutes}:${seconds}`;
      }
    }, 1000);
   
  }
}



startButton.addEventListener('click', () => startTimer(10));

customTimeInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    startCustomTimer();
    customTimeInput.blur(); // Remove focus from the input field after starting the timer
}
});