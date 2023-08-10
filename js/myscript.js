console.log("ciao mondo") //stampare il console

//tipi di commenti-------------------------

/*
tipo di commento 
*/

/** 
 * tipo di commeto
 * 
 *
 */


//document-----------------------------------
//getElementById recupera id nel html
//innerHtml va a modificare il contenuto preso dal id grazie a getElementById
document.getElementById("elementModificato").innerHTML = `<h1 class="text-danger">Le tue preferenze</h1>`


//aller 

// alert("nome")
// alert("congnome")
// alert("colore preferioto")


//prova variabbile let 
let variabileProva;
variabileProva = 4;
console.log(variabileProva);



//variabbile const 
const variabileterzo = 10;
console.log(variabileterzo);


//creare una variabbile 
const nomeConst = "paolo";
const cognomeConst = "flore";

//le variabbili numeriche non devono avere gli apici 
const NumeroConst = 1999;
console.log (NumeroConst)

//variabbile di nome e cognome uniti
const fullName = nomeConst + " " + cognomeConst;
console.log (fullName)

//cosi invece chiamiamo la variabbile 
console.log (nomeConst , cognomeConst);

//cosi con il ${}
console.log (`questa e una prova fatta da ${nomeConst} ${cognomeConst} il 10`);




//calcolo con le variabbili si puo usare il (+) (-) (divisioni  / ) (moltiplicazioni   *  ) 
let numeroUNo = 1 + 1;

let numeroDue = 5 * 5;

let meno = numeroUNo - 1;
console.log (meno);

let menoSecondo = numeroDue - 1;
console.log (menoSecondo);

let etaAttuale = 2023 - NumeroConst;
console.log (etaAttuale);


//esercizio 
//uso il pront come allert 

// const passwordEsc = prompt("inserire  la password");
// document.getElementById("password") 
// console.log (passwordEsc);

const nomeEsc = prompt("inserire il tuo nome");
document.getElementById("nome").innerHTML =  `${nomeEsc}`;
console.log (nomeEsc);

const cognomeEsc = prompt("inserire il tuo cognome");
document.getElementById("cognome").innerHTML =  `${cognomeEsc}`;
console.log (cognomeEsc);

const coloreEsc = prompt("inserire  il colore preferito");
document.getElementById("preferito").innerHTML =  `${coloreEsc}`;
console.log (coloreEsc);

const nascitaEsc = prompt("inserire l'anno di nascita");
document.getElementById("nascita").innerHTML =  `${nascitaEsc}`;
console.log (nascitaEsc);

const tuttoEsc = nomeEsc + cognomeEsc + coloreEsc + nascitaEsc;
document.getElementById("tutto").innerHTML =  tuttoEsc;
console.log (tuttoEsc);
