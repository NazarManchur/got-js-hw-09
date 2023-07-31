import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css"
const input = document.querySelector("#datetime-picker")
const timeNow = new Date().getTime();
const button = document.querySelector("[data-start]")
button.disabled = true;

const daysEi = document.querySelector("[data-days]");
const hoursEi = document.querySelector("[data-hours]");
const minutesEi = document.querySelector("[data-minutes]");
const secondsEi = document.querySelector("[data-seconds]");

const timer = {
    intervalId: null,
    start() {
        button.disabled = true;
        input.disabled = true;
        const startTime = clock.selectedDates[0].getTime();
        this.intervalId = setInterval(() => {
            const nowTime = Date.now();
            const deltaTime = startTime - nowTime;
            const { days, hours, minutes, seconds } = convertMs(deltaTime);
            daysEi.textContent = days;
            hoursEi.textContent = hours;
            minutesEi.textContent = minutes;
            secondsEi.textContent = seconds;
            console.log(`${days}::${hours}:${minutes}:${seconds}`)
            if (deltaTime < 1000) {
                alert('пі пі пі пі')
                clearInterval(this.intervalId);
                button.disabled = false;
            }
        }, 1000)
    },
};


const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if (selectedDates[0] < new Date()) {
            alert("Please choose a date in the future")
        }
        else {
            button.disabled = false;
            button.addEventListener("click", timer.start);
        }

    },
};
const clock = flatpickr("#datetime-picker", options)
function addLeadingZero(value) {
    return String(value).padStart(2, "0");
}

function convertMs(ms) {
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const days = addLeadingZero(Math.floor(ms / day));
    const hours = addLeadingZero(Math.floor((ms % day) / hour));
    const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
    const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));
    return { days, hours, minutes, seconds };
}




