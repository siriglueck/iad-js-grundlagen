"use strict";

function Person(name, alter, geschlecht) {
    this.name = name;
    this.alter = alter;
    this.geschlecht = geschlecht;
}

let person1 = new Person("Max Mustermann", 25, "männlich");
let person2 = new Person("Susi Sorglos", 32, "weiblich");
let person3 = new Person("Hans Hansen", 45, "männlich");

console.log("Prototype: " + person1);

console.log("Prototype: " + person2);

console.log("Prototype: " + person3);