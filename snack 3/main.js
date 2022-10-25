let array = [2, 5, 1, 5, 1];

let somma = 0;
let posizioneArray = 0;
let lunghezzaArray= array.length;

function invia(){

    for(let i=0; i < lunghezzaArray; i++){

        if(i % 2 !== 0){
            somma += array[i];
            
        }
    }
    console.log(somma)
}