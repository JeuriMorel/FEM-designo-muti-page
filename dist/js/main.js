const hamburgerBtn = document.querySelector("#hamburger-toggle");
const hamburgerIcon = document.querySelector("#hamburger");
const body = document.querySelector("body");

const hamSource = {
    false: "./assets/shared/mobile/icon-hamburger.svg",
    true: "./assets/shared/mobile/icon-close.svg",
};

function handleHam() {
    hamburgerIcon.classList.toggle("open");
    body.classList.toggle("open");
    let isOpen = hamburgerIcon.classList.contains("open");

    hamburgerIcon.src = hamSource[isOpen];
}

hamburgerBtn?.addEventListener("click", handleHam);