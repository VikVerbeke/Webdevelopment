const woord = "onoorbaar";

// Door de letters itereren, tot de op twee na laatste letter
for (let i = 0; i < woord.length - 2; i++) {
    // Een stukje van 3 letters uitsnijden (van index i tot i + 3)
    const trigram = woord.substring(i, i + 3);

    // Het resultaat op de console printen
    console.log(trigram);
}