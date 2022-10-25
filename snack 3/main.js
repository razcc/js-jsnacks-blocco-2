let array = [2, 3, 1, 2, 1];

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