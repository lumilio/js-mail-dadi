
// inizializzo variabili

const userEmail = document.getElementById('campo_email');
const tryButton = document.getElementById('generate');
let messaggio1 = document.getElementById('messaggio1')
let manoPlayer = document.getElementById('dado-utente')
let manoComputer = document.getElementById('dado-computer')
let messaggio2 = document.getElementById('messaggio2')

// creo un arrey che contenga le gli input per accedere al gioco

const emailList = [
    'mario.rossi@gmail.com',
    'mario.bianchi@gmail.com',
    'mario.verdi@gmail.com',
    'mario.neri@gmail.com',
]

// creo due variabili che emulino il dado a 6 facce

const dadoPlayer = Math.floor(Math.random() * 6) + 1
const dadoComputer = Math.floor(Math.random() * 6) + 1

// rendo interattivo il pulsante di verifica

tryButton.addEventListener('click', function () {

    const tryEmail = userEmail.value;
    console.log(tryEmail);

    // se l'utente non inserire una corretta opzione di accesso non giocherà

    for (let i = 0; i < tryEmail.length; i++) {

        if (tryEmail == emailList[i]) {
            messaggio1.textContent = 'login effettuato correttamente, giochiamo a dadi!'
            manoPlayer.textContent = `il tuo dado ha fatto ${dadoPlayer}`
            manoComputer.textContent = `il mio dado ha fatto ${dadoComputer}`

            // aggiungo un verdetto in caso dei 3 risultati possibili

            if (dadoPlayer < dadoComputer){
                messaggio2.textContent = 'hai perso!' 
            }
            else if (dadoPlayer > dadoComputer){
                messaggio2.textContent = 'hai vinto!' 
            }
            else if (dadoPlayer = dadoComputer){
                messaggio2.textContent = 'pareggio!' 
            }
            break;
        } 
        else {
            messaggio1.textContent = 'login errato!'
        }
    }
});









