const setup = () => {
    // Stap 1: Selecteer alle li-elementen
    let listItems = document.querySelectorAll("li");

// Stap 2: Itereer door elk li-element en wijzig de class
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].className = "listitem";
    }

// Stap 3: Maak een nieuw img-element aan
    let imageElement = document.createElement("img");

// Stap 4: Geef een waarde aan het src-attribuut
// (Vervang "jouw-foto.jpg" door het werkelijke pad naar je afbeelding)
    imageElement.setAttribute("src", "../Afbeeldingen/DSC_5392_J_Met_Tekst.jpg");

// Stap 5: Plaats dit img-element op het einde van de body
    document.body.appendChild(imageElement);
}

window.addEventListener("load", setup);