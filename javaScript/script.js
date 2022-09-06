const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
const title = document.querySelector(".title");
let timeInterval;
let timeStop = true;
const saveValue = localStorage.getItem("countDown") || false;

if (saveValue) {
    startClock(saveValue);
    let inputValue = new Date(saveValue);
    endDate.valueAsDate = inputValue;
}

endDate.addEventListener("change", function (e) {
    title.innerHTML = "Time left until your birthday :)";
    endDate.classList.toggle("hidden");
    e.preventDefault();
    clearInterval(timeInterval);
    const temp = new Date(endDate.value);
    localStorage.setItem("countDown", temp);
    startClock(temp);
    timeStop = true;
});

function startClock(d) {
    function updateCounter() {
        let timeLine = (timeLeft(d));
        if (timeLine.total <= 0) {
            timeStop = false;
        }

        for (let i in timeLine) {
            let elem = clock.querySelector("." + i);
            if (elem) {
                elem.innerHTML = timeLine[i];
            }
        }
    }
    updateCounter();
    if (timeStop) {
        timeInterval = setInterval(updateCounter, 1000);
    } else {
        clearInterval(timeInterval);
    }
}

function timeLeft(d) {
    let currentDate = new Date();
    let total = Date.parse(d) - Date.parse(currentDate);

    let seconds = Math.floor((total / 1000) % 60);
    let minutes = Math.floor(((total / 1000) / 60) % 60);
    let hours = Math.floor(((total) / (1000 * 60 * 60)) % 24);
    let days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        "total": total,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };
}

// endDate.addEventListener("change", function () {

// });