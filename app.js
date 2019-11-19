const APIKEY = '2d8da3c8a917b7f3c177458dd82c4d27';

navigator.geolocation.getCurrentPosition(
    function success(position) {
    // for when getting location is a success
    let lat = position.coords.latitude;
    let lon = position.coords.longitude;

    //fetch the data from API
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=imperial`)
    .then( response => {
        return response.json();
    })
    .then( data => {
        console.log(data);
        
        //Pull the data and store
        let temp = Math.trunc(data.main.temp);
        let weather = data.weather[0].description;
        let city = data.name;
        let humidity = data.main.humidity;
        let wind = data.wind.speed;
        let country = data.sys.country;

        //Create variables for the DOM
        let tempSpan = document.querySelector("#temp");
        let citySpan = document.querySelector("#city");
        let dateSpan = document.querySelector("#date");
        let iconSpan = document.querySelector("#icon");
        let humiditySpan = document.querySelector("#humidity");
        let windSpan = document.querySelector("#wind");

        //Assign the data into the variables
        tempSpan.textContent = temp;
        citySpan.textContent = `${city}, ${country}`;
        humiditySpan.textContent = humidity;
        windSpan.textContent = wind;
    })
    .catch(error => {
        console.log(error);
    });

    },
); 



