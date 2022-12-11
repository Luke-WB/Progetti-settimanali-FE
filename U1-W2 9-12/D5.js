/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
console.log("\n ------------------------- ESERCIZIO 1 ------------------------");

const pets = ["dog", "cat", "hamster", "redfish"];

for (let i = 0; i < pets.length; i++) {
  console.log(pets[i]);
}

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/
console.log("\n ------------------------- ESERCIZIO 2 ------------------------");

pets.sort();

console.log(pets);

/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/
console.log("\n ------------------------- ESERCIZIO 3 ------------------------");

pets.reverse();

console.log(pets);

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/
console.log("\n ------------------------- ESERCIZIO 4 ------------------------");

pets.shift();
pets.push("redfish");

console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
console.log("\n ------------------------- ESERCIZIO 5 ------------------------");

const cars = [
  {
    brand: "Ford",
    model: "Fiesta",
    color: "red",
    trims: ["titanium", "st", "active"],
  },
  {
    brand: "Peugeot",
    model: "208",
    color: "blue",
    trims: ["allure", "GT"],
  },
  {
    brand: "Volkswagen",
    model: "Polo",
    color: "black",
    trims: ["life", "style", "r-line"],
  },
];

for (let i = 0; i < cars.length; i++) {
  cars[0].licensePlate = "125FL";
  cars[1].licensePlate = "175FP";
  cars[2].licensePlate = "525OI";
}

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/
console.log("\n ------------------------- ESERCIZIO 6 ------------------------");

cars[3] = {
  brand: "",
  model: "",
  color: "",
  trims: [""],
};

console.log(cars);

/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
console.log("\n ------------------------- ESERCIZIO 7 ------------------------");

const justTrims = [];

for (let i = 0; i < cars.length; i++) {
  justTrims.push(cars[i].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/
console.log("\n ------------------------- ESERCIZIO 8 ------------------------");

for (let i = 0; i < cars.length; i++) {
  if (cars[i].color.charAt(0) === "b") {
    console.log("Fizz");
  } else {
    console.log("Buzz");
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
console.log("\n ------------------------- ESERCIZIO 9 ------------------------");

const numericArray = [6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105];
let i = 0;

while (i < 14) {
  console.log(numericArray[i]);
  i++;
  /* if (numericArray[i] === 32) {
    console.log("numero trovato");
    break;
  } */
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. ['f', 'b', 'e'] --> [6, 2, 5]
*/
console.log("\n ------------------------- ESERCIZIO 10 ------------------------");

const charactersArray = ["g", "n", "u", "z", "d"];
const alfabeto = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26];

for (let i = 0; i < charactersArray.length; i++) {
  switch (charactersArray[i]) {
    case "g":
      console.log(charactersArray[i] + " --> " + alfabeto[6]);
      break;
    case "n":
      console.log(charactersArray[i] + " --> " + alfabeto[13]);
      break;
    case "u":
      console.log(charactersArray[i] + " --> " + alfabeto[20]);
      break;
    case "z":
      console.log(charactersArray[i] + " --> " + alfabeto[25]);
      break;
    case "d":
      console.log(charactersArray[i] + " --> " + alfabeto[3]);
      break;
  }
}
