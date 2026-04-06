const setup = () => {
    const geboortedatum = new Date(2007, 2, 18);

    const huidigeDatum = new Date();

    const verschilInMS = huidigeDatum - geboortedatum;

    const millisecondenPerDag = 1000 * 60 * 60 * 24;

    const verschilInDagen = Math.floor(verschilInMS / millisecondenPerDag);

    console.log(verschilInDagen);
}

window.addEventListener('load', setup);