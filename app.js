let request = new XMLHttpRequest();
const APIKEY = '2d8da3c8a917b7f3c177458dd82c4d27';
let city = 'Austin';


request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`, true);

request.onload = function() {
    let data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400) {
        
        let city = data.name;
        let main = Math.trunc(data.main.temp);
        let wind = data.wind.speed;
        let humidity = data.main.humidity + "%";
    
        let tempSpan = document.querySelector("#temp");
        let citySpan = document.querySelector("#city");
        let windSpan = document.querySelector("#wind");
        let humiditySpan = document.querySelector("#humidity");
        let iconSpan = document.querySelector("#icon");

        citySpan.textContent = city;
        tempSpan.textContent = main;
        windSpan.textContent = wind;
        humiditySpan.textContent = humidity;


        console.log(city);
        console.log(main);
  
    } 
    else
    {
        console.log('error')
    }
};

request.send();