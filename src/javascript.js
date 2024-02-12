function refreshWeather(response) {
  let temperature = document.querySelector("#temperature");
  let temperatureResponse = Math.round(response.data.temperature.current);
  let h1 = document.querySelector("h1");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity-level");
  let windElement = document.querySelector("#wind-speed");

  h1.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windElement.innerHTML = `${Math.round(response.data.wind.speed)}mph`;
  temperature.innerHTML = temperatureResponse;
}

function searchCity(city) {
  let apiKey = "3cob132dc3daat1dec233c5354fa90b7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");

  if (searchInput.value === "") {
    alert("Please enter a city");
  }
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

searchCity("Glasgow");
