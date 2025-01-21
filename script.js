// aipi key and url without city
const apikey = 'a49237a4be2b23c0b3c438f34c0479c1';
const apiurl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apikey}`;

const searchbox = document.querySelector('.search input'); // taking searchbox data
const searchbtn = document.querySelector('.search button'); // taking button data
const weatherIcon = document.querySelector('.weather-icon'); // taking weater icon

// function to get and update data
async function checkWeather(city){

    const response = await fetch(apiurl+`&q=${city}`); 
    // adding city name in url and fetching data into response

    if(response.status == 404){
        document.querySelector('.error').style.display='block';
        document.querySelector('.weather').style.display='none';
    }
    // else{
    //     document.querySelector('.error').style.display='none';
    // }

    // changing response data into JSON Format
    var data = await response.json(); 
    // Showing Whole data ( just for our use )
    console.log(data); 

    // updating numbers on page
    document.querySelector('.city').innerHTML= data.name;
    document.querySelector('.temp').innerHTML= Math.round(data.main.temp);
    document.querySelector('.humidity').innerHTML= data.main.humidity;
    document.querySelector('.wind').innerHTML= data.wind.speed;
    
    // updating image ( weather[0].main will give weather conditions )
    let WeatherConditon = data.weather[0].main;
    // console.log(WeatherConditon);
    if(WeatherConditon=='Haze'){ WeatherConditon='mist';}
    weatherIcon.src = `images/${WeatherConditon}.png`;

    // updating weather display to block and error message to none
    document.querySelector('.error').style.display='none';
    document.querySelector('.weather').style.display='block';
};

// checkWeather('new york'); // to get something before user enter city name

// searchbox.value will return text written in the searchbox
searchbtn.addEventListener('click',()=>{ // creating event when click is done on button 
checkWeather(searchbox.value); 
})