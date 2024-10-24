// VERA MOLNÁR - Interstices horizontales, 1989 Dessin ordinateur - Oeuvre unique

let gridSize = 18;  // distanza di base tra i quadrati
let squareSize = 15;  // forma quadrati
let offset = 3;     // variazione di posizione dei quadrati
let alphaValue = 150;  // trasparenza (0 completamente trasparente, 255 opaco)

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();  // evita di ridisegnare ripetutamente
  noStroke(); // no bordini neri nei quadratini
  fill(255, 0 , 0, alphaValue);  // colore riempimento dei quadratini (con trasparenza)
}

function draw() {
  background(225, 219, 209);  // sfondo 

  // Loop per creare la griglia di quadrati
  for (let y = 50; y < height - 50; y += gridSize) {
    for (let x = 50; x < width - 50; x += gridSize) {
      let xOffset = random(-offset, offset);  // randomico orizzontale
      let yOffset = random(-offset, offset);  // randomico verticale
      rect(x + xOffset, y + yOffset, squareSize, squareSize);  // dimensione quadrati fissa
    }
  }
}
// sposta quadratini ad ogni clic
function mousePressed() {
  redraw();  
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();  // adatta alla dimesione della finestra
}
