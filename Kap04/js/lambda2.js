// Deklaration eines Lambda-Ausdrucks mit einem nichtgeklammerten Übergabewert, 
// Zuweisung zu einer Variablen sowie Rückgabe eines berechneten Werts.

let lambda1 = x => x * x;

// Deklaration eines Lambda-Ausdrucks mit einem Übergabewert in Klammern,
// Zuweisung zu einer Variablen sowie Rückgabe eines berechneten Werts.

let lambda2 = (x) => x * x;



console.log(lambda1(11)); // Aufruf der 1. Lambda-Funktion
console.log(lambda2(11)); // Aufruf der 2. Lambda-Funktion