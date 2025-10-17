function updateTime(){
    const userTime = document.getElementById("user-time");

    const currentTimeInMS = Date.now();

    userTime.textContent = `Current Time: ${currentTimeInMS} ms`
}

updateTime();

setInterval(updateTime, 100);

