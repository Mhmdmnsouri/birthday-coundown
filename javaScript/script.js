const endDate = document.querySelector("input[name='endDate']");
const clock = document.querySelector(".clock");

endDate.addEventListener("change", function (e) {
    e.preventDefault();
    let temp = new Date(endDate.value);
    starClock(temp);
});

function starClock(d) {
    console.log(timeLeft(d));
}

function timeLeft(d) {
    console.log(d);

    let currentDate = new Date();
    let total = Date.parse(d) - Date.parse(currentDate);

    let seconds = Math.floor((total / 1000) % 60);
    console.log("Seconds : " + seconds);
    let minutes = Math.floor(((total / 1000) / 60) % 60);
    console.log("Minutes : " + minutes);
    let hours = Math.floor(((total / 1000) * 60) % 24);
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