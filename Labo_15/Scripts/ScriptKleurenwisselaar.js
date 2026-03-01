const setup = () => {
    let but1 = document.getElementsByClassName("button1");

    let but2 = document.getElementsByClassName("button2");

    let but3 = document.getElementsByClassName("button3");

    // we moeten zowel op het input als het change event reageren,
    // zie http://stackoverflow.com/questions/18544890
    but1[0].addEventListener("click", update1);

    but2[0].addEventListener("click", update2);

    but3[0].addEventListener("click", update3);

}

const update1 = () => {
    let but1 = document.getElementsByClassName("button1");
    but1[0].classList.toggle('anderAchtergrondKleur');
}

const update2 = () => {
    let but2 = document.getElementsByClassName("button2");
    but2[0].classList.toggle('anderAchtergrondKleur');
}

const update3 = () => {
    let but3 = document.getElementsByClassName("button3");
    but3[0].classList.toggle('anderAchtergrondKleur');
}

// Dit is de eerste regel code die uitgevoerd wordt,
// de bovenstaande functie declaraties introduceren
// enkel de functies en voeren ze niet uit natuurlijk.
//
// Onderstaande zorgt ervoor dat de setup functie wordt
// uitgevoerd zodra de DOM-tree klaar is.
window.addEventListener("load", setup);