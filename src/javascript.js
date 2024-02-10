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
