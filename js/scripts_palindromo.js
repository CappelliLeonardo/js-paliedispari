// Ciao ragazzi,
// Esercizio di oggi: Pali e Dispari
// nome repo: js-paliedispari
// Palidroma
// Chiedere all'utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma
// Pari e Dispari
// L'utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.
// Consigli del giorno
// 1. Scriviamo sempre in italiano i passaggi che vogliamo fare
// 2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.


// // collegare una variabile che contiene l'input dell'user in html
// const userLetter = document.getElementById('user-letters').value;

// console.log (' stampa', userLetter, typeof userLetter);


// CHIEDERE ALL'UTENTE DI INSERIRE UNA PAROLA 

const userWord = prompt ('Inserisci una parola:');
console.log ('userWord', userWord, typeof userWord);

let reverseWord = '';
// IN QUESTO MODO STAMPIAMO AL CONTRARIO IN CONSOLE LA PAROLA
for (let i = userWord.length - 1; i >= 0 ; i--){
    console.log(userWord[i]);

    reverseWord += userWord[i];
}

console.log( 'reverseWord' , reverseWord, typeof reverseWord);

if ( userWord === reverseWord){
    alert (userWord + 'è una parola palindroma');
}
else{
    alert (userWord + ' NON è una parola palindroma');
}


// function isPalindrome(word){
//     const parolaAlContrario = reverseWord (word);
//     console.log ('parolaAlContrario', parolaAlContrario, typeof parolaAlContrario);

//     if (word === parolaAlContrario)
//         // console.log (word + 'è una parola palindroma');

//         return true;
//     else{
//         console.log (word + 'non è una parola palindroma');

//         return false;
//     }
// }

// function reverseWord (wordToBeReversed) {
//     let reverseWord = '';

//     for (let i = wordToBeReversed.length - 1; i >= 0; i--){
//         // console.log(word[i]);

//         reverseWord += wordToBeReversed[i];
//     }

//     return reverseWord;
// }




