// AANPASSING: Globale array bovenaan voor het opslaan van de history
let zoekopdrachtenLijst = [];

const setup = () => {
    let GOknop = document.getElementById('GOknop');

    GOknop.addEventListener('click', gaNaarSite);

    // AANPASSING: Bij het inladen van de pagina direct de opgeslagen data ophalen
    laadOpgeslagenZoekopdrachten();
};

const gaNaarSite = () => {
    let isPrefixGeldig = valideerInput();

    if(isPrefixGeldig){
        let url = getURL();
        let titel = getSiteNaam();
        let tekst = getSuffix();
        let kleur = getSiteKleur();

        // Opent de URL in een nieuw tablad
        window.open(url, '_blank');

        // AANPASSING: voegKaartjeToe aanroepen mét parameters
        voegKaartjeToe(titel, tekst, url, kleur);

        // AANPASSING: Sla het nieuwe object op in de localStorage
        voegToeAanLocalStorage(titel, tekst, url, kleur);

        // AANPASSING: Maak het tekstveld leeg na de zoekopdracht
        document.getElementById('Zoekopdracht').value = "";
    }
    else {
        genereerFoutMelding();
    }
};

const valideerInput = () => {
    let input = document.getElementById('Zoekopdracht').value.trim();

    // Substring maken om te kijken of site geldig is
    let sitePrefix = input.substring(0, 2).toLowerCase();

    let isGeldig = false;

    switch (sitePrefix) {
        case "/g":
        case "/y":
        case "/x":
        case "/i":
            isGeldig = true;
            break;
        default:
            isGeldig = false;
    }

    return isGeldig;
};

// GETTERS

const getPrefix = () => {
    let isPrefixGeldig = valideerInput();

    if(isPrefixGeldig) {
        let input = document.getElementById('Zoekopdracht').value.trim();

        let sitePrefix = input.substring(0, 2).toLowerCase();

        return sitePrefix;
    }
};

const getSuffix = () => {
    let isPrefixGeldig = valideerInput();

    if(isPrefixGeldig) {
        let input = document.getElementById('Zoekopdracht').value.trim();

        let siteSuffix = input.substring(3).toLowerCase();

        return siteSuffix;
    }
};

const getURL = () => {
    let isPrefixGeldig = valideerInput();

    if (isPrefixGeldig) {
        let prefix = getPrefix();
        let suffix = getSuffix();

        const correcteURLzoekString = encodeURIComponent(suffix);

        let url = " ";

        switch (prefix) {
            case "/g":
                url = "https://www.google.com/search?q=" + correcteURLzoekString;
                break;
            case "/y":
                url = "https://www.youtube.com/results?search_query=" + correcteURLzoekString;
                break;
            case "/x":
                // Voor hashtags halen we de spaties uit de zoekterm
                let xZoekterm = encodeURIComponent(suffix.replace(/\s+/g, ''));
                url = "https://x.com/hashtag/" + xZoekterm;
                break;
            case "/i":
                // Voor Instagram halen we ook de spaties weg
                let instaZoekterm = encodeURIComponent(suffix.replace(/\s+/g, ''));
                url = "https://www.instagram.com/explore/tags/" + instaZoekterm + "/";
                break;
        }

        return url;
    }
};

const getSiteNaam = () => {
    let isPrefixGeldig = valideerInput();

    let siteNaam = " ";

    if (isPrefixGeldig) {
        let prefix = getPrefix();

        switch (prefix) {
            case "/g":
                siteNaam = "Google";
                return siteNaam;
                break;
            case "/y":
                siteNaam = "YouTube";
                return siteNaam;
                break;
            case "/x":
                siteNaam = "X / Twitter";
                return siteNaam;
                break;
            case "/i":
                siteNaam = "Instagram";
                return siteNaam;
                break;
        }
    }
}

const getSiteKleur = () => {
    let isPrefixGeldig = valideerInput();

    let kleur = " ";

    if (isPrefixGeldig) {
        let prefix = getPrefix();

        switch (prefix) {
            case "/g":
                kleur = "rgb(66, 133, 244)";
                return kleur;
                break;
            case "/y":
                kleur = "rgb(255, 0, 0)";
                return kleur;
                break;
            case "/x":
                kleur = "rgb(29, 161, 242)";
                return kleur;
                break;
            case "/i":
                kleur = "rgb(195, 42, 163)";
                return kleur;
                break;
        }
    }
};

// METHODES

const genereerFoutMelding = () => {
    alert("Unknown command/prefix");
}

const voegKaartjeToe = (titel, tekst, bestemmingURL, kleur) => {

    // AANPASSING: Een kolom wrapper toegevoegd om Bootstrap layout toe te passen
    let colDiv = document.createElement("div");
    // Bootstrap responsive grid classes: 100% breed op mobiel, 50% op md schermen, 33% op lg schermen.
    colDiv.setAttribute("class", "col-12 col-md-6 col-lg-4");

    let nieuweKaart = document.createElement("div");
    // AANPASSING: Bootstrap 'card' class en text-white voor leesbaarheid op gekleurde achtergrond
    nieuweKaart.setAttribute("class", "card text-white h-100");
    // AANPASSING: De achtergrondkleur zetten we direct op de card
    nieuweKaart.style.backgroundColor = kleur;

    let body = document.createElement("div");
    body.setAttribute("class", "card-body d-flex flex-column");

    let cardTitle = document.createElement("h5");
    cardTitle.setAttribute("class", "card-title");
    cardTitle.textContent = titel;

    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text mb-4");
    cardText.textContent = tekst;

    let cardGOlink = document.createElement("a");
    cardGOlink.setAttribute("href", bestemmingURL);
    cardGOlink.setAttribute("target", "_blank");
    // Voegt het target="_blank" attribuut toe aan de link, zodat de website altijd in een nieuw tabblad opent.


    // AANPASSING: Bootstrap 'btn' class
    cardGOlink.setAttribute("class", "btn btn-dark mt-auto");
    cardGOlink.style.width = "fit-content";
    cardGOlink.textContent = "Go!";

    // Bouw de kaart op
    body.appendChild(cardTitle);
    body.appendChild(cardText);
    body.appendChild(cardGOlink);

    nieuweKaart.appendChild(body);
    colDiv.appendChild(nieuweKaart);

    // Voeg toe aan de DOM in het #history element
    document.getElementById("history").appendChild(colDiv);
};

// AANPASSING: Nieuwe functie die direct een object aanmaakt en opslaat in localStorage
const voegToeAanLocalStorage = (titel, tekst, url, kleur) => {
    let nieuwObject = {
        title: titel,
        text: tekst,
        url: url,
        color: kleur
    };

    zoekopdrachtenLijst.push(nieuwObject);

    localStorage.setItem("mijnZoekopdrachten", JSON.stringify(zoekopdrachtenLijst));
}

// AANPASSING: Volledig nieuwe functie ter vervanging van bewaarZoekopdrachten()
const laadOpgeslagenZoekopdrachten = () => {
    let opgeslagenJSON = localStorage.getItem("mijnZoekopdrachten");

    if (opgeslagenJSON !== null) {
        zoekopdrachtenLijst = JSON.parse(opgeslagenJSON);

        for (let i = 0; i < zoekopdrachtenLijst.length; i++) {
            let opgeslagenItem = zoekopdrachtenLijst[i];

            voegKaartjeToe(
                opgeslagenItem.title,
                opgeslagenItem.text,
                opgeslagenItem.url,
                opgeslagenItem.color
            );
        }
    }
};

window.addEventListener('load', setup);