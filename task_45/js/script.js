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
            const {temp, pressure,humidity} = data.main;
            const {description, icon} = data.weather[0];
            const {speed, deg} = data.wind;
            const iconUrl = `http://openweathermap.org/img/w/${icon}.png`;

            const getTextContentById = (elementId, text) => {
                document.getElementById(elementId).textContent = text;
            }

            getTextContentById("city", `Місто: ${city}`);
            getTextContentById("temp", `Температура: ${temp} °C`);
            getTextContentById("pressure", `Тиск: ${pressure} гПа`);
            getTextContentById("description", `Опис: ${description}`);
            getTextContentById("humidity", `Вологість: ${humidity} %`);
            getTextContentById("speed", `Швидкість вітру: ${speed} м/с`);
            getTextContentById("deg", `Напрямок вітру: ${deg}°`);
            document.getElementById("icon").setAttribute("src", iconUrl);

        })
        .catch(function(error) {
            console.log("Помилка при отриманні даних про погоду:", error);
        });
}

getWeather(city);