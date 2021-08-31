const hamburger = document.querySelector("#hamburger");
const body = document.querySelector("body");

const hamSource = {
    false: "./assets/shared/mobile/icon-hamburger.svg",
    true: "./assets/shared/mobile/icon-close.svg",
};

function handleHam() {
    hamburger.classList.toggle("open");
    body.classList.toggle("open");
    let isOpen = hamburger.classList.contains("open");

    hamburger.src = hamSource[isOpen];
}

console.log('hey')

hamburger?.addEventListener("click", handleHam);