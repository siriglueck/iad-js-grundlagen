"use strict";
var datum = {
    jetzt: new Date()
};
console.log(datum, typeof datum); // object
console.log(datum.jetzt, typeof datum.jetzt); // date-object
console.log("Eigenschaft 'jetzt': " + datum.jetzt, typeof datum.jetzt); // date-object formatiert

