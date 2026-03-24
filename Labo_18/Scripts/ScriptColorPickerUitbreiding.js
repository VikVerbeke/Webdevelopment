const setup = () => {
    let sliderRood = document.getElementsByClassName("sliderRood");

    let sliderGroen = document.getElementsByClassName("sliderGroen");

    let sliderBlauw = document.getElementsByClassName("sliderBlauw");

    // we moeten zowel op het input als het change event reageren,
    // zie http://stackoverflow.com/questions/18544890
    sliderRood[0].addEventListener("change", update);
    sliderRood[0].addEventListener("input", update);

    sliderGroen[0].addEventListener("change", update);
    sliderGroen[0].addEventListener("input", update);

    sliderBlauw[0].addEventListener("change", update);
    sliderBlauw[0].addEventListener("input", update);


    /*VOOR UITBREIDING LABO 18 */
    let saveKnop = document.getElementById("saveKnop");
    saveKnop.addEventListener("click", bewaarKleur);
}

const update = () => {
    let sliderRood = document.getElementsByClassName("sliderRood");
    let valueRood=sliderRood[0].value;
    console.log("de waarde van de slider voor rood is momenteel : " + valueRood);

    let sliderGroen = document.getElementsByClassName("sliderGroen");
    let valueGroen=sliderGroen[0].value;
    console.log("de waarde van de slider voor groen is momenteel : " + valueGroen);

    let sliderBlauw = document.getElementsByClassName("sliderBlauw");
    let valueBlauw=sliderBlauw[0].value;
    console.log("de waarde van de slider voor blauw is momenteel : " + valueBlauw);


    // De variabele colorDemos en colorDemos[0].style.backgroundColor zijn naar hier verplaats omdat anders
    // de kleur instellen niet mogelijk was
    let colorDemos=document.getElementsByClassName("colorDemo");

    // maak het blokje rood
    colorDemos[0].style.backgroundColor= `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;


    let labelRood = document.getElementsByClassName("waardeRood");
    let labelGroen = document.getElementsByClassName("waardeGroen");
    let labelBlauw = document.getElementsByClassName("waardeBlauw");

    labelRood[0].textContent = valueRood;
    labelGroen[0].textContent = valueGroen;
    labelBlauw[0].textContent = valueBlauw;

}

/* U I T B R E I D I N G     L A B O    1 8 */

const bewaarKleur = () => {
    // 1. Haal de huidige waarden van de sliders op
    let valueRood = document.getElementsByClassName("sliderRood")[0].value;
    let valueGroen = document.getElementsByClassName("sliderGroen")[0].value;
    let valueBlauw = document.getElementsByClassName("sliderBlauw")[0].value;

    // 2. Maak een nieuwe div aan voor de swatch
    let nieuweSwatch = document.createElement("div");
    nieuweSwatch.className = "bewaardeSwatch";
    nieuweSwatch.style.backgroundColor = `rgb(${valueRood}, ${valueGroen}, ${valueBlauw})`;

    // 3. Sla de RGB waarden op in custom "data-" attributen op de div zelf
    nieuweSwatch.setAttribute("data-rood", valueRood);
    nieuweSwatch.setAttribute("data-groen", valueGroen);
    nieuweSwatch.setAttribute("data-blauw", valueBlauw);

    // 4. Maak de delete knop (X) aan
    let deleteKnop = document.createElement("button");
    deleteKnop.textContent = "X";
    deleteKnop.className = "deleteKnop";

    // 5. Koppel de event listeners voor deze specifieke swatch
    nieuweSwatch.addEventListener("click", laadKleur);
    deleteKnop.addEventListener("click", verwijderSwatch);

    // 6. Plak alles aan elkaar in de DOM
    nieuweSwatch.appendChild(deleteKnop); // Voeg knop toe aan swatch
    document.getElementById("opgeslagenKleuren").appendChild(nieuweSwatch); // Voeg swatch toe aan pagina
}

const laadKleur = (event) => {
    // event.currentTarget is de specifieke div waarop we klikken
    let geklikteSwatch = event.currentTarget;

    // Lees de opgeslagen waarden uit (via de data- attributen die we eerder instelden)
    let rood = geklikteSwatch.getAttribute("data-rood");
    let groen = geklikteSwatch.getAttribute("data-groen");
    let blauw = geklikteSwatch.getAttribute("data-blauw");

    // Stel de sliders in op deze waarden
    document.getElementsByClassName("sliderRood")[0].value = rood;
    document.getElementsByClassName("sliderGroen")[0].value = groen;
    document.getElementsByClassName("sliderBlauw")[0].value = blauw;

    // Roep je bestaande update() functie aan om de teksten en het hoofdblokje te verversen
    update();
}

const verwijderSwatch = (event) => {
    // Stop event bubbling! Anders klik je tegelijk ook op de onderliggende swatch en triggert laadKleur()
    event.stopPropagation();

    // event.target is de geklikte X knop. De parent is de swatch div.
    let swatchDieWegMoet = event.target.parentElement;
    swatchDieWegMoet.parentElement.removeChild(swatchDieWegMoet);
}

window.addEventListener("load", setup);