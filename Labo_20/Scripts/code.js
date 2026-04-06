// 1. We vullen de array met de voorgedefinieerde data uit de opgave
let personen = [
    {
        voornaam: 'Jan',
        familienaam: 'Janssens',
        geboorteDatum: new Date('2010-10-10'),
        email: 'jan@example.com',
        aantalKinderen: 0
    },
    {
        voornaam: 'Mieke',
        familienaam: 'Mickelsen',
        geboorteDatum: new Date('1980-01-01'),
        email: 'mieke@example.com',
        aantalKinderen: 1
    },
    {
        voornaam: 'Piet',
        familienaam: 'Pieters',
        geboorteDatum: new Date('1970-12-31'),
        email: 'piet@example.com',
        aantalKinderen: 2
    }
];

// Globale variabele om bij te houden wie we bewerken.
// De opgave stelt voor om -1 te gebruiken voor een nieuwe persoon.
let huidigeIndex = -1;

// --- HULPFUNCTIES ---

// Deze functie zet een Date-object om naar een tekst in "jjjj-mm-dd" formaat
// Dit is nodig omdat de validatie en het input veld dit specifieke formaat verwachten.
const formatteerDatum = (datum) => {
    let jaar = datum.getFullYear();
    let maand = datum.getMonth() + 1; // getMonth() start bij 0, dus +1
    let dag = datum.getDate();

    if (maand < 10) maand = "0" + maand;
    if (dag < 10) dag = "0" + dag;

    return jaar + "-" + maand + "-" + dag;
};

// Functie om de startdata in de dropdown lijst (<select>) te plaatsen
const vulLijst = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.innerHTML = ""; // Zorg dat de lijst leeg is

    for (let i = 0; i < personen.length; i++) {
        let option = document.createElement("option");
        option.text = personen[i].voornaam + " " + personen[i].familienaam;
        // Volgens de opdracht gebruiken we de array-index als het id-attribuut
        option.id = i;
        lstPersonen.appendChild(option);
    }
};

// Deze functie haalt de data uit de array en toont ze in het formulier
const toonPersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    // Haal de index op via het id van het geselecteerde <option> element
    huidigeIndex = parseInt(lstPersonen.options[lstPersonen.selectedIndex].id);

    let persoon = personen[huidigeIndex];

    // Vul velden in (waarbij we de datum netjes formatteren)
    document.getElementById("txtVoornaam").value = persoon.voornaam;
    document.getElementById("txtFamilienaam").value = persoon.familienaam;
    document.getElementById("txtGeboorteDatum").value = formatteerDatum(persoon.geboorteDatum);
    document.getElementById("txtEmail").value = persoon.email;
    document.getElementById("txtAantalKinderen").value = persoon.aantalKinderen;

    clearAllErrors(); // Wis eventuele oude rode foutmeldingen uit validatie.js
};

// --- EVENT LISTENERS UIT DE OPGAVE ---

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht
const bewaarBewerktePersoon = () => {

    // valideer alle input data en controleer of er geen errors meer zijn
    valideer();

    // validatie.js geeft foute velden de class "invalid". We checken of die er zijn.
    let ongeldigeVelden = document.querySelectorAll(".invalid");

    if (ongeldigeVelden.length === 0) {
        // indien ok, bewaar de ingegeven data. Eerst data uit de velden halen:
        let inVoornaam = document.getElementById("txtVoornaam").value.trim();
        let inFamilienaam = document.getElementById("txtFamilienaam").value.trim();
        let inDatum = document.getElementById("txtGeboorteDatum").value.trim();
        let inEmail = document.getElementById("txtEmail").value.trim();
        let inKinderen = parseInt(document.getElementById("txtAantalKinderen").value.trim(), 10);

        // Maak een nieuw object aan met de correcte datatypes
        let bewaardePersoon = {
            voornaam: inVoornaam,
            familienaam: inFamilienaam,
            geboorteDatum: new Date(inDatum), // Zet string weer om naar Date object
            email: inEmail,
            aantalKinderen: inKinderen
        };

        let lstPersonen = document.getElementById("lstPersonen");

        if (huidigeIndex === -1) {
            // een nieuw aangemaakte persoon voegen we toe
            personen.push(bewaardePersoon);
            huidigeIndex = personen.length - 1; // Nieuwe index is achteraan de lijst

            let option = document.createElement("option");
            option.text = bewaardePersoon.voornaam + " " + bewaardePersoon.familienaam;
            option.id = huidigeIndex;
            lstPersonen.appendChild(option);
        } else {
            // een bestaande persoon in de lijst passen we aan
            personen[huidigeIndex] = bewaardePersoon;

            // Zoek het juiste element in de lijst op id en pas de tekst aan
            let option = document.getElementById(huidigeIndex.toString());
            option.text = bewaardePersoon.voornaam + " " + bewaardePersoon.familienaam;
        }

        // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
        lstPersonen.selectedIndex = huidigeIndex;
    }
};

// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
    huidigeIndex = -1; // -1 gebruiken we om te onthouden dat het een nieuwe persoon is

    document.getElementById("txtVoornaam").value = "";
    document.getElementById("txtFamilienaam").value = "";
    document.getElementById("txtGeboorteDatum").value = "";
    document.getElementById("txtEmail").value = "";
    document.getElementById("txtAantalKinderen").value = "";

    document.getElementById("lstPersonen").selectedIndex = -1; // Deselecteer de lijst

    clearAllErrors();
};

// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
    lstPersonen.addEventListener("change", toonPersoon);

    // Initialiseer de lijst bij het inladen van de pagina
    vulLijst();
};

window.addEventListener("load", setup);