const button = document.getElementById("1");
const input = document.getElementById("input");
const city = document.getElementById("place");
const time = document.getElementById("time");
const temperature = document.getElementById("temp");

async function getData(city) {
    const promise = await fetch(`https://api.weatherapi.com/v1/current.json?key=7dc494516c3149a3bb381022250506&q=${city}&aqi=yes`);
    return await promise.json();
}

button.addEventListener('click', async() =>{
    const value = input.value;
    const result = await getData(value);
    console.log(result);
    city.innerText = `${result.location.name},${result.location.country}`;
    time.innerText = result.location.localtime;
    temperature.innerText = result.current.temp_c;
 });