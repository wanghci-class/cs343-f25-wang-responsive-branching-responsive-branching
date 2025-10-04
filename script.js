console.log('script.js loaded!');

document.addEventListener("DOMContentLoaded", function () {
  const osDefaultBtn = document.getElementById("os-default");
  const darkModeBtn = document.getElementById("dark-mode");
  const lightModeBtn = document.getElementById("light-mode");

  const body = document.body;

  osDefaultBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    body.classList.remove("dark", "light");
  });

  darkModeBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    body.classList.remove("light");
    body.classList.add("dark");
  });

  lightModeBtn.addEventListener("click", function (ev) {
    ev.preventDefault();
    body.classList.remove("dark");
    body.classList.add("light");
  });
});
