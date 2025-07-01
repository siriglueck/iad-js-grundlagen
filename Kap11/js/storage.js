/**
 * ? storage.js
 * 
 * Datei mit Funktionalität zum HTML Local Storage
 */

let counter = 0;

document.addEventListener("DOMContentLoaded", () => {

  /* === Speichern von Informationen === */
  document.querySelector("#b1").addEventListener("click", () => {
    // fortlaufend nummerierten Eintrag mit einer Zufallszahl im lokalen Speicher speichern
    localStorage.setItem("key" + counter++, Math.random());
  });

  document.querySelector("#b2").addEventListener("click", () => {
    // Variablen deklarieren
    let ausg = document.querySelector("#ausgabe");
    let j = 0;

    ausg.innerHTML = "";

    for( let i in localStorage) {
      // Prüfen, ob der Inhalt nicht NULL ist
      if(localStorage.key(j) !== null) {
        // Schlüssel und Wert ausgeben
        ausg.innerHTML += localStorage.key(j++) + ": " + localStorage.getItem(i) + "<br>";
      }
    }
  });

  document.querySelector("#b3").addEventListener("click", () => {
    // counter resetten
    counter = 0;
    // Speicher leeren
    localStorage.clear();
    // Ausgabe-Div leeren
    document.querySelector("#ausgabe").innerHTML = "";
  });
});