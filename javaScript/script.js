const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");
let timeInterval;
let timeStop = true;

endDate.addEventListener("change", function (e) {
    e.preventDefault();
    clearInterval(timeInterval);
    const temp = new Date(endDate.value);
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
    console.log(d);

    let currentDate = new Date();
    let total = Date.parse(d) - Date.parse(currentDate);

    let seconds = Math.floor((total / 1000) % 60);
    console.log("Seconds : " + seconds);
    let minutes = Math.floor(((total / 1000) / 60) % 60);
    console.log("Minutes : " + minutes);
    let hours = Math.floor(((total) / (1000 * 60 * 60)) % 24);
    console.log("Hours : " + hours);
    let days = Math.floor(total / (1000 * 60 * 60 * 24))
    console.log("Days : " + days);

    return {
        "total": total,
        "days": days,
        "hours": hours,
        "minutes": minutes,
        "seconds": seconds
    };

}