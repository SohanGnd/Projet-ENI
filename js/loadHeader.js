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
            <input type="radio" id="liste" name="type_affichage" value="liste" />
            <label for="liste" class="options">Liste</label>
            <input type="radio" id="carte" name="type_affichage" value="carte" />
            <label for="carte" class="options">Cartes</label>
          `;
          headerOptions.appendChild(headerDisplay);
        }

        applyDisplayPreference();

        document
          .querySelectorAll('input[name="type_affichage"]')
          .forEach((input) => {
            input.addEventListener("change", (event) => {
              changeDisplay(event.target.value);
            });
          });
      }
    })
    .catch((error) => console.error("Error loading header:", error));
});

function applyDisplayPreference() {
  const displayPreference = localStorage.getItem("type_affichage") || "liste";

  const apprenantsContainer = document.querySelector(".apprenants-container");
  if (apprenantsContainer) {
    apprenantsContainer.classList.add(displayPreference);

    const radioInput = document.querySelector(
      `input[name="type_affichage"][value="${displayPreference}"]`
    );
    if (radioInput) {
      radioInput.checked = true;
    }

    const sectionOverflow = document.querySelector(".section_overflow");
    if (displayPreference === "carte") {
      sectionOverflow.classList.add("disable-overflow");
    } else {
      sectionOverflow.classList.remove("disable-overflow");
    }

    console.log("Display preference applied:", displayPreference);
  } else {
    console.error("Apprenants container not found!");
  }
}

function changeDisplay(displayType) {
  const apprenantsContainer = document.querySelector(".apprenants-container");
  if (apprenantsContainer) {
    apprenantsContainer.classList.remove("liste", "carte");
    apprenantsContainer.classList.add(displayType);

    const sectionOverflow = document.querySelector(".section_overflow");
    if (displayType === "carte") {
      sectionOverflow.classList.add("disable-overflow");
    } else {
      sectionOverflow.classList.remove("disable-overflow");
    }

    console.log("Display changed to:", displayType);
  } else {
    console.error("Apprenants container not found!");
  }
}
