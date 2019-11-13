let request = new XMLHttpRequest();
const APIKEY = 2d8da3c8a917b7f3c177458dd82c4d27;
let city = 'Bursa';


request.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${APIKEY}`, true);

request.onload = function() {
    let data = JSON.parse(this.response);

    if(request.status >= 200 && request.status < 400) {
        
        let city = data.name;
        let main = data.main.temp;
    
        let tempSpan = document.querySelector("#temp");
        let citySpan = document.querySelector("#city");

        citySpan.textContent = city;
        tempSpan.textContent = main;

        console.log(city);
        console.log(main);
  
    } 
    else
    {
        console.log('error')
    }
};

request.send();