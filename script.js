// select the get-weather div and add a click event listener
// the event listener will perform the network request

//select:
        // the city-input's value
        //the element with the 'city-name','temperature' and 'description' ids.
        // the OpenWeatherMap API Key
        //the url to the resource

//create the fetch function
        //use .then to return the response in json in the various elements

//1
const getWeather = document.getElementById('get-weather');
getWeather.addEventListener('click', async(req, res) => {

//2
    const cityInput = document.getElementById('city-input');
    const city = cityInput.value;
    //const api_key = '12b3e39e4cbc4274b15152821241605';
    const url = `http://api.weatherapi.com/v1/current.json?key=12b3e39e4cbc4274b15152821241605&q=${city}`;
    const icon = document.getElementById('icon')
    const cityName = document.getElementById('city-name');
    const temp = document.getElementById('temperature');
    const desc = document.getElementById('description');
    const spinner = document.getElementById('spinner')

//3
    await fetch(url)
        .then(response => response.json())
            //setTimeout(() =>
            //spinner.setAttribute('style', 'display:block;')  
            //     , 2000);
        
        .then(data => {
            //spinner.setAttribute('style', 'display:none;')
            icon.setAttribute('src', data.current.condition.icon);
            cityName.textContent = data.location.name;
            temp.textContent = `${data.current.temp_c}°C`;
            desc.textContent = data.current.condition.text;
        })
        

        .catch(err => console.log(err.message))
});


        