function handleSearch(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");

  if (searchInput.value === "") {
    alert("Please enter a city");
  } else {
    h1.innerHTML = searchInput.value;
  }
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

function displayTemperature(response) {
  let temperature = document.querySelector("temperature");
  let temperatureResponse = Math.round(response.data.temperature.current);
  temperature.innerHTML = temperatureResponse;
}

let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
let apiKey = "3cob132dc3daat1dec233c5354fa90b7";

axios.get(apiUrl).then(displayTemperature);
