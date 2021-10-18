// attraverso un prompt inseriamo un numero pari o dispari da 1 a 5
const userPoints = parseInt(prompt("Inserisci un numero"));


// Creiamo una funzione che generi un numero random da 1 a 5 
function computerScore() { 
// all'interno della funzione stabiliamo il metodo per calcolare il numero random
    let result = Math.floor(Math.random() * 5) + 1;
    return result
}

// creiamo una funzione che ci permetta di verificare se la somma dei due numeri è pari o dispari
function evenOdd() {
    // salviamo la funzione computerScore in una variabile per fare la somma dei due valori
    pcScore = computerScore();

    console.log(pcScore);
    // creiamo poi una variabile che faccia la somma tra il numero del giocatore e quello del computer
    let totalPoints = userPoints + pcScore;
    if (totalPoints % 2 === 0) {
        alert("Numero pari!")
    } else {
        alert("numero dispari")
    }
}

evenOdd()

