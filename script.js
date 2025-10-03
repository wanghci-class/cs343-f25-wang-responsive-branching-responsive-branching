const def = document.querySelector(".default");
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");

def.addEventListener("click", setDefault);
light.addEventListener("click", setLight);
dark.addEventListener("click", setDark);

function setDark(event) {
    event.preventDefault();
    document.body.className = "darkMode";
}

function setLight(event) {
    event.preventDefault();
    document.body.className = "lightMode";
}

function setDefault(event) {
    event.preventDefault();
    document.body.className = "";
}