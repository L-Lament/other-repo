function toTitleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

const nameForm = document.getElementById("nameForm");
const name = document.getElementById("nameInput").value;
const message = document.getElementById('displayMessage');



const apiKey = '22ba8edaf5e8c17146ab8570a8f296f5';
const city = 'Detroit';
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

        const content = document.getElementById('content')
    const div = document.createElement('div')
    const btn = document.createElement('button');

    btn.innerHTML = "enter Library";
    btn.classList = "enter-btn"
    btn.onclick = function(){
        window.location.href = "main.html"
    }
    content.appendChild(div)
    div.appendChild(btn)

        const name = document.getElementById("nameInput").value;
        event.preventDefault();
        nameForm.remove();
        document.getElementById("welcomeMessage").innerText = `Welcome ${toTitleCase(name)}`
        document.getElementById('timeOfDayMessage').innerText = `${greet},`;
        displayTime()
        setInterval(displayTime,1000)
        fetch(url)
          .then(response => response.json())
          .then(data => {
            document.getElementById("city-name").textContent = `The temperature in ${city} is`
            document.getElementById("temperature").textContent = `${data.main.temp}\u00B0F`;
            const currentWeather = data.weather[0].description
            document.getElementById("description").innerText = `The weather right now is ${currentWeather}`
          })
          .catch(error => console.error('Error fetching weather:', error));
          

    const lastVisit = localStorage.getItem('lastVisit');
    const displayElement = document.getElementById('last-visit-display');
    const welcome = document.getElementById("welcomeMessage")

    if (lastVisit) {
        welcome.innerText = "Welcome Back to my Library"
        displayElement.innerText = `hello ${toTitleCase(name)}! Your last visit was: ${lastVisit}`;
    } else {
        displayElement.innerText = "Hello! This is your first visit.";

  
    const now = new Date();
    localStorage.setItem('lastVisit', now.toLocaleString());
};
    })
    

      
}

setGreeting();

