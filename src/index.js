
const run = () => {

    const response = '@fanny01,@heloise244,@joris75,@edmond1456,@chloe2032,@brice3110,@sophie2603,@beatrice2005,@bernard2604,@caroline2a,@christiane69480,@yves789';
    // tableau des candidats
    const candidates = response.split(',');
    // nombre de tours de boucle
    const rounds = candidates.length * 3;
    // délai initial
    const baseDelay = 100;
    //  délai courant
    let currentDelay = 0;
    
    for (let i = 0; i <= rounds; i++ ) {
        // position dans le tableau d'un candidat aléatoire
        const pickedNumber = Math.floor(Math.random() * candidates.length);
        // candidat au hasard
        const candidat = candidates[pickedNumber];
        //  délai à envoyer à la fonction sendDelayedMessage
        const delay = currentDelay + baseDelay;

        let message = candidat;

        if (i === rounds) {
            message = 'the winner is ' + candidat + ' !!!';
        }

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
    console.log(message);
} 

run();

