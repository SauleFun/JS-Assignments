/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotjui atėjus į tinkaį kreipsis į cars.json failą
ir iš atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
  //fetch ,  uzkrauti cars.json faila

  fetch("cars.json")
    .then((response) => response.json())

    .then((data) => {
      const output = document.getElementById("output");

      // masinos gamintojas

      data.forEach((car) => {
        const carDiv = document.createElement("div");
        carDiv.classList.add("car");

        const brand = document.createElement("h2");
        brand.textContent = car.brand;
        brand.style.color = "red";
        carDiv.appendChild(brand);

        //modelio sarasas

        const modelsList = document.createElement("ul");
        car.models.forEach((model) => {
          const modelItem = document.createElement("li");
          modelItem.textContent = model;
          modelsList.appendChild(modelItem);
        });

        carDiv.appendChild(modelsList);
        output.appendChild(carDiv);
      });
    });
});
