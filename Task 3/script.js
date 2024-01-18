/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Infrmacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;
"
Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("btn");
  const output = document.getElementById("output");
  const ENDPOINT = "https://api.github.com/users";

  button.addEventListener("click", function () {
    fetchUsers();
  });

  function fetchUsers() {
    fetch(ENDPOINT)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((users) => {
        displayUsers(users);
      });
  }

  function displayUsers(users) {
    const usersHtml = users
      .map(
        (user) => `
            <div class="user">
                <img src="${user.avatar_url}" alt="${user.login}" width="50" height="50">
                <p>${user.login}</p>
            </div>
        `
      )
      .join("");

    output.innerHTML = usersHtml;
  }
});
