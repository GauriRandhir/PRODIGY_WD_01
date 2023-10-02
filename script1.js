let startTime;
let interval;
let running = false;

function startStop() {
    if (running) {
        clearInterval(interval);
        document.getElementById("startStop").textContent = "Start";
    } else {
        startTime = Date.now() - (interval || 0);
        interval = setInterval(updateDisplay, 10);
        document.getElementById("startStop").textContent = "Stop";
    }
    running = !running;
}

function reset() {
    clearInterval(interval);
    document.getElementById("display").textContent = "00:00:00";
    document.getElementById("startStop").textContent = "Start";
    document.getElementById("lapList").innerHTML = "";
    running = false;
}

function updateDisplay() {
    const currentTime = new Date(Date.now() - startTime);
    const hours = currentTime.getUTCHours();
    const minutes = currentTime.getUTCMinutes();
    const seconds = currentTime.getUTCSeconds();
    const milliseconds = Math.floor(currentTime.getUTCMilliseconds() / 10);
    document.getElementById("display").textContent =
        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}.${String(milliseconds).padStart(2, '0')}`;
}

function lap() {
    if (running) {
        const lapTime = document.getElementById("display").textContent;
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        document.getElementById("lapList").appendChild(lapItem);
    }
}
