let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal ms voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we kunnen annuleren
};



const setup = () => {
    window.addEventListener("resize", updateSize);
    updateSize();

    const foto = document.querySelector('.foto');

    foto.addEventListener('click', klikOpFoto);

    global.timeoutId = setInterval(verplaatsEnVeranderAfbeelding, global.MOVE_DELAY);
};

const updateSize = () => {
    // telkens het window van grootte verandert, wordt deze method opgeroepen
    // Merk op dat de <div> voor layout redenen "leeg" is,
    // omdat het enige kind absoluut gepositioneerd is. Als
    // we niets speciaals doen zal het dus 0px hoog zijn.
    // Daarom stellen we hier programmatorisch de breedte
    // en hoogte in, zodat het altijd alle ruimte inneemt.
    let speelveld=document.getElementById("playField");
    speelveld.style.width=window.innerWidth+"px";
    speelveld.style.height=window.innerHeight+"px";
}

const verplaatsEnVeranderAfbeelding = () => {
    const foto = document.querySelector('.foto');
    const speelveld = document.getElementById("playField");

    // De afbeelding veranderen door een willekeurig gekozen andere
    let randomGetal = Math.floor(Math.random() * global.IMAGE_COUNT);

    foto.src = global.IMAGE_PATH_PREFIX + randomGetal + global.IMAGE_PATH_SUFFIX;

    // Het verplaatsten van de afbeelding
    // Berekening van de maximale ruimte waarbinnen de foto mag bewegen
    let maxBreedte = speelveld.clientWidth - global.IMAGE_SIZE;
    let maxHoogte = speelveld.clientHeight - global.IMAGE_SIZE;

    // Bepaal willekeurige X en Y coördinaten
    let willekeurigeX = Math.floor(Math.random() * maxBreedte);
    let willekeurigeY = Math.floor(Math.random() * maxHoogte);

    // Pas de CSS top en left posities aan (.foto class moet 'position: absolute' bevatten !)
    foto.style.left = willekeurigeX + "px";
    foto.style.top = willekeurigeY + "px";
}

const klikOpFoto = (event) => {
    const foto = event.target;

    // Controleer of de bom (0.png) is aangeklikt
    if (foto.src.includes("0.png")) { // 0.png is de afbeelding van de bom
        // De timer wordt gestopt + een melding komt op het scherm.
        clearInterval(global.timeoutId);
        alert("Game Over! Je uiteindelijke score is: " + global.score);
    } else {
        global.score++;

        verplaatsEnVeranderAfbeelding();
    }
};


window.addEventListener("load", setup);


