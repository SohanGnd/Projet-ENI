document.addEventListener("DOMContentLoaded", function () {
  const headerPlaceholder = document.getElementById("header-placeholder");

  fetch("header.html")
    .then((response) => response.text())
    .then((data) => {
      headerPlaceholder.innerHTML = data;

      const currentPage = window.location.pathname;

      if (currentPage.endsWith("index.html")) {
        const headerOptions = document.querySelector(".header-options");
        if (headerOptions) {
          const headerDisplay = document.createElement("div");
          headerDisplay.id = "header-display";
          headerDisplay.innerHTML = `
            <span>Type d'affichage</span>
            <input type="radio" id="liste" name="type_affichage" checked />
            <label for="liste" class="options">Liste</label>
            <input type="radio" id="carte" name="type_affichage" />
            <label for="carte" class="options">Cartes</label>
          `;
          headerOptions.appendChild(headerDisplay);
        }
      }
    })
    .catch((error) => console.error("Error loading header:", error));
});
