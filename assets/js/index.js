const header = document.querySelector(".site-header");
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const darkMode = document.querySelector("#darkmode");
const themeIcon = darkMode.querySelector(".theme-icon");

const savedTheme = localStorage.getItem("theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

function setTheme(isDark) {
  document.body.classList.toggle("active", isDark);
  darkMode.setAttribute("aria-pressed", String(isDark));
  darkMode.setAttribute("aria-label", isDark ? "Ativar tema claro" : "Ativar tema escuro");
  themeIcon.textContent = isDark ? "☾" : "☀";
  localStorage.setItem("theme", isDark ? "dark" : "light");
}

setTheme(savedTheme ? savedTheme === "dark" : prefersDark);

window.addEventListener("scroll", () => {
  header.classList.toggle("shadow", window.scrollY > 12);
});

menu.addEventListener("click", () => {
  const isExpanded = navbar.classList.toggle("active");
  menu.classList.toggle("active", isExpanded);
  menu.setAttribute("aria-expanded", String(isExpanded));
  menu.setAttribute("aria-label", isExpanded ? "Fechar menu" : "Abrir menu");
});

navbar.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navbar.classList.remove("active");
    menu.classList.remove("active");
    menu.setAttribute("aria-expanded", "false");
    menu.setAttribute("aria-label", "Abrir menu");
  });
});

darkMode.addEventListener("click", () => {
  setTheme(!document.body.classList.contains("active"));
});

document.querySelector("#current-year").textContent = new Date().getFullYear();
