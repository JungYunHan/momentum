const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "7aa83e203141a763023e8d6e5c6f49a8";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} ${data.main.temp}℃`;
    });
}

function onGeoError() {
  alert("Please allow me to provide the weather.");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
