/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", (event) => {
  // paspaudimus  skaiciuoti nuo 0
  let clickCount = 0;

  //mygtukas "click me "
  const btnElement = document.getElementById("btn__element");

  // paspaudimu skaiciaus laukelis
  const stateElement = document.getElementById("btn__state");

  //  paspaudus mygtuka padideja vienu skaiciu
  btnElement.addEventListener("click", function () {
    clickCount++;
    stateElement.textContent = clickCount;
  });
});
