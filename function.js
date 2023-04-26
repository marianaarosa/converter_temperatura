function fahrenheittoCelsius() {
  let fahrenheit = document.getElementById("fahrenheit").value;

  if (fahrenheit == "") {
    alert("Por favor preenchar a temperatura em Fahrenheit");
    return;
  }
  let result = (parseFloat(fahrenheit) - 32) / 1.8;

  document.getElementById("resultCelsius").value = result;
}

function celsiustoFahrenheit() {
  let celsius = document.getElementById("celsius").value;

  if (celsius == "") {
    alert("Por favor preenchar a temperatura em Celsius");
    return;
  }
  let result = (parseFloat(celsius) * 1.8) + 32;

  document.getElementById("resultFahrenheit").value = result;
}