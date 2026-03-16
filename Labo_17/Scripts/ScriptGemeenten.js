const setup = () =>{
// 1. Maak de lege array aan
    let gemeentenLijst = [];

// 2. Stel de eerste vraag aan de gebruiker
    let gemeente = prompt("Geef een gemeente in:");

// 3. De lus
    while (gemeente !== null && gemeente.toLowerCase() !== "stop") {

        // Voeg toe aan de lijst als het geen lege tekst is
        if (gemeente.trim() !== "") {
            gemeentenLijst.push(gemeente);
        }

        // Vraag aan het einde van de lus om de volgende invoer
        gemeente = prompt("Geef een gemeente in (of typ 'stop'):");
    }

// 4. Sorteer de lijst alfabetisch
    gemeentenLijst.sort();

// 5. Bouw de keuzelijst op en zet deze op het scherm
    if (gemeentenLijst.length > 0) {
        let htmlKeuzelijst = '<select>';

        for (let i = 0; i < gemeentenLijst.length; i++) {
            htmlKeuzelijst += `<option value="${gemeentenLijst[i]}">${gemeentenLijst[i]}</option>`;
        }

        htmlKeuzelijst += '</select>';
        document.getElementById("resultaat").innerHTML = htmlKeuzelijst;
    } else {
        document.getElementById("resultaat").innerHTML = "<p>Er zijn geen gemeenten ingevoerd.</p>";
    }
}

window.addEventListener('load', setup)