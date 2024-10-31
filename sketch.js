//fantasia, aventura, comédia, terror infantil, ficção cientifica, mistério
//Cruella, 12, comédia, aventura, 
//Procurando Nemo, LIVRE, aventura, comédia
//A Freira, 14, terror, mistério
//Enola Holmes,12, mistério
//Meu malvado favorito 4, 10, comédia, infantil
//A Noiva-Cadáver, LIVRE, fantasia
//Coraline e o Mundo Secreto, 10, terror, fantasia


let campoIdade;
let campoFantasia;
let campoAventura;

function setup() {
  createCanvas(800, 400);
  createElement("h2", "Recomendador de filmes");
  createSpan("Sua idade:");
  campoIdade = createInput("5");
  campoFantasia = createCheckbox("Gosta de fantasia?");
  campoAventura = createCheckbox("Gosta de aventura?");
}

function draw() {
  background("rgb(251,0,255)");
  let idade = campoIdade.value();
  let gostaDeFantasia = campoFantasia.checked();
  let gostaDeAventura = campoAventura.checked();
  let recomendacao = geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura);

  fill(color(76, 0, 115));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostaDeFantasia, gostaDeAventura) {
  if (idade >= 10) {
    if (idade >= 14) {
      return "A Freira";
    } else {
      if (idade >= 12) {
        if(gostaDeFantasia || gostaDeAventura) {
          return "Cruella";          
        } else{
         return "Enola Holmes";
        }
      } else {
        if (gostaDeFantasia) {
          return "Coraline e o Mundo Secreto";
        } else {
          return "Meu malvado favorito 4";
        }
      }
    }
  } else {
    if (gostaDeAventura) {
      return "A Noiva-Cadáver";
    } else {
      return "Procurando Nemo";
    }
  }
}
