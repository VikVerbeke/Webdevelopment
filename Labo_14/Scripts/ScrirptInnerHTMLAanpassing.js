const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig");

    btnWijzig.addEventListener("click", veranderen);
}

const veranderen = () => {
    let pElement = document.getElementById("txtOutput");

    pElement.innerHTML = "Welkom!";
}

window.addEventListener('load', setup);