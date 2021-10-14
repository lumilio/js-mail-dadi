






//Chiedi all’utente la sua email, 

const userEmail = prompt('inserisci la tua mail');
const emailList = [
    'mario.rossi@gmail.com',
    'mario.bianchi@gmail.com',
    'mario.verdi@gmail.com',
    'mario.neri@gmail.com',
]

for (var i = 0; i < userEmail.length; i++) {
    if (userEmail == emailList[i]) {
      alert('login effettuato correttamente!');
      break;
    } else {
      alert('login errato!')
    }
  }











// stampa un messaggio appropriato sull’esito del controllo.
alert



