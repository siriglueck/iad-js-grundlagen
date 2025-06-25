"use strict";

class Person {
    constructor(name, alter, geschlecht) {
      this.name = name;
      this.alter = alter;
      this.geschlecht = geschlecht;
      this.entfernung = 0;
    }

    // Setter-Methode
    setEntfernung(wert) {
      this.entfernung += wert;
    }

    // Getter-Methode
    getEntfernung() {
      return this.entfernung;
    }

    getName() {
      return this.name;
    }

    toString() {
      return "Name: " + this.getName() + ", Entfernung: " + this.getEntfernung();
    }
}

// Instanziieren der Klasse mit einigen beispielhaften Personen.
let person1 = new Person("Max Mustermann", 25, "männlich");
let person2 = new Person("Susi Sorglos", 32, "weiblich");
let person3 = new Person("Hans Hansen", 45, "männlich");

console.log("Klasse: ", person1);
console.log("Klasse: ", person2);
console.log("Klasse: ", person3);

console.log("Person 2: ", person2);

person2.setEntfernung(5);

console.log(person2.getName() + " ist " + person2.getEntfernung() + "km entfernt.");

console.log(person3.toString());
