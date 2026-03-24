const setup = () => {
    // 1. Zoek de knop en de div op in de DOM-tree
    let mijnKnop = document.getElementById("knop");
    let mijnDiv = document.getElementById("myDIV");

    // 2. Koppel een 'click' event listener aan de knop
    mijnKnop.addEventListener("click", () => {

        // 3. Maak een nieuwe element node aan van het type "p"
        let nieuweParagraaf = document.createElement("p"); //

        // 4. Geef de paragraaf wat tekst (anders is hij onzichtbaar)
        nieuweParagraaf.textContent = "Dit is het nieuwe p-element."; //

        // 5. Voeg de nieuwe node toe aan de parent node (de div)
        mijnDiv.appendChild(nieuweParagraaf); //

    });
};

window.addEventListener("load", setup);