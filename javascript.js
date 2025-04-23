/*
Palidroma
    Chiedere all’utente di inserire una parola
    Creare una funzione per capire se la parola inserita è palindroma
    NON USARE SPLIT E REVERSE!!! TUTTO CON CICLO FOR
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
    Sommiamo i due numeri
    Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
    Dichiariamo chi ha vinto.

Consigli del giorno
    1. Scriviamo sempre in italiano i passaggi che vogliamo fare
    2. Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

Domande da  farsi quando si crea una funzione:
    1. Come dovrebbe chiamarsi?
    2. Ho bisogno di parametri?
    3. Devo restituire un valore?
    4. Se sì, di che tipo?

*/

let arrayInput = ["radar", "ingegni", "redivider", "stampato"];

for(let i=0; i<arrayInput.length; i++){
    
    let isPali = isPalindroma(arrayInput[i]); 

    if(  isPali  ){ 
        console.log("### La parola ", arrayInput[i] , " è palindroma");
    
    }else console.log("### La parola ", arrayInput[i], " non è palindroma");

}




/**
 * 
 * La funzione verifica se la parola è palindroma
 * 
 * @param {stringa palindroma}  
 * @returns true o false se la stringa è palindroma
 */
function isPalindroma(palindroma){
   
    let isPalindroma = true; 

    for (let i=0; i<palindroma.length/2; i++){
    
        //console.log("Palindroma[i] ", palindroma[i]);
        //console.log("Palindroma[palindroma.length-i-1] ", palindroma[palindroma.length-i-1]);
        
        if (palindroma[i] === palindroma[palindroma.length-i-1]){
            isPalindroma = true; 
            
            //console.log(" --- > TRUE ");
        }else {
            isPalindroma = false; 
            //console.log(" --- > FALSE ");
            break;
        }
    }

    return isPalindroma;
}



/**
 * 
 * La funzione verifica se il numero è dispari
 * 
 * @param {numero}  
 * @returns true se il numero è dispari | false se il numero è pari
 */
function isDispari(numero){

    if (!(numero%2 === 0)) {
        return true;
    }else 
        return false; 

}



