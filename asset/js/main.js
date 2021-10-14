
const userEmail = document.getElementById('campo_email');
const tryButton = document.getElementById('generate');
const emailList = [
    'mario.rossi@gmail.com',
    'mario.bianchi@gmail.com',
    'mario.verdi@gmail.com',
    'mario.neri@gmail.com',
]
let messaggio1 = document.getElementById('messaggio1')



tryButton.addEventListener('click', function () {

    const tryEmail = userEmail.value;
    console.log(tryEmail);


    for (let i = 0; i < tryEmail.length; i++) {

        if (tryEmail == emailList[i]) {
            messaggio1.textContent = 'login effettuato correttamente, giochiamo a dadi!'
            break;
        } 

        else {
            messaggio1.textContent = 'login errato!'
        }
    }
});









