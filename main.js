function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
`
function updateESTClock() {
  const now = new Date();
  
  // Format options for Eastern Time
  const options = {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  // Use toLocaleString to force the Eastern timezone
  const estTime = now.toLocaleString('en-US', options);
  
  document.getElementById('displayDateTime').textContent = estTime;
}
// Update every second (1000 milliseconds)
setInterval(updateESTClock, 1000);

// Call immediately so there's no 1-second delay on load
var time = updateESTClock();
`

const nameForm = document.getElementById("nameForm");
const name = document.getElementById("nameInput").value;
const message = document.getElementById('displayMessage');



const apiKey = '22ba8edaf5e8c17146ab8570a8f296f5'; // Replace with your OpenWeatherMap API key
const city = 'Flint'; // Replace with your city
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},us&appid=${apiKey}&units=imperial`;

function displayTime() {
    const now = new Date();
    document.getElementById('time').innerText = `it is now ${now.toLocaleTimeString()} EST`;
}


function setGreeting() {
    const hr = new Date().getHours();
    let greet = "";
    if (hr < 12) greet = "Good Morning";
    else if (hr < 18) greet = "Good Afternoon";
    else greet = "Good Evening";

    
    nameForm.addEventListener('submit', (event)=>{
        const name = document.getElementById("nameInput").value;
        event.preventDefault();
        nameForm.remove();
        document.getElementById("welcomeMessage").innerText = `Welcome ${name}`
        document.getElementById('timeOfDayMessage').innerText = `${greet}`;
        displayTime()
        setInterval(displayTime,1000)
        fetch(url)
          .then(response => response.json())
          .then(data => {
            document.getElementById("city-name").textContent = `The temperature in ${city} is`
            document.getElementById("temperature").textContent = `${data.main.temp}\u00B0F`;
          })
          .catch(error => console.error('Error fetching weather:', error));
    })
    
      
}

// 3. Fetch and Display Weather

// Initialize
setGreeting();
`weatherFn(city);`

