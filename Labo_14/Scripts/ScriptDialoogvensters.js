window.alert("Dit is een mededeling.")
window.confirm("Weet je zeker dat je verder wilt gaan?")
window.prompt("Wat is uw naam", "John Doe")

let returnValueTest = window.confirm("Ben jij een mens?")

console.log(returnValueTest);

let favorieteDierVraag = window.prompt("Wat is uw favoriete dier?", "Gouden Tijger")

if(favorieteDierVraag !== 'Gouden Tijger'){
    console.log(favorieteDierVraag);
}