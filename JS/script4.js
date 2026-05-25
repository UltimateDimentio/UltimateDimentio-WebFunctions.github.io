const resultBox = document.getElementById("result");

function convertTemp() {
    resultBox.classList.add("activeResult");

    let temp = parseFloat(document.getElementById("temp").value)
    let unit = document.getElementById("unit").value;

    if(isNaN(temp)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }
    let celsius;
    let fahrenheit;
    let kelvin

    if(unit === "c") {
        celsius = temp;
        fahrenheit = (temp * 9 / 5) + 32;
        kelvin = temp + 273.15;
    }
    else if(unit === "f") {
        fahrenheit = temp;
        celsius = (temp - 32) * 5 / 9;
        kelvin = celsius + 273.15;
    }
    else {
        kelvin = temp;
        celsius = temp - 273.15;
        fahrenheit = (celsius*9/5)+32
    }
    document.getElementById("result").innerHTML = 
    "Celsius: " + celsius.toFixed(2) + "<br></br>" + 
    "Fahrenheit: " + fahrenheit.toFixed(2) + "<br><br>" + 
    "Kelvin: " + kelvin.toFixed(2)
}