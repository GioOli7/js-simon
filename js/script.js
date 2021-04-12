/*
Descrizione
Un alert() espone 5 numeri generati casualmente.
Da li parte un timer di 30 secondi.
Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

$('document').ready(function() {

    var startNumbers = [];      // array che conterrà i 5 numeri che verranno generati casualmente
    var ripetizioni = 5;    	// indica quanti numeri verranno generati
    var userNumbers = [];       // array che conterrà i 5 numeri che il giocatore deciderà di digitare
    var indovinati = 0;         // la quantità di numeri indovintati dal giocatore
    var guessedNumbers = [];    // array che conterrà la lista dei numeri indovinati dal giocatore
    var waitTime = 10000;       // tempo di attesa in millisecondi prima di permettere al giocatore di digitare i numeri

    // genero 5 numeri casuali unici
    for (var i = 0; i < ripetizioni; i++) {
        rand = random(1, 20);
        while(startNumbers.includes(rand)) {
            rand = random(1, 20);
        }
        startNumbers[i] = rand;
    }
    // esponi questo log per debug
    // console.log(startNumbers);

    //alert con i 5 numeri generati
    alert(startNumbers);

    // una volta premuto ok sull'alert
    // parte un timer 30 secondi
    console.log('attendi 30 secondi');

    var timer = setTimeout(function() {

        // dopo 30 secondi chiedi all'utente di inserire i 5 numeri
        console.log("OK, ora digita i 5 numeri apparsi all'inizio del gioco");

        for (var i = 1; i <= ripetizioni; i++) {
            var num = parseInt(prompt(`inserisci il ${i} numero`));
            // mi assicuto che il giocatore digiti numeri diversi dai precedenti
            while(userNumbers.includes(num) || num < 1 || isNaN(num)) {
                num = parseInt(prompt(`inserisci il ${i} numero`));
            }
            userNumbers.push(num);
        }

        console.log('-------------------------------------');
        // numeri generati
        console.log(`Numeri generati ${startNumbers}`);
        // lista numeri digitati dall'utente
        console.log(`numeri dell'utente ${userNumbers}`);
        console.log('------------Risultato----------------');

        // controllo quali e quanti numeri sono stati indovinati
        for (var i = 0; i < ripetizioni; i++) {
            if (startNumbers.includes(userNumbers[i])) {
                indovinati++;
                guessedNumbers.push(userNumbers[i]);
            }
        }

        // mostro risultato del gioco
        if (indovinati < 1) {
            console.log(`Peccato, non ha indovinato nessun numero! :(`);
        } else if (indovinati == 5) {
            console.log(`Sei un mostro, hai indovinato tutti e 5 i numeri!!`);
            console.log(`Lista numeri indovinati: ${guessedNumbers}`);
        } else {
            console.log(`Non male, vediamo come è andata:`);
            console.log(`Totale numeri indovinati: ${indovinati}`);
            console.log(`Lista numeri indovinati: ${guessedNumbers}`);
        }
    }, waitTime)

    // piccolo countdown :P
    var seconds = waitTime / 1000;
    if (waitTime <= 10000) {
        console.log(`Hey!! Modificare il tempo di attesa non vale :P :P`);
    }
    var sec = setInterval(function() {
        seconds--;
        switch (seconds) {
            case 29:
                console.log('Countdown...');
                break;
            case 20:
                console.log(`Mancano ${seconds} secondi...`);
                break;
            case 16:
                console.log('Si lo so, correggere gli esercizi degli studenti boolean può essere molto noioso a volte...');
                break;
            case 10:
                console.log(`Ci siamo quasi, ${seconds} secondi...`);
                break;
            case 5:
                console.log(`${seconds} secondi..`);
                break;
            case 4:
                console.log(`${seconds}`);
                break;
            case 3:
                console.log(`${seconds}`);
                break;
            case 2:
                console.log(`${seconds}`);
                break;
            case 1:
                console.log(`${seconds}`);
                break;
        }
    }, 1000)


    // FUNZIONI

    /**
     * return random number in a range from min to max
     * @param {*} min min value of random number
     * @param {*} max max value of random number
     * @returns random number
     */
    function random(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
})