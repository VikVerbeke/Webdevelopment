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

// Dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);