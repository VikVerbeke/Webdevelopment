let familieleden = ['Hans', 'Veerle', 'Monica', 'Norbert', 'Birgitte'];

console.log(familieleden.length);

console.log(familieleden[0]);
console.log(familieleden[2]);
console.log(familieleden[4]);

let extraNaamVoorArray = prompt('Voeg een extra naam toe.')

function voegNaamToe(extraNaamVoorArray) {
    familieleden.push(extraNaamVoorArray);
    console.log(familieleden);
}


voegNaamToe(extraNaamVoorArray);

console.log(familieleden);

let tekst = familieleden.toString();
console.log(tekst);