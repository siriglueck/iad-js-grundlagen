
// Download audio datei unter diesem Link
//  https://kurse.jaderbass.de/?page=js


document.addEventListener("DOMContentLoaded", _ => {
	// declare buttons
	const btnPlay         = document.querySelector("#play");
	const btnPause        = document.querySelector("#pause");
	const btnRewind       = document.querySelector("#rewind");
	const inputRangeLine  = document.querySelector("#rangeLine");
	const oAudio  		  = document.querySelector("#audio");
	const sToend          = document.querySelector("#toend");
  	const sPlayed         = document.querySelector("#played");

	// console.log(oAudio);
	// oAudio, this DOM return audio objects, therefore there are built-in functions such play() and pause() 
	btnPlay.addEventListener("click", () => {
		oAudio.play();
	});
	btnPause.addEventListener("click", () => {
    	oAudio.pause();
  	});
  	btnRewind.addEventListener("click", () => {
		//rewind
    	oAudio.currentTime = 0;
  	});
	

	oAudio.addEventListener("loadedmetadata", () => { 
		// Dauer mit einer Nachkommastelle speichern (toFixed liefert einen String!)
		const fDuration = oAudio.duration;
		// Minuten und Sekunden aus der Dauer errechnen
		const fTotalMinutes = Math.floor(fDuration / 60);
		const sTotalDuration = fTotalMinutes + ":" + (Math.floor(fDuration - fTotalMinutes * 60));
		
		// Zeichenkette in Ausgabe-Element ausgeben
		sToend.innerHTML = sTotalDuration;
	});

	oAudio.addEventListener("timeupdate", () => {
    // aktuelle Abspielzeit speichern und in Min + Sek umrechnen
    const fPlayed = oAudio.currentTime;
    const fMinutes = Math.floor(fPlayed / 60);
    const fSeconds = Math.floor(fPlayed - fMinutes * 60);

    // Ziffern 2-stellig speichern
    const sMinuteValue = fMinutes.toString().padStart(2, "0");
    const sSecondsValue = fSeconds.toString().padStart(2, "0");

    const fDuration = oAudio.duration;
    const sRange = fPlayed * 100 / fDuration;

    sPlayed.innerHTML = `${sMinuteValue}:${sSecondsValue}`;
    inputRangeLine.value = sRange;
  });

  // immer, wenn der Abspielkopf auf dem HTMLRange-Element bewegt wird...
  inputRangeLine.addEventListener("input", function() {
    oAudio.currentTime = this.value;
  });


});