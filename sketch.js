let palavra;

function setup() {
  createCanvas(400, 400);
  palavra = palavraAleatoria();
}

function palavraAleatoria(){
  let palavras = ["João", "Maria", "Amores"];
  return random(palavras);
}

function inicializaCores(){
  background("white");
  fill("purple");
  textSize(70);
  textAlign(CENTER, CENTER);
}

function palavraParcial (minimo, maximo){
  let quantidade = map(mouseX, minimo, maximo,1, palavra.length);
  let parcial = palavra.substring(0, quantidade);
  return parcial;
}

function draw() {
  inicializaCores();
  let texto = palavraParcial(0, width);
  text(texto, 200, 200);
  
  
  /*if(mouseX < 50){
    let palavra = "J"
    text(palavra, 200, 200);
  } else if (mouseX < 100){
    let palavra = "Jo";
    text(palavra, 200, 200);
  } else if (mouseX < 150){
    let palavra = "Joã";
    text(palavra, 200, 200);
  } else if (mouseX < 200){
    let palavra = "João";
    text(palavra, 200, 200);
  }*/
}