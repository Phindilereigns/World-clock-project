function updateTimeDate() {
  const cities = [
    { id: "rome", timezone: "Europe/Rome" },
    { id: "capetown", timezone: "Africa/Johannesburg" },
    { id: "manila", timezone: "Asia/Manila" },
  ];

  cities.forEach((city) => {
    const dateElement = document.querySelector(`#${city.id}-date`);
    const timeElementHour = document.querySelector(`#${city.id}-hour`);
    const timeElementMinute = document.querySelector(`#${city.id}-minute`);
    const timeElementSecond = document.querySelector(`#${city.id}-second`);

    const now = moment.tz(city.timezone);
    dateElement.innerHTML = now.format("MMMM Do YYYY");
    timeElementHour.innerHTML = now.format("HH");
    timeElementMinute.innerHTML = now.format("mm");
    timeElementSecond.innerHTML = now.format("ss");
  });
}

function updateCity(event) {
  const cityTimeZone =
    event.target.value === "current" ? moment.tz.guess() : event.target.value;

  if (cityTimeZone) {
    const cityName = cityTimeZone.split("/")[1].replace("_", " ");
    const now = moment.tz(cityTimeZone);

    const cityContainer = document.querySelector("#city-container");
    cityContainer.innerHTML = `
      <div class="city">
        <h2 class="city-name">${cityName}</h2>
        <p class="city-date">${now.format("MMMM Do YYYY")}</p>
        <div class="box">
          <div class="clock">
            <div class="front-clock">
              <div>${now.format("HH")}</div>
              <p>hour</p>
            </div>
          </div>
          <div class="clock">
            <div class="front-clock">
              <div>${now.format("mm")}</div>
              <p>minutes</p>
            </div>
          </div>
          <div class="clock">
            <div class="front-clock">
              <div>${now.format("ss")}</div>
              <p>seconds</p>
            </div>
          </div>
        </div>
      </div>
      <a href="index.html">Back to All Cities</a>
    `;
  }
}

document
  .querySelector("#drop-down-elements")
  .addEventListener("change", updateCity);

updateTimeDate();
setInterval(updateTimeDate, 1000);
