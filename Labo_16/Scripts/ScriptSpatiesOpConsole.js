const setup = ()  => {
    let myButton = document.getElementById('button');

    myButton.addEventListener('click', splitsen)
}

const splitsen = () => {
    let tekstOmTeSplitsen = document.getElementById('input');
    let teSplitsen = tekstOmTeSplitsen.value;

   let resultaat = maakMetSpaties(teSplitsen);

    console.log(resultaat);
}

const maakMetSpaties = (inputText)  => {
    let verwijderSpaties = inputText.replaceAll(" ", "");
    let allesAanElkaar = verwijderSpaties.split('')
    let allesAanElkaarGeplakt ='';
    for(let i = 0; i < allesAanElkaar.length; i++) {
        allesAanElkaarGeplakt += allesAanElkaar[i] +' ';
    }

    return allesAanElkaarGeplakt;
}

window.addEventListener('load', setup);