const apiKey = "44d9e7cdc1d4e2c252072686b2c24670";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox= document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon =document.querySelector(".weather-icon")
async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
    document.querySelector('.Wind').innerHTML = data.wind.speed + "kph";
    document.querySelector('.feel').innerHTML = "FeelsLike: " + data.main.feels_like + " °C";
    if (data.weather[0].main == "Clouds")
    {
        weatherIcon.src = "images/clouds.png";
    }
     else if (data.weather[0].main == "Rain")
    {
        weatherIcon.src = "images/rain.png";
    }
    else if (data.weather[0].main == "Mist")
    {
        weatherIcon.src = "images/mist.png";
    }
    else if (data.weather[0].main == "Clear")
    {
        weatherIcon.src = "images/clear.png";
    }
    else if (data.weather[0].main == "Drizzle")
    {
        weatherIcon.src = "images/drizzle.png";
    }
    else if (data.weather[0].main == "Snow")
    {
        weatherIcon.src = "images/snow.png";
    }

}
 searchbtn.addEventListener("click" , ()=>{
    checkweather(searchBox.value);
} ) 
