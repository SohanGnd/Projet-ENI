document.addEventListener("DOMContentLoaded", (event) => {
  loadTheme();

  const saveButton = document.getElementById("save-button");
  if (saveButton) {
    saveButton.addEventListener("click", (event) => {
      saveThemePreference();
    });
  }
});

function loadTheme() {
  const themePreference = localStorage.getItem("theme") || "clair";
  applyTheme(themePreference);

  const themeSelect = document.getElementById("theme-select");
  if (themeSelect) {
    themeSelect.value = themePreference;
  }
}

function saveThemePreference() {
  const themePreference = document.getElementById("theme-select").value;
  localStorage.setItem("theme", themePreference);
  applyTheme(themePreference);
  console.log("Theme preference saved");
}

function applyTheme(theme) {
  const body = document.body;
  if (theme === "clair") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
  } else if (theme === "sombre") {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
  }
}
