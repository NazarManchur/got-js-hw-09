import throttle from "lodash.throttle"

let timerId = 0;

const bStart = document.querySelector("[data-start]")
const bStop = document.querySelector("[data-stop]")
const bodi = document.querySelector("body")


bStart.addEventListener("click", () => {
    timerId = setInterval(() => {
        function getRandomHexColor() {
            return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
        }
        bodi.style.backgroundColor = getRandomHexColor();
        bStart.disabled = true;
        bStop.disabled = false;
    }, 1000);
});

bStop.addEventListener("click", () => {
    clearInterval(timerId);
    bStart.disabled = false;
    bStop.disabled = true;
});
