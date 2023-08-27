const day = document.querySelector(".sub-section-2-1");
const mon_day = document.querySelector(".sub-section-2-2");
const temp = document.querySelector(".sub-section-3");
const weaDes = document.querySelector(".sub-section-4");
const wind = document.querySelectorAll(".sub-section1-1");
const Rainchance = document.querySelectorAll(".sub-section1-2");
const input = document.getElementById("input1");
const search = document.getElementById("search");
const currDate = new Date();

async function checkweather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a9a50d190b5bd7059224a37031f45ad8`
  );
  var data = await response.json();
  day.innerHTML = currDate.toLocaleString("default", { weekday: "long" });
  mon_day.innerHTML =
    currDate.toLocaleString("default", { month: "long" }) +
    " " +
    currDate.getDate();
  temp.innerHTML =
    (data.main.feels_like - 273).toFixed(0) + "<sup>&deg;</sup>c";
  weaDes.innerHTML = data.weather[0].description.toLocaleUpperCase();
  wind[0].innerHTML = data.wind.speed + " km/h <br> Wind ";
  wind[1].innerHTML = data.main.pressure + " meter <br> Pressure";
  Rainchance[0].innerHTML = data.clouds.all + "% <br> Chance of Rain";
  Rainchance[1].innerHTML = data.main.humidity + "% <br> Humidity";
}
checkweather();

search.addEventListener("click", (event) => {
  checkweather(input.value);
  input.value = ""
});
