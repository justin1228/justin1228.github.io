const COORDS = "coords";
const API_KEY = "14df5b8b9bea9e5c35387becb78daf24";
const weather = document.querySelector(".js-weather");

function getWeather(lat, lon){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    ).then(function(response){
        return response.json();
    }).then(function(json){
        const temperature = json.main.temp;
        const place = json.name;
        weather.innerText = `${Math.floor(temperature)}°C @ ${place}`;
    });
}

function saveCoords(coordsObj){
    localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
const latitude = position.coords.latitude;
const longitude = position.coords.longitude;
const coordsObj = {
    latitude,
    longitude
};
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
}
function handleGeoError(){
    console.log('Cant access geo location');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);
}

function loadCoords(){
    const loadedCords = localStorage.getItem(COORDS);

    if(loadedCords ===null){
        askForCoords();
    }
    else{
        const parseCoords = JSON.parse(loadedCords);
        getWeather(parseCoords.latitude, parseCoords.longitude);
    }
}


function init(){
    loadCoords();
}
init();