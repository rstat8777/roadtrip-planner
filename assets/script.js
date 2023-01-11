
// grab user input from forms 




// button stuff

document.getElementById("go").onclick = function() {


  let originStreet = document.getElementById("origin-street").value;
  let originCity = document.getElementById("origin-city").value;
  let originState = document.getElementById("origin-state").value;
  let originZip = document.getElementById("origin-zip").value;
  let destinationStreet = document.getElementById("destination-street").value;
  let destinationCity = document.getElementById("destination-city").value;
  let destinationState = document.getElementById("destination-state").value;
  let destinationZip = document.getElementById("destination-zip").value;
  
  
  localStorage.setItem("originStreet", originStreet);
  localStorage.setItem("originCity", originCity);
  localStorage.setItem("originState", originState);
  localStorage.setItem("originZip", originZip);
  localStorage.setItem("destinationStreet", destinationStreet);
  localStorage.setItem("destinationCity", destinationCity);
  localStorage.setItem("destinationState", destinationState);
  localStorage.setItem("destinationZip", destinationZip);
  
  location.href= "./results.html";
  
  
  };




// let go = document.querySelector("#go")


// go.addEventListener('click', function() {



// }
// )
// console.log(document.getElementById("origin-street"));



fetch('https://www.google.com/maps/embed/v1/?key=AIzaSyDq4dGiAqsyOEGidDmskey1U6gsIJIeN2Q')
  .then((response) => response.json())
  .then((data) => console.log(data));


//fetch geocode API

fetch('http://api.openweathermap.org/geo/1.0/direct?q=detroit,US-' + originState + ',USA&limit=5&appid=dcf2daf93d72ecbb94572260babdabff')
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

localStorage.setItem("originStreet", originStreet);
localStorage.setItem("originCity", originCity);
localStorage.setItem("originState", originState);
localStorage.setItem("originZip", originZip);
localStorage.setItem("destinationStreet", destinationStreet);
localStorage.setItem("destinationCity", destinationCity);
localStorage.setItem("destinationState", destinationState);
localStorage.setItem("destinationZip", destinationZip);

//change localstorage to query parameters and use localstorage for history