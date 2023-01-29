const input = document.querySelector('#city-input');
const btn = document.querySelector('#add');
const city = document.querySelector('#city-output');
const description = document.querySelector('#description');
const temp = document.querySelector('#temp');
const feel = document.querySelector('#feels-like');
const humidity = document.querySelector('#humidity');
const pressure = document.querySelector('#pressure');
const dateDisplay = document.querySelector('#date-display');
const unitCelsius = document.querySelector('#unit-celsius');
const unitFahrenheit = document.querySelector('#unit-fahrenheit');

let tempValue = null;
let feelValue = null;



const API_KEY = "eba4bc108b70b85fba9db015fbcce9ca";

// Takes a value and converts it from Kelvin to Celsius.
function conversion(vl) {
    return (vl - 273).toFixed(2);
}

btn.addEventListener('click', function() {

  document.querySelector('#loading').style.display = 'block';

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=' + API_KEY)
  .then(res => res.json())
  .then(data => {
    document.querySelector('#loading').style.display = 'none';

    const nameValue = data['name'];
    const descriptionValue = data['weather'][0]['description'];
    const tempValue = conversion(data['main']['temp']);
    const feelValue = conversion(data['main']['feels_like']);
    const humidityValue = conversion(data['main']['humidity']);
    const pressureValue = conversion(data['main']['pressure']);
    const date = new Date();

    // Displays Weather Results
    city.innerHTML = `Weather of <span>${nameValue}</span>`;
    temp.innerHTML = `Temperature: <span>${tempValue} C</span>`;
    description.innerHTML = `Sky Conditions: <span>${descriptionValue}</span>`;
    feel.innerHTML = `Wind Speed: <span>${feelValue} C</span>`;
    humidity.innerHTML = `Humidity: <span>${humidityValue} %</span>`;
    pressure.innerHTML = `pressure: <span>${pressureValue} hpa</span>`;
    dateDisplay.innerHTML = `Retrieved on <span>${date.toLocaleString()}</span>`;

    
  })
  .catch(err => {
    document.querySelector('#loading').style.display = 'none';
    if (err instanceof TypeError && err.message === 'Failed to fetch') {
      alert('Request timed out. Please try again later.');
    } else {
      alert('Wrong city name!');
    }
  });

  setBackground(description);
});


// Setting the background image
const body = document.querySelector('body');

function setBackground(description) {
  let background = '';
  switch(description) {
    case 'clear sky':
      background = 'sunny.jpg';
      break;
    case 'few clouds':
    case 'scattered clouds':
    case 'broken clouds':
    case 'overcast clouds':
      background = 'cloudy.jpg';
      break;
    case 'shower rain':
    case 'rain':
    case 'thunderstorm':
      background = 'rainy.jpg';
      break;
    default:
      background = 'default.jpg';
  }
  body.style.backgroundImage = `url('images/${background}')`;
}



//! Getting location
const locationBtn = document.querySelector('#location-btn');

locationBtn.addEventListener('click', function() {
  document.querySelector('#loading').style.display = 'block';

  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        document.querySelector('#loading').style.display = 'none';

        const nameValue = data['name'];
        const descriptionValue = data['weather'][0]['description'];
        const tempValue = data['main']['temp'];
        const feelValue = data['main']['feels_like'];
        const humidityValue = data['main']['humidity'];
        const pressureValue = data['main']['pressure'];

        city.innerHTML = `Weather of <span>${nameValue}</span>`;
        temp.innerHTML = `Temperature: <span>${conversion(tempValue)} C</span>`;
        description.innerHTML = `Sky Conditions: <span>${descriptionValue}</span>`;
        feel.innerHTML = `Feels Like: <span>${conversion(feelValue)} C</span>`;
        humidity.innerHTML = `Humidity: <span>${humidityValue}%</span>`;
        pressure.innerHTML = `Pressure: <span>${pressureValue} hPa</span>`;
      })
      .catch(err => alert('Error getting location!'));
  });
  setBackground(description);
});


//! Function to convert to Celsius and Fahrenheit 
function conversionFahrenheit(vl) {
  return ((vl - 273.15) * 9 / 5 + 32).toFixed(2);
}

unitFahrenheit.addEventListener('click', function() {
  unitCelsius.classList.remove('unit-active');
  unitFahrenheit.classList.add('unit-active');

  temp.innerHTML = `Temperature: <span>${conversionFahrenheit(tempValue)} F</span>`;
  feel.innerHTML = `Wind Speed: <span>${conversionFahrenheit(feelValue)} F</span>`;
});

unitCelsius.addEventListener('click', function() {
  unitFahrenheit.classList.remove('unit-active');
  unitCelsius.classList.add('unit-active');

  temp.innerHTML = `Temperature: <span>${conversion(tempValue)} C</span>`;
  feel.innerHTML = `Feels Like: <span>${conversion(feelValue)} C</span>`;
});
