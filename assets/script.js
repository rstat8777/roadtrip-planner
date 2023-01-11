console.log("hello, world!")


// grab user input from forms 

let inputStartPoint = document.getElementById("inputStartPoint");
let inputDestination = document.getElementById("inputDestination");



fetch('https://www.google.com/maps/embed/v1/?key=AIzaSyDq4dGiAqsyOEGidDmskey1U6gsIJIeN2Q')
  .then((response) => response.json())
  .then((data) => console.log(data));


//fetch geocode API

fetch('http://api.openweathermap.org/geo/1.0/direct?q=detroit,US-MI,USA&limit=5&appid=dcf2daf93d72ecbb94572260babdabff')
  .then((response) => response.json())
  .then((data) => console.log(data));

// grab lat and lon from json above


// ****BELOW MUST BE FIXED TO INCLUDE VARIABLES FOR LAT/LON****
fetch('https://api.openweathermap.org/data/2.5/weather?lat=42.33&lon=83.05&appid=dcf2daf93d72ecbb94572260babdabff')
.then((response) => response.json())
.then((data) => console.log(data));


//fetch weather API
// fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + //starting point lat
//  + '&lon=' + //starting point lon 
//  + &appid=0e40d92140fd2b7333031cf611ffeb1e')
// .then((response) => response.json())
// .then((data) => console.log(data));



// fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + //destination lat
//  + '&lon=' + //destination lon 
//  + &appid=0e40d92140fd2b7333031cf611ffeb1e')
// .then((response) => response.json())
// .then((data) => console.log(data));

//function to display map

localStorage.setItem("startPoint", inputStartPoint);
localStorage.setItem("destination", inputDestination);

//change localstorage to query parameters and use localstorage for history