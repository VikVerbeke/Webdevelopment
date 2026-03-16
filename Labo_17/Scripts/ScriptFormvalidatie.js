const isGetal = (tekst) => {
    return !isNaN(tekst);
};

const setup = () => {
    const form = document.getElementById('validatieForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let isFormulierGeldig = true;

        // Fout tonen met directe style manipulatie
        const toonFout = (id, message) => {
            const inputVeld = document.getElementById(id);
            const errorSpan = document.getElementById(`err-${id}`);

            inputVeld.style.border = "2px solid red"; // Rood kader
            errorSpan.style.color = "red";            // Rode tekst
            errorSpan.innerText = message;

            isFormulierGeldig = false;
        };

        // Fout wissen door de style leeg te maken
        const wisFout = (id) => {
            const inputVeld = document.getElementById(id);
            const errorSpan = document.getElementById(`err-${id}`);

            inputVeld.style.border = ""; // Reset naar standaard kader
            errorSpan.innerText = "";
        };

        const voornaam = document.getElementById('voornaam').value.trim();
        const familienaam = document.getElementById('familienaam').value.trim();
        const geboortedatum = document.getElementById('geboortedatum').value.trim();
        const email = document.getElementById('email').value.trim();
        const kinderen = document.getElementById('kinderen').value.trim();

        // 1. Validatie Voornaam
        wisFout('voornaam');
        if (voornaam.length > 30) {
            toonFout('voornaam', 'max. 30 karakters');
        }

        // 2. Validatie Familienaam
        wisFout('familienaam');
        if (familienaam === "") {
            toonFout('familienaam', 'verplicht veld');
        } else if (familienaam.length > 50) {
            toonFout('familienaam', 'max 50 karakters');
        }

        // 3. Validatie Geboortedatum
        wisFout('geboortedatum');
        if (geboortedatum === "") {
            toonFout('geboortedatum', 'verplicht veld');
        } else {
            if (geboortedatum.length !== 10) {
                toonFout('geboortedatum', 'formaat is niet jjjj-mm-dd');
            } else {
                const jaar = geboortedatum.slice(0, 4);
                const streepje1 = geboortedatum.slice(4, 5);
                const maand = geboortedatum.slice(5, 7);
                const streepje2 = geboortedatum.slice(7, 8);
                const dag = geboortedatum.slice(8, 10);

                if (streepje1 !== '-' || streepje2 !== '-' ||
                    !isGetal(jaar) || !isGetal(maand) || !isGetal(dag) ||
                    parseInt(maand) < 1 || parseInt(dag) < 1) {
                    toonFout('geboortedatum', 'formaat is niet jjjj-mm-dd');
                }
            }
        }

        // 4. Validatie Email
        wisFout('email');
        if (email === "") {
            toonFout('email', 'verplicht veld');
        } else {
            const eersteApenstaartje = email.indexOf('@');
            const laatsteApenstaartje = email.lastIndexOf('@');

            if (eersteApenstaartje === -1 ||
                eersteApenstaartje !== laatsteApenstaartje ||
                eersteApenstaartje < 1 ||
                eersteApenstaartje > email.length - 2) {
                toonFout('email', 'geen geldig email adres');
            }
        }

        // 5. Validatie Aantal kinderen
        wisFout('kinderen');
        if (kinderen === "" || !isGetal(kinderen) || parseInt(kinderen) < 0) {
            toonFout('kinderen', 'is geen positief getal');
        } else if (parseInt(kinderen) >= 99) {
            toonFout('kinderen', 'is te vruchtbaar');
        }

        // 6. Eindresultaat
        if (isFormulierGeldig) {
            alert('proficiat!');
        }
    });
};

window.addEventListener("load", setup);