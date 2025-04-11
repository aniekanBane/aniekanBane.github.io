document.addEventListener("DOMContentLoaded", () => {
  const attribute = "data-bs-theme";
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = themeToggle.querySelector("i");
//   const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute(attribute, savedTheme);
    updateIcon(savedTheme);
  }

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute(attribute);
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute(attribute, newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme);
  });

  function updateIcon(theme) {
    themeIcon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
});

window.addEventListener('load', (e) => {
  console.log("Page loaded.");
});
