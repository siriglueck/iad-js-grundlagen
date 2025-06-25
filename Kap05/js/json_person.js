"use strict";
let person = {
    "name": "Max Mustermann",
    "alter": 25,
    "geschlecht": "männlich",
    auskunft: function() {
        return "Ich heisse " + this.name + " und bin " + this.alter + " Jahre alt.";
    }
}

console.log("JSON: " + person);
console.log(person.auskunft());