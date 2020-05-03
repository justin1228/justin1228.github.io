const clock = document.querySelector(".js-clock");

function loadClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    clock.innerHTML = `${hours<10? `0${hours}`:hours}:${minutes<10? `0${minutes}`:minutes}:${seconds<10? `0${seconds}`:seconds}`;
}
function init(){
    loadClock();
    setInterval(loadClock,1000);
}
init(); 