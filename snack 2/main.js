let nomi = ["pippo", "pluto", "minni", "paperino"];

let cognomi = ["Baudo", "Leonardi", "Rusu", "Ramos"];

let falseList = [];

function generaInvitato() {
    let numero1 = Math.floor(Math.random() * nomi.length)
    console.log(numero1)
    
    let numero2 = Math.floor(Math.random() * cognomi.length)
    console.log(numero2)


    falseList.push(nomi[numero1]+cognomi[numero2]);
    console.log(falseList)

    document.getElementById("invitato").innerHTML=`<div>${falseList}</div>`;
}