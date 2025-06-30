/* 
video.js

Bietet Funktionen zum Steuern eines HTMLVideo-Elements durch das JavaScript-Video-Objekt
*/

document.addEventListener("DOMContentLoaded", _ => {
  // Konstanten für die HTML-Elemente anlegen
  
  const oVideo          = document.querySelector("#video");
  const btnPlay         = document.querySelector("#play");
  const btnPause        = document.querySelector("#pause");
  const btnRewind       = document.querySelector("#rewind");
  const inputRangeLine  = document.querySelector("#rangeLine");
  const sToend          = document.querySelector("#toend");
  const sPlayed         = document.querySelector("#played");
  
  // Ereignisse für Play-, Pause und Stop-Button registrieren und behandeln
  btnPlay.addEventListener("click", () => {
    oVideo.play();
  });
  btnPause.addEventListener("click", () => {
    oVideo.pause();
  });
  btnRewind.addEventListener("click", () => {
    oVideo.currentTime = 0;
  });

  /* 
  Ereignis "wenn die Metadaten des Videos geladen sind" registrieren
  Dauer von Sekunden in Min:Sek umrechnen 
  */
  oVideo.addEventListener("loadedmetadata", () => {
    // Dauer mit einer Nachkommastelle speichern (toFixed liefert einen String!)
    const fDuration = oVideo.duration;
    // Minuten und Sekunden aus der Dauer errechnen
    const fTotalMinutes = Math.floor(fDuration / 60);
    const sTotalDuration = fTotalMinutes + ":" + (Math.floor(fDuration - fTotalMinutes * 60));
    
    // Zeichenkette in Ausgabe-Element ausgeben
    sToend.innerHTML = sTotalDuration;
  });

  /* 
  Ereignis "Abspielzeit hat sich geändert" registrieren
  Abspielzeit laufend ausgeben
  */
  oVideo.addEventListener("timeupdate", () => {
    // aktuelle Abspielzeit speichern und in Min + Sek umrechnen
    const fPlayed = oVideo.currentTime;
    const fMinutes = Math.floor(fPlayed / 60);
    const fSeconds = Math.floor(fPlayed - fMinutes * 60);

    // Ziffern 2-stellig speichern
    const sMinuteValue = fMinutes.toString().padStart(2, "0");
    const sSecondsValue = fSeconds.toString().padStart(2, "0");

    const fDuration = oVideo.duration;
    const sRange = fPlayed * 100 / fDuration;

    sPlayed.innerHTML = `${sMinuteValue}:${sSecondsValue}`;
    inputRangeLine.value = sRange;
  });

  // immer, wenn der Abspielkopf auf dem HTMLRange-Element bewegt wird...
  inputRangeLine.addEventListener("input", function() {
    oVideo.currentTime = this.value;
  });
});
