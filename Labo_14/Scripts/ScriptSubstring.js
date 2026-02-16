const setup = () => {

    let btnSubstring = document.getElementById("btnSubstring");

    btnSubstring.addEventListener("click", maakSubstring);
}

const maakSubstring = () => {

    let txtTekst = document.getElementById("txtTekst");
    let txtStart = document.getElementById("txtStart");
    let txtEnd = document.getElementById("txtEnd");
    let txtOutput = document.getElementById("txtOutput");


    let tekst = txtTekst.value;

    let start = parseInt(txtStart.value, 10);
    let end = parseInt(txtEnd.value, 10);

    let resultaat = tekst.substring(start, end);

    txtOutput.innerHTML = resultaat;
}

window.addEventListener("load", setup);