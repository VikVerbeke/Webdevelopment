let tekst = "De man van An geeft geen hand aan ambetante verwanten";
let zoektekst = "an";

// --- Oplossing met indexOf ---
let tellerVooruit = 0;
let positie = tekst.indexOf(zoektekst);

while (positie !== -1) {
    tellerVooruit++;
    // Zoek verder vanaf het karakter na de huidige treffer
    positie = tekst.indexOf(zoektekst, positie + 1);
}

console.log("Aantal keer 'an' gevonden (voorwaarts):", tellerVooruit);


// --- Oplossing met lastIndexOf ---
let tellerAchteruit = 0;
let positieAchteruit = tekst.lastIndexOf(zoektekst);

while (positieAchteruit !== -1) {
    tellerAchteruit++;
    // Bij lastIndexOf zoek je van achter naar voor, dus ga je 1 positie terug
    positieAchteruit = tekst.lastIndexOf(zoektekst, positieAchteruit - 1);
}

console.log("Aantal keer 'an' gevonden (achterwaarts):", tellerAchteruit);