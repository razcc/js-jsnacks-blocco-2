// ^Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo ( del numero inserito dall'utente: esempio se il numero dell'utente è 2, il numero successivo è 3  ).

let numeroUtente = parseInt(prompt("inserisci un numero"));

if(numeroUtente % 2 == 0){
    console.log(numeroUtente);
}
else{
    console.log(numeroUtente + 1);
}