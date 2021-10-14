
const theList = document.querySelector('#list');

// genero 100 li con un loop for all'iterno di ul 

for (let i = 1; i <= 100; i++ ) {
    const theBox = document.createElement("li");
    theBox.append(i)
    theList.append(theBox)

// con le istruzioni condizionali cambio il colore dei box multipli di 3 e 5 

    if (i % 3 == 0 && i % 5 == 0) {
        theBox.innerHTML = "fizzbuzz"
        theBox.style.backgroundColor = "#DE5471";
    }
    else if (i % 3 == 0) {
        theBox.innerHTML = "fizz"
        theBox.style.backgroundColor = "#61D2A4";
    }
    else if (i % 5 == 0) {
        theBox.innerHTML = "buzz"
        theBox.style.backgroundColor = "#F9D277";
    }
    else {
        theBox.style.backgroundColor = "#3D88AE";
    }
} 






