function setbackground()  {
    var index = Math.floor(Math.random() * 5);
    console.log(index);

    switch(index) {
        case 0: 
            document.getElementById("back").style.backgroundImage = "url('images/back1.jpg')";
        break;

        case 1:
            document.getElementById("back").style.backgroundImage = "url('images/back2.jpg')";
        break;

        case 2:
            document.getElementById("back").style.backgroundImage = "url('images/back3.jpg')";
        break;

        case 3:
            document.getElementById("back").style.backgroundImage = "url('images/back4.jpg')";
        break;

        case 4:
            document.getElementById("back").style.backgroundImage = "url('images/back5.jpg')";
        break;
    }
}

let weather = {
    apiKey: "225363b5844950ebd6ab54338bf2446a",
    fetchWeather: function (city)  {
        https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
        )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data)  {
        const {name} = data;
        const {icon, description} = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        let main = data.weather[0].main;
        setgif(main);

        console.log(data);

        document.querySelector(".location").innerText = data.name;
        document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".pres").innerText = data.main.pressure;
    document.querySelector(".temperature").innerText = temp + "°C";
    document.querySelector(".hum").innerText = humidity + "%";
    document.querySelector(".wind").innerText = speed + " km/h";
    document.querySelector(".box").classList.remove("loading");
    },
    search: function()  {
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
}

function check()  {
    setbackground();
    weather.search();
    
}

weather.fetchWeather("delhi");

function setgif (main)  {
    switch(main)  {
        case "Snow":
            document.getElementById("box").style.backgroundImage = "url('images/snow.gif')";
            break;

        case "Clouds":
            document.getElementById("box").style.backgroundImage = "url('images/clouds.gif')";
            break;

        case "Mist":
            document.getElementById("box").style.backgroundImage = "url('images/fog.gif')";
            break;
        
        case "Rain":
            document.getElementById("box").style.backgroundImage = "url('images/rain.gif')";
            break;

        case "Clear":
            document.getElementById("box").style.backgroundImage = "url('images/clear.gif')";
            break;

        case "Thunderstorm":
            document.getElementById("box").style.backgroundImage = "url('images/thunderstorm.gif')";
            document.getElementById("box").style.color = "white";
            break;
        
        default:
            document.getElementById("box").style.backgroundImage = "url('images/clear.gif')";
            break;
    }
}