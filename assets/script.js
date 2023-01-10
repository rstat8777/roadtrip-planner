console.log("hello, world!")


// grab user input from forms 

let inputStartPoint = document.getElementById("inputStartPoint");
let inputDestination = document.getElementById("inputDestination");


//fetch maps API
fetch('http://example.com/movies.json')
  .then((response) => response.json())
  .then((data) => console.log(data));


//fetch geocode API

fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + //location from user input
'&limit=5&appid={API key}')
  .then((response) => response.json())
  .then((data) => console.log(data));

// grab lat and lon from json above


//fetch weather API

fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + //starting point lat
 + '&lon=' + //starting point lon 
 + &appid=0e40d92140fd2b7333031cf611ffeb1e')
.then((response) => response.json())
.then((data) => console.log(data));



fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + //destination lat
 + '&lon=' + //destination lon 
 + &appid=0e40d92140fd2b7333031cf611ffeb1e')
.then((response) => response.json())
.then((data) => console.log(data));

//function to display map

localStorage.setItem("startPoint", inputStartPoint);
localStorage.setItem("destination", inputDestination);

//change localstorage to query parameters and use localstorage for history