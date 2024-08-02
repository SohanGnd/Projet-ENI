fetch("assets/promo.json")
  .then((response) => response.json())
  .then((data) => {
    const tableBody = document.querySelector("#dataTable tbody");
    const apprenantsContainer = document.querySelector(".apprenants-container");

    data.apprenants.forEach((apprenant) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${apprenant.nom}</td>
        <td>${apprenant.prenom}</td>
        <td>${apprenant.ville}</td>
        <td><button>Détail</button></td>
      `;
      tableBody.appendChild(row);

      const card = document.createElement("div");
      card.className = "apprenant-card";
      card.innerHTML = `
      <div class="apprenant-identity">
        <p>${apprenant.nom}</p>
        <p>${apprenant.prenom}</p>
      </div>
        <p>${apprenant.ville}</p>
        <button>Détail</button>
      `;
      apprenantsContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error", error));
