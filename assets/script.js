
// grab user input from forms when go button is clicked
function kelvin(x) {
  let result = Math.round(((x - 273.15) * 1.8) + 32);
  console.log(result);
  return result;
}



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
  
  // location.href= "./results.html";
  
  initialize();
  };



// let go = document.querySelector("#go")

// go.addEventListener('click', function() {

// }
// )
// console.log(document.getElementById("origin-street"));

async function initialize() {

  let originStreet = localStorage.getItem("originStreet");
  let originCity = localStorage.getItem("originCity");
  let originState = localStorage.getItem("originState");
  let originZip = localStorage.getItem("originZip");
  let destinationStreet = localStorage.getItem("destinationStreet");
  let destinationCity = localStorage.getItem("destinationCity");
  let destinationState = localStorage.getItem("destinationState");
  let destinationZip = localStorage.getItem("destinationZip");

// fetch('https://www.google.com/maps/embed/v1/?key=AIzaSyDq4dGiAqsyOEGidDmskey1U6gsIJIeN2Q')
//   .then((response) => response.json())
//   .then((data) => console.log(data));



// grab lat and lon from json
function pullOriginWeather(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=dcf2daf93d72ecbb94572260babdabff')
  .then((response) => response.json())
  .then((data) => {
    let weather = data.main;
    localStorage.setItem("originWeather", JSON.stringify(weather));
    console.log(data)
  })
}

// grab lat and lon from json
function pullDestinationWeather(lat, lon) {
  fetch('https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&appid=dcf2daf93d72ecbb94572260babdabff')
  .then((response) => response.json())
  .then((data) => {
    let weather = data.main;
    localStorage.setItem("destinationWeather", JSON.stringify(weather));
    console.log(data)
  })
}



async function printWeather() {
  //grab the weather objects from local storage
  console.log(localStorage.getItem("originWeather"));
  console.log(localStorage.getItem("destinationWeather"));
  let outputOrigin = document.getElementById("origin-weather");
  let outputDestination = document.getElementById("destination-weather");

  let originWeather = JSON.parse(localStorage.getItem("originWeather"))
  let destinationWeather = JSON.parse(localStorage.getItem("destinationWeather"))
  console.log(originWeather);
  console.log(destinationWeather);

  //append them into the HTML document
  const originPrintContent = document.createTextNode("The temperature in " + originCity + " is " + kelvin(originWeather.temp) + " with a high of " + kelvin(originWeather.temp_max) + " and a low of " + kelvin(originWeather.temp_min));
  const destinationPrintContent = document.createTextNode("The temperature in " + destinationCity + " is " + kelvin(destinationWeather.temp) + " with a high of " + kelvin(destinationWeather.temp_max) + " and a low of " + kelvin(destinationWeather.temp_min));

  outputOrigin.appendChild(originPrintContent);
  outputDestination.appendChild(destinationPrintContent);
 
  

}
// origin fetch:
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + originCity + ',US-' + originState + ',USA&limit=1&appid=dcf2daf93d72ecbb94572260babdabff')
  .then((response) => response.json())
  .then((data) => {
    let lat = data[0].lat;
    let lon = data[0].lon;
    pullOriginWeather(lat, lon);
    console.log(data);
  });

//print origin weather to page somehow

// destination fetch:
  fetch('http://api.openweathermap.org/geo/1.0/direct?q=' + destinationCity + ',US-' + destinationState + ',USA&limit=1&appid=dcf2daf93d72ecbb94572260babdabff')
  .then((response) => response.json())
  .then((data) => {
  let lat = data[0].lat;
  let lon = data[0].lon;
  pullDestinationWeather(lat, lon);
  console.log(data);
  })
  .then


await printWeather();
} 




// this below would be for the hourly forecast
//fetch weather API
// fetch('https://pro.openweathermap.org/data/2.5/forecast/hourly?lat=' + //starting point lat
//  + '&lon=' + //starting point lon 
//  + &appid=0e40d92140fd2b7333031cf611ffeb1e')
// .then((response) => response.json())
// .then((data) => console.log(data));


//function to display map

//change localstorage to query parameters and use localstorage for history