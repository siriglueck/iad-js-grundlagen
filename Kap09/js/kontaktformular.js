
document.addEventListener("DOMContentLoaded", _ => {
  
  let form = document.querySelector("#anmeldeform");
  let stat = document.querySelector("#status");

  function testeZeichen(formInhalt, erlaubteZeichen) {
    let alleZeicheOkay = true;

    // durchlauf alle Zeichen des Formularinhalts (formInhalt)
    for (let i = 0; i < formInhalt.length; i++) {
      // Prüfe ob das aktuelle Zeichen in der Zeichenkette erlaubteZeichen vorkommt
      if(erlaubteZeichen.indexOf(formInhalt.charAt(i)) === -1) {
        alleZeicheOkay = false;
        break;
      }
    }

    return alleZeicheOkay;
  }

  function checkEmail(mailString) {
    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    return pattern.test(mailString);
  }
  
  function checkForm(evt) {
    let fehlermeldung = "";

    // Check Nachname auf Pflichtfeld
    if( form.nachname.value.trim() === "" ) {
      fehlermeldung += "Bitte geben Sie Ihren <b>Nachnamen</b> ein!<br>";
    }

    // Check Telefon auf Pflichtfeld
    if( form.telefon.value.trim() === "" ) {
      fehlermeldung += "Bitte geben Sie Ihre <b>Telefonnummer</b> ein!<br>";
    }
    
    // check Telefon auf erlaubte Zeichen
    if( ! testeZeichen( form.telefon.value.trim(), "1234567890-/" ) ) {
      fehlermeldung += "Geben Sie für die <b>Telefonnumer</b> bitte nur Ziffern(0-9), den Bindestrich (-) und den Schrägstrich (/) ein!<br>";
    }
    
    // Check Anschrift auf Pflichtfeld
    if( form.anschrift.value.trim() === "" ) {
      fehlermeldung += "Bitte geben Sie Ihre <b>Anschrift</b> ein!<br>";
    }

    // Check PLZ auf Pflichtfeld
    if( form.plz.value.trim() === "" ) {
      fehlermeldung += "Bitte geben Sie Ihre <b>PLZ</b> ein!<br>";
    }
    
    // check PLZ auf erlaubte Zeichen
    if( ! testeZeichen( form.plz.value.trim(), "1234567890" ) ) {
      fehlermeldung += "Geben Sie für die <b>PLZ</b> bitte nur Ziffern(0-9) ein!<br>";
    }

    // Check PLZ auf Anzahl der Zeichen
    if( form.plz.value.length !== 5 ) {
      fehlermeldung += "Bitte für die <b>PLZ</b> genau <b>5 Ziffern</b> eingeben!<br>";
    }
    
    // Check Ort auf Pflichtfeld
    if( form.ort.value.trim() === "" ) {
      fehlermeldung += "Bitte geben Sie Ihren <b>Wohnort</b> ein!<br>";
    }

    // Check Mail-Adresse auf korrekte Synthax (impliert den Check auf Pflichtfeld)
    if( ! checkEmail(form.mail.value.trim())) {
      fehlermeldung += "Die eingegebene <b>Mail-Adresse</b> ist nicht korrekt oder leer!";
    }

    if(fehlermeldung === "") {
      // alles in Ordnung, Formular kann versendet werden
      clearStatus();
      return confirm("Möchten Sie Ihre Daten jetzt senden?");
    } else {
      evt.preventDefault();
      putStatus( fehlermeldung );
      return false;
    }
  }
  
  function checkReset() {  
    if(confirm("Wollen Sie das Formular wirklich zurücksetzen?")) {
      clearStatus();
      return true;
    } else {
      return false;
    }
  }
  
  function putStatus(myText) {
    stat.innerHTML = myText;
  }
  
  function clearStatus() {
    stat.innerHTML = "";
  }

  // Auf das Ereignis submit des Formulares reagieren -> Referenz auf die Funktion checkForm
  form.onsubmit = checkForm;

  // Auf das Ereignis reset des Formulares reagieren -> Referenz auf die Funktion checkForm
  form.onreset = checkReset;

  // Wenn das Telefonfeld den Focus erhält, Meldung ausgeben - Aufruf der Funktion puStatus()
  form.telefon.onfocus = _ => {  
    putStatus("Bitte geben Sie nur Ziffern, den Bindestrich und den Schrägstrich (/) ein!");
  }

  // Wenn das Telefonfeld den Fokus verliert (onblur), die Meldung wieder leeren -> Referenz auf die Funktion clearStatus
  form.telefon.onblur = clearStatus;

  form.anschrift.onfocus = _ => {
    putStatus("Bitte geben Sie hier Straße und Hausnummer ein!");
  }
  form.anschrift.onblur = clearStatus;

  form.plz.onfocus = _ => {
    putStatus("Bitte geben Sie genau 5 Ziffern ein!");
  }
  form.plz.onblur = clearStatus;
});