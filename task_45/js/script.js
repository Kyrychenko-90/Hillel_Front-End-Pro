/*
За допомогою ajax-запиту вивести погоду:
    http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

        q=XXX - місто, для якого показати погоду
        temp – температура
        pressure - тиск
        description – опис
        humidity – вологість
        speed – швидкість вітру
        deg - напрям у градусах
        icon - значок, де 10d код іконки
        http://openweathermap.org/img/w/10d.png
 */

const city = "Lviv";

function getWeather(city) {
    const apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&APPID=5d066958a60d315387d9492393935c19";
    fetch(apiUrl)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            const temp = data.main.temp;
            const pressure = data.main.pressure;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;
            const speed = data.wind.speed;
            const deg = data.wind.deg;
            const iconCode = data.weather[0].icon;
            const iconUrl = `http://openweathermap.org/img/w/${iconCode}.png`;
            document.getElementById("city").textContent = `Місто: ${city}`;
            document.getElementById("temp").textContent = `Температура: ${temp} °C`;
            document.getElementById("pressure").textContent = `Тиск: ${pressure} гПа`;
            document.getElementById("description").textContent = `Опис: ${description}`;
            document.getElementById("humidity").textContent = `Вологість: ${humidity} %`;
            document.getElementById("speed").textContent = `Швидкість вітру: ${speed} м/с`;
            document.getElementById("deg").textContent = `Напрямок вітру: ${deg}°`;
            document.getElementById("icon").setAttribute("src", iconUrl);
        })
        .catch(function(error) {
            console.log("Помилка при отриманні даних про погоду:", error);
        });
}

getWeather(city);