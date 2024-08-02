document.addEventListener("DOMContentLoaded", (event) => {
  loadPreferences();

  document.getElementById("save-button").addEventListener("click", (event) => {
    savePreferences();
  });
});

function loadPreferences() {
  const displayPreference = localStorage.getItem("type_affichage") || "liste";

  document.querySelector(
    `input[name="type_affichage"][value="${displayPreference}"]`
  ).checked = true;
}

function savePreferences() {
  const displayPreference = document.querySelector(
    'input[name="type_affichage"]:checked'
  ).value;

  localStorage.setItem("type_affichage", displayPreference);

  console.log("Preferences saved");
}
