let countdown;
let timeForm = document.getElementById('timeForm');
let countdownDisplay = document.getElementById('countdown');

function startCountdown() {
    clearInterval(countdown);

    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    const seconds = parseInt(document.getElementById('seconds').value) || 0;

    const totalTimeInSeconds = hours * 3600 + minutes * 60 + seconds;

    if (totalTimeInSeconds <= 0) {
        alert('Please enter a valid time.');
        return;
    }

    let remainingTime = totalTimeInSeconds;

    countdown = setInterval(() => {
        const hoursRemaining = Math.floor(remainingTime / 3600);
        const minutesRemaining = Math.floor((remainingTime % 3600) / 60);
        const secondsRemaining = remainingTime % 60;

        const formattedTime = `${String(hoursRemaining).padStart(2, '0')}:${String(minutesRemaining).padStart(2, '0')}:${String(secondsRemaining).padStart(2, '0')}`;
        countdownDisplay.textContent = formattedTime;

        if (remainingTime <= 0) {
            clearInterval(countdown);
            alert('Countdown finished!');
            countdownDisplay.textContent = '00:00:00';
        }

        remainingTime--;
    }, 1000);
}
