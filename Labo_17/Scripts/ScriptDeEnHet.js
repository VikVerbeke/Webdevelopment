const zin1 = "Gisteren zat de jongen op de stoep en at de helft van de appel";
const zin2 = "De man riep de";

const vervangTekst = (tekst) => {
    let result = "";

    for (let i = 0; i < tekst.length; i++) {

        if(tekst[i] ==='d' && tekst[i+1] === 'e') {
            result+= 'het';
            i++;
        } else {
            result += tekst[i];
        }
    }

    console.log(result);
}

vervangTekst(zin1.toLowerCase());
vervangTekst(zin2.toLowerCase());