/**
 * function errorHandler()
 * 
 * @description Diese Funktion fängt das Fehler-Ereignis ab. 
 * Dazu muss in der jeweiligen Datei die Anweisung 
 * ! window.addEventlistener("error", errorHandler) 
 * untergebracht werden
 *
 * @param errorEvent  Fehler-Ereignisobjekt, wird von JavaScript als Parameter zur Verfügung gestellt
 *
 * @return void
 */
function errorHandler(errorEvent) {
  let err = "<p><b>Fehler</b>:<br>Meldung: " + errorEvent.message 
    + "<br>Datei: <code>" + errorEvent.filename + "</code>" 
    + "<br>Zeile: <code>" + errorEvent.lineno + "</code>" 
    + "<br>Spalte: <code>" + errorEvent.colno + "</code>" 
    + "<br>Stack: <code>" + errorEvent.error.stack + "</code>"
    + "</p>";
  errorEvent.preventDefault();
  const msgOutput = document.createElement("div");
  msgOutput.innerHTML = err;
  msgOutput.setAttribute("id", "err");
  msgOutput.setAttribute("style", "color:#a00;");
  document.querySelector("body").appendChild(msgOutput);
}