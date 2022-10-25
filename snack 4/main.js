let lunghezzaArrey1 = parseInt(prompt("Scegli lunghezza prima array"));
let lunghezzaArrey2 = parseInt(prompt("Scegli lunghezza secondo array"));

let array1 = [];
let array2 = [];

for (let i = 0; i < lunghezzaArrey1; i++) {
    array1.push("1");
}

console.log("Lunghezza array 1:" + array1.length)

for (let a = 0; a < lunghezzaArrey2; a++) {
    array2.push("1");
}
console.log("Lunghezza array 2:" + array2.length)

// ^Differenza di Lunghezza
let differenzaDiLunghezza = 0;

if (array1.length < array2.length) {

    differenzaDiLunghezza = array2.length - array1.length;
    console.log("Differenza di lunghezza:" + differenzaDiLunghezza)
}
else if (array1.length > array2.length) {
    differenzaDiLunghezza = array1.length - array2.length;
    console.log("Differenza di lunghezza:" + differenzaDiLunghezza)


}


function uguaglianzaArray() {

    if (array1.length < array2.length) {

        for (let b = 0; b < differenzaDiLunghezza; b++) {
            array1.push("1");
            console.log("La lunghezza dell'array 1 è:" + array1.length)
            console.log("La lunghezza dell'array 2 è:" +  array2.length)


        }
    }
    else if (array1.length > array2.length) {

        for (let b = 0; b < differenzaDiLunghezza; b++) {
            array2.push("1");
            console.log("La lunghezza dell'array 1 è:" + array1.length)
            console.log("La lunghezza dell'array 2 è:" +  array2.length)

        }

    }

}

