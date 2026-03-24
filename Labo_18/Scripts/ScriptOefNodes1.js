const setup = () => {
    // Stap 1: Selecteer alle p-elementen met querySelectorAll
    // Let op: dit retourneert een NodeList (een soort lijst), zelfs als er maar 1 element is.
    let paragrafen = document.querySelectorAll("p");

    // Stap 2: Selecteer het eerste (en in dit geval enige) item uit de lijst met index [0]
    let mijnParagraaf = paragrafen[0];

    // Stap 3: Wijzig de tekst
    mijnParagraaf.textContent = "Goed gedaan!";
}

window.addEventListener("load", setup);