let countdownInterval;
let countdownTime;

function startCountdown() {
    const datetimeInput = document.getElementById('datetime');
    const selectedDatetime = new Date(datetimeInput.value);
    
    if (isNaN(selectedDatetime)) {
        alert('Invalid date/time format. Please select a valid date and time.');
        return;
    }

    const currentTime = new Date();
    const timeDifference = selectedDatetime - currentTime;

    if (timeDifference <= 0) {
        alert('Please select a future date and time.');
        return;
    }

    countdownTime = Math.floor(timeDifference / 1000);

    clearInterval(countdownInterval);

    countdownInterval = setInterval(function () {
        const timerElement = document.getElementById('timer');
        timerElement.innerText = formatTime(countdownTime);

        if (countdownTime <= 0) {
            clearInterval(countdownInterval);
            timerElement.innerText = 'Time\'s up!';
        } else {
            countdownTime--;
        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(countdownInterval);
}

function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}
