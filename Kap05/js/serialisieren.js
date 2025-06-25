"use strict";
let datum = {
    jetzt: new Date()
};
console.log(datum, typeof datum); // object
console.log(datum.jetzt, typeof datum.jetzt); // date-object
console.log("Eigenschaft 'jetzt': " + datum.jetzt, typeof datum.jetzt); // date-object formatiert

let datumString = JSON.stringify(datum); // macht aus dem Objekt eine JSON-Zeichenkette (Type: string)

console.log(datumString, typeof datumString);

let jetztRepro = JSON.parse(datumString); // parst aus dem JSON-String ein Objekt

console.log(jetztRepro, typeof jetztRepro); // objekt
console.log(jetztRepro.jetzt, typeof jetztRepro.jetzt); // string
console.log("Eigenschaft 'jetzt': " + jetztRepro.jetzt, typeof jetztRepro.jetzt); // string