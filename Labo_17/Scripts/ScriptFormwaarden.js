const setup = () => {
    document.getElementById('resultaatKnop').addEventListener('click', function(event) {

        event.preventDefault();

        // 1. Is roker (aangepast naar id="roker")
        const isRoker = document.getElementById('roker').checked;
        if (isRoker) {
            console.log("is roker");
        } else {
            console.log("is geen roker");
        }

        // 2. Moedertaal
        // We vangen dit eerst op in een variabele om een crash te voorkomen als er niets is aangevinkt
        const gekozenTaal = document.querySelector('input[name="moedertaal"]:checked');
        if (gekozenTaal) {
            console.log(`moedertaal is ${gekozenTaal.value}`);
        } else {
            console.log("moedertaal is niet gekozen");
        }

        // 3. Favoriete buurland
        const buurland = document.getElementById('buurland').value;
        console.log(`favoriete buurland is ${buurland}`);

        // 4. Bestelling
        const bestellingSelect = document.getElementById('bestelling');
        const gekozenOpties = [];

        for (let optie of bestellingSelect.selectedOptions) {
            gekozenOpties.push(optie.value);
        }

        const bestellingTekst = gekozenOpties.join(' ');
        console.log(`bestelling bestaat uit ${bestellingTekst}`);

    });
};

window.addEventListener("load", setup);