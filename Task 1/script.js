/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector("form").addEventListener("submit", function (e) {
    e.preventDefault();

    // gauti vartotojo info
    const kg = document.getElementById("search").value;

    // patikrinti info
    if (isNaN(kg) || kg <= 0) {
      alert("Please enter a valid weight in kilograms.");
      return;
    }

    // konvertuoti svori
    const pounds = kg * 2.2046;
    const grams = kg / 0.001;
    const ounces = kg * 35.274;

    // rodyti rezultatus
    document.getElementById("output").innerHTML = `
            <p><strong>Pounds (lb):</strong> ${pounds.toFixed(2)}</p>
            <p><strong>Grams (g):</strong> ${grams.toFixed(2)}</p>
            <p><strong>Ounces (oz):</strong> ${ounces.toFixed(2)}</p>
        `;

    // stilius
    document.getElementById("output").style.textAlign = "center";
    document.getElementById("output").style.fontSize = "40px";
  });
});
