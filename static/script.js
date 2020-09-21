'use strict';
// Elements

const button = document.getElementById('button');
const target = document.getElementById('target');
const textarea = document.getElementById('textarea');
// '@fanny01,@heloise244,@joris75,@edmond1456,@chloe2032,@brice3110,@sophie2603,@beatrice2005,@bernard2604,@caroline2a,@christiane69480,@yves789'

button.onclick = (e) => {
    // e=evenement, .preventDefault= n'execute pas la page action du formulaire
    e.preventDefault();
    // récupère la valeur de textarea
    const response = textarea.value;
    // appel de la fonction run
    run(response);
};

const run = (response) => {
    // tableau des candidats
    const candidates = response.split(',');
    // nombre de tours de boucle
    const rounds = candidates.length * 3;
    // délai initial
    const baseDelay = 100;
    //  délai courant
    let currentDelay = 0;

    let currentPickedNumber = false;
    
    for (let i = 0; i <= rounds; i++ ) {
        // position dans le tableau d'un candidat aléatoire
        const pickedNumber = Math.floor(Math.random() * candidates.length);
        
        // candidat au hasard
        const candidat = candidates[pickedNumber];
        //  délai à envoyer à la fonction sendDelayedMessage
        const delay = currentDelay + baseDelay;

        const message = (i === rounds) // condition
            ? 'the winner is ' + candidat + ' !!!' // oui
            : candidat; // non

        sendDelayedMessage(message, delay);

        // incrementation du délai courant
        currentDelay = currentDelay + baseDelay;
    }
}

// déclaration de la fonction sendDelayedMessage
const sendDelayedMessage = (message, delay) => {
    setTimeout(() => print(message), delay);
}

// déclaration de la fonction print
const print = (message) => {
    target.innerHTML = message;
}