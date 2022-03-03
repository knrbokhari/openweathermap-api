// api key
const API_KEY = "aae42156c5a7bdd8a155af712e5e4939";

const API = async (cityName) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`;
  const res = await fetch(url);
  const data = await res.json();
  display(data);
};

const searchTemperature = () => {
  const inputCityName = document.getElementById("input-city-name");
  const cityName = inputCityName.value;
  API(cityName);
  inputCityName.value = "";
};

const display = (data) => {
  //   console.log(data);
  const weatherLogo = document.getElementById("weather-logo");
  const logoUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  weatherLogo.setAttribute("src", logoUrl);
  const location = document.getElementById("location");
  location.innerText = data.name;
  const temp = document.getElementById("temp");
  temp.innerText = data.main.temp;
  const weather = document.getElementById("weather");
  weather.innerText = data.weather[0].main;
};
