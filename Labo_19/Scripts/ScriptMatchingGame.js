let global = {
    IMAGE_PATH_PREFIX: "Afbeeldingen/",
    IMAGE_PATH_SUFFIX: ".jpg",
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,

    // 1. "Stop de namen van de te gebruiken afbeeldingen in een array"
    afbeeldingenNamen: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],

    // Hierin bewaren we straks de willekeurige volgorde van de 12 kaarten
    bordVolgorde: [],

    // 2. Globale variabele isBusy om klikken te blokkeren tijdens wachttijd
    isBusy: false,

    // Array om de 2 aangeklikte HTML-elementen tijdelijk te onthouden
    omgedraaideKaarten: []
}

const setup = () => {
    bouwSpeelveld();
}

const bouwSpeelveld = () => {
    const speelveld = document.getElementById("speelveld");
    speelveld.innerHTML = ""; // Maak het speelveld eerst leeg

    // Maak een tijdelijke array met 2x elke afbeelding
    let alleKaarten = [];
    for (let i = 0; i < global.AANTAL_KAARTEN; i++) {
        alleKaarten.push(global.afbeeldingenNamen[i]);
        alleKaarten.push(global.afbeeldingenNamen[i]);
    }

    // Schudden m.b.v. Math.random() en Math.floor() zoals in de theorie
    global.bordVolgorde = [];
    while (alleKaarten.length > 0) {
        let randomGetal = Math.floor(Math.random() * alleKaarten.length);
        // Haal de kaart uit 'alleKaarten' en voeg toe aan onze 'bordVolgorde'
        let gekozenKaart = alleKaarten.splice(randomGetal, 1)[0];
        global.bordVolgorde.push(gekozenKaart);
    }

    // Bouw dynamisch de nodige elementen
    for (let i = 0; i < global.bordVolgorde.length; i++) {
        let kaartImg = document.createElement("img");
        kaartImg.src = global.IMAGE_PATH_PREFIX + "achterkant.png";
        kaartImg.className = "kaart";

        // Geef een ID mee om later te weten dewelke in de array we aanklikken
        kaartImg.id = "kaart-" + i;

        kaartImg.addEventListener("click", draaiKaartOm);
        speelveld.appendChild(kaartImg);
    }
}

const draaiKaartOm = (event) => {
    // Check de voorwaarde (isBusy) zoals gesuggereerd in de cursus
    if (global.isBusy === true) {
        return;
    }

    let geklikteKaart = event.target;

    // Check of we deze kaart mogen omdraaien
    // "Om bij te houden welke kaarten al omgedraaid zijn kun je een css class gebruiken"
    if (geklikteKaart.classList.contains("omgedraaid") || geklikteKaart.style.visibility === "hidden") {
        return;
    }

    // Zoek het juiste prentje in onze bordVolgorde array via het id (bv. "kaart-4" -> index 4)
    let idTekst = geklikteKaart.id;
    let index = idTekst.split("-")[1];

    // Draai de kaart om
    geklikteKaart.src = global.IMAGE_PATH_PREFIX + global.bordVolgorde[index];
    geklikteKaart.classList.add("omgedraaid");

    // Voeg toe aan ons lijstje
    global.omgedraaideKaarten.push(geklikteKaart);

    // Als er 2 kaarten zijn omgedraaid, controleer dan of ze gelijk zijn
    if (global.omgedraaideKaarten.length === 2) {
        global.isBusy = true; // Niemand mag meer klikken
        controleerMatch();
    }
}

const controleerMatch = () => {
    let kaart1 = global.omgedraaideKaarten[0];
    let kaart2 = global.omgedraaideKaarten[1];

    // Check of de bestandsnamen (src) identiek zijn
    if (kaart1.src === kaart2.src) {
        kaart1.classList.add("goed");
        kaart2.classList.add("goed");

        // Wachttijd instellen
        setTimeout(() => {
            // "Je kunt ook met de zichtbaarheid spelen, zie visibility:hidden"
            kaart1.style.visibility = "hidden";
            kaart2.style.visibility = "hidden";

            kaart1.classList.remove("goed");
            kaart2.classList.remove("goed");

            resetBeurt();
        }, 1000);

    } else {
        kaart1.classList.add("fout");
        kaart2.classList.add("fout");

        setTimeout(() => {
            // Draai terug naar achterkant
            kaart1.src = global.IMAGE_PATH_PREFIX + "achterkant.png";
            kaart2.src = global.IMAGE_PATH_PREFIX + "achterkant.png";

            // Verwijder classes
            kaart1.classList.remove("omgedraaid");
            kaart2.classList.remove("omgedraaid");
            kaart1.classList.remove("fout");
            kaart2.classList.remove("fout");

            resetBeurt();
        }, 1200);
    }
}

const resetBeurt = () => {
    global.omgedraaideKaarten = [];
    global.isBusy = false;
}

window.addEventListener("load", setup);