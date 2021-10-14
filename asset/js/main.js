
const userEmail = document.getElementById('campo_email');
const tryButton = document.getElementById('generate');
const emailList = [
    'mario.rossi@gmail.com',
    'mario.bianchi@gmail.com',
    'mario.verdi@gmail.com',
    'mario.neri@gmail.com',
]



tryButton.addEventListener('click', function () {

    const tryEmail = userEmail.value;
    console.log(tryEmail);


    for (var i = 0; i < tryEmail.length; i++) {
        if (tryEmail == emailList[i]) {
        alert('login effettuato correttamente!');
        console.log('login effettuato correttamente!');
        break;
        } 


        
        else {
        alert('login errato!')
        }
    }
});









/* for (var i = 0; i < userEmail.length; i++) {
    if (userEmail == emailList[i]) {
    alert('login effettuato correttamente!');
    console.log('login effettuato correttamente!');
    break;
    } 
    else {
    alert('login errato!')
    }
} */
