// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = ((base*height)/2);
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(" ");
  return resultado;
}

// Desafio 4
function concatName(lista) {
  let primeiroElemento = lista[0]; 
  let indexUltimo = (lista.length)-1;
  let ultimoElemento = lista[indexUltimo];
  let virgula = ', '

  return ultimoElemento.concat(virgula, primeiroElemento);
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = ((wins*3)+(ties*1));
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -9999999;
  let contadorAtual = 0;

  for(let index in array){
      if(array[index] > maiorNumero){
          maiorNumero = array[index];
      }
  }

  for(let index2 in array){
      if(array[index2] === maiorNumero){
          contadorAtual = contadorAtual+1;
      }
  }
  return contadorAtual;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {

}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
