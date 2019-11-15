const APIKEY = '2d8da3c8a917b7f3c177458dd82c4d27';
let city = 'Austin';

navigator.geolocation.getCurrentPosition(
    function success(position) {
      // for when getting location is a success
      console.log('latitude', position.coords.latitude, 
                  'longitude', position.coords.longitude);
    },
); 

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`)
.then( response => {
    return response.json();
})
.then( data => {
    console.log(data);

    let temp = Math.trunc(data.main.temp);
    let weather = data.weather[0].description;
    let city = data.name;
    let humidity = data.main.humidity;
    let wind = data.wind.speed;

    console.log(temp);
    console.log(weather);
    console.log(city);
    console.log(humidity);
    console.log(wind);

    let tempSpan = document.querySelector("#temp");
    let citySpan = document.querySelector("#city");
    let dateSpan = document.querySelector("#date");
    let iconSpan = document.querySelector("#icon");
    let humiditySpan = document.querySelector("#humidity");
    let windSpan = document.querySelector("#wind");

    tempSpan.textContent = temp;
    citySpan.textContent = city;
    humiditySpan.textContent = humidity;
    windSpan.textContent = wind;
})
.catch(error => {
    console.log(error);
});



