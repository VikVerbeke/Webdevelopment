const setup = () => {
    let herReken = document.getElementsByClassName("herberekenKnop");
    herReken[0].addEventListener("click", herbereken);
}

const herbereken = () => {
    // 1. Haal alle lijsten met elementen in één keer op
    let prijzen = document.getElementsByClassName("Prijs");
    let aantallen = document.getElementsByClassName("aantal");
    let btws = document.getElementsByClassName("BTW");
    let subtotalen = document.getElementsByClassName("SubTot"); // Let op: class naam overal in HTML gelijk maken!
    let eindTotElement = document.getElementsByClassName("Eindtotaal");

    let eindTotaal = 0; // Hierin tellen we straks alle subtotalen op

    // 2. Loop door alle gevonden producten heen
    for (let i = 0; i < prijzen.length; i++) {

        // Specifieke informatie van de huidige rij (i) uithalen
        let prijs = parseFloat(prijzen[i].innerText);
        let btw = parseFloat(btws[i].innerText);
        let aantal = parseFloat(aantallen[i].value);

        // De berekeningen maken voor deze rij
        let prijsMetBTW = prijs + (prijs * (btw / 100));
        let totaalPrijs = prijsMetBTW * aantal;

        // Het berekende subtotaal in het juiste veld zetten
        subtotalen[i].innerText = totaalPrijs.toFixed(2) + " Eur";

        // Het subtotaal optellen bij het grote eindtotaal
        eindTotaal = eindTotaal + totaalPrijs;
    }

    // 3. Tot slot het eindtotaal in de HTML plaatsen
    eindTotElement[0].innerText = eindTotaal.toFixed(2) + " EUR";
}

window.addEventListener("load", setup);