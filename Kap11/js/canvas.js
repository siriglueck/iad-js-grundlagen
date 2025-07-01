/**
 * ? canvas.js
 * 
 * Datei mit der Funktionalität des Canva-Objektes
 */

/**
 * function drawCanvas()
 * 
 * @description Zeichnet ein einfaches Quadrat in ein HTML5-Canvas-Element.
 *
 * @return void
 */
function drawCanvas() {
  const cvs = document.querySelector("#canvas");

  // Prüfen ob Canvas unterstützt wird
  if( cvs.getContext ) {
    // Context der canvas ("2d", "webgl", "webgl2", "webgpu", "bitmaprenderer")
    const context = cvs.getContext("2d");
    // Füllung des Quadrates erstellen
    context.fillStyle = "rgb(255,0,255)";
    // Rechteck mit der angegebenen Füllung zeichnen
    context.fillRect(10, 20, 50, 50);
  }
}

/**
 * function flyingSqrs()
 * 
 * @description Erstellt das HTML5 Canvas Objekt und ruft die Funktion animate() zur Animation der beiden zu zeichnenden Quadrate auf.
 *
 * @return void
 */
function flyingSqrs() {
  const cvs = document.querySelector("#flyingSqrs");
  if(cvs.getContext) {
    const context = cvs.getContext("2d");
    animate(cvs, context, 31, 69, 1, -1, 8, 25, 1, 1);
  }
}

/**
 * function animate()
 * 
 * @description animiert Elemente in einer canvas
 *
 * @param cvs     canvas-Objekt
 * @param context drawing context on the canvas
 * @param ax      x-axis coordinates rectangle a
 * @param ay      y-axis coordinates rectangle a
 * @param adh     horizontal movement direction rectangle a (1 - l2r, -1 - r2l)
 * @param adv     vertcal movement direction rectangle b (1 - t2b, -1 - b2t)
 * @param bx      x-axis coordinates rectangle b
 * @param by      y-axis coordinates rectangle b
 * @param bdh     horizontal movement direction rectangle b (1 - l2r, -1 - r2l)
 * @param bdv     vertcal movement direction rectangle b (1 - t2b, -1 - b2t)
 *
 * @return void
 */
function animate(cvs, context, ax, ay, adh, adv, bx, by, bdh, bdv) {
  const aw = 50;
  const ah = 50;
  const bw = 50;
  const bh = 50;

  // setTimeout mit 0 Millisekunden zur kontinulierlichen Wiederholung der Anweisungen
  setTimeout( () => {
    /**
     * ? Quadrat a
    */
    
    let speeda = 1;

    // Abprallpunkt für x-Achse bestimmen und die Bewegungsrichtung umkehren
    if( ax == (cvs.width - aw) ) adh = -1 * speeda;
    else if( ax == 0) adh = 1;

    // Abprallpunkt für y-Achse bestimmen und die Bewegungsrichtung umkehren
    if( ay == (cvs.height - ah) ) adv = -1 * speeda;
    else if( ay == 0) adv = 1;

    // Koordinaten neu berechnen
    ax = ax + (adh);
    ay = ay + (adv);

    let speedb = 2;
    
    /**
     * ? Quadrat b
     */
    // Abprallpunkt für x-Achse bestimmen und die Bewegungsrichtung umkehren
    if( bx == (cvs.width - bw) ) bdh = -1 * speedb;
    else if( bx == 0) bdh = 1;

    // Abprallpunkt für y-Achse bestimmen und die Bewegungsrichtung umkehren
    if( by == (cvs.height - bh) ) bdv = -1 * speedb;
    else if( by == 0) bdv = 1;


    // Koordinaten neu berechnen
    bx = bx + (bdh);
    by = by + (bdv);

    // alles neu zeichnen
    context.clearRect(0, 0, 300, 200);
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.fillRect(ax, ay, aw, ah);
    context.fillStyle = "rgba(0, 255, 0, 0.5)";
    context.fillRect(bx, by, bw, bh);

    // Selbstaufruf der Funktion animate
    self.animate(cvs, context, ax, ay, adh, adv, bx, by, bdh, bdv);
  }, 0);
}

// DOM schützen und Funktionen aufrufen
document.addEventListener("DOMContentLoaded", _ => {
  drawCanvas();
  flyingSqrs();
});