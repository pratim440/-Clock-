date = document.getElementById("date");
time = document.getElementById("time");

const handleTime = () => {
    let d = new Date();
    date.innerHTML = d.toLocaleDateString();
    time.innerHTML = new Date().toLocaleTimeString();
}

setInterval(handleTime, 1000);

