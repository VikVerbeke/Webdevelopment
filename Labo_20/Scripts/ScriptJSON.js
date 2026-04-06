const setup = () => {
    // OPDRACHT 1
    console.log("OPDRACHT 1 : ")
    let student = {
        voornaam : "Jan",
        familienaam : "Janssens",
        geboorteDatum : new Date("1993-12-31"),
        adres : { // een object
            straat : "Kerkstraat 13",
            postcode : "8500",
            gemeente : "Kortrijk"
        },
        isIngeschreven : true,
        namenVanExen :
            ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
        aantalAutos : 2
    }

    let str = JSON.stringify(student);

    console.log(str);

// OPDRACHT 2
    console.log("OPDRACHT 2 : ");
    let student2 = JSON.parse(str);

    console.log(student2);
}

window.addEventListener('load', setup);