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
