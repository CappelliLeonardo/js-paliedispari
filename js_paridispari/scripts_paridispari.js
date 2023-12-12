

// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// scegli pari o dispari 



const button = document.getElementById('button');

button.addEventListener("click" , function (){
    let numeroRandomPc = Math.floor (Math.random() * 5)+1;

    console.log("Numero del pc ", numeroRandomPc);
    numero_pc.innerHTML = ' il computer ha ottenuto un punteggio di:' + numeroRandomPc;

    const pariDispari = document.getElementById('sceltauno').value;
    console.log ("è stato scelto", pariDispari, typeof pariDispari);

    const numeroSceltoUser = parseInt(document.getElementById('sceltadue').value);
    console.log ("questa è la scelta del numero", numeroSceltoUser, typeof numeroSceltoUser);

    let risultato = pari (numeroRandomPc + numeroSceltoUser);
    console.log(risultato);

});




function pari (numero) {
    if ( (numero) % 2 == 0 ){
        return ('pari')

    }
    else{
        return ('dispari')
    }

};



    // somma dei due numeri randomici

// stabiliamo se somma numeri è pari o dispari tramite la funzione 

// dichiarare vincitore