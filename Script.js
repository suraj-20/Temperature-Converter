
const celsiusField = document.querySelector("#celcius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#convert-btn");
const tempType = document.querySelector("#temp-type");


window.addEventListener("load", () => {
    degree.value = "";
    celsiusField.innerHTML = "";
})

convertBtn.addEventListener("click", (e) => {
    e.preventDefault();
    convertToCelsius();
    console.log("clicked");
})

function convertToCelsius() {
    let inputValue = degree.value;

    if(tempType.value === "fahrenheit") {
        const fahrenheitToCelsius = (inputValue - 32) * (5/9);
        celsiusField.innerHTML = `${fahrenheitToCelsius.toFixed(3)} &deg;c`;
    }
    else if(tempType.value === "kelvin") {
        const kelvinToCelsius = inputValue - 273.15;
        celsiusField.innerHTML = `${kelvinToCelsius.toFixed(3)} &deg;c`;
    }
}