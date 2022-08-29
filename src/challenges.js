// Desafio 1
function compareTrue(valor1, valor2) {
  return valor1 && valor2;
}

// Desafio 2
function calcArea(base, height) {
  let resultado = ((base * height) / 2);
  return resultado;
}

// Desafio 3
function splitSentence(frase) {
  let resultado = frase.split(' ');
  return resultado;
}

// Desafio 4
function concatName(lista) {
  let primeiroElemento = lista[0];
  let indexUltimo = (lista.length) - 1;
  let ultimoElemento = lista[indexUltimo];
  let virgula = ', ';

  return ultimoElemento.concat(virgula, primeiroElemento);
}

// Desafio 5
function footballPoints(wins, ties) {
  let resultado = ((wins * 3) + (ties * 1));
  return resultado;
}

// Desafio 6
function highestCount(array) {
  let maiorNumero = -9999999;
  let contadorAtual = 0;

  for (let index in array) {
    if (array[index] > maiorNumero) {
      maiorNumero = array[index];
    }
  }

  for (let index2 in array) {
    if (array[index2] === maiorNumero) {
      contadorAtual += 1;
    }
  }
  return contadorAtual;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanciaGato1 = Math.abs(cat1 - mouse);
  let distanciaGato2 = Math.abs(cat2 - mouse);

  if (distanciaGato1 < distanciaGato2) {
    return 'cat1';
  }

  if (distanciaGato2 < distanciaGato1) {
    return 'cat2';
  }

  if (distanciaGato1 === distanciaGato2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let index in array) {
    if ((array[index]) % 3 === 0 && array[index] % 5 === 0) {
      resultado.push('fizzBuzz');
    } else if ((array[index]) % 3 === 0) {
      resultado.push('fizz');
    } else if ((array[index]) % 5 === 0) {
      resultado.push('buzz');
    } else {
      resultado.push('bug!');
    }
  }
  return resultado;
}

// Desafio 9
function encode(stringNumero) {
  stringNumero = stringNumero.replace(/[a]/g, '1');
  stringNumero = stringNumero.replace(/[e]/g, '2');
  stringNumero = stringNumero.replace(/[i]/g, '3');
  stringNumero = stringNumero.replace(/[o]/g, '4');
  stringNumero = stringNumero.replace(/[u]/g, '5');

  return stringNumero;
}

function decode(stringFrase) {
  stringFrase = stringFrase.replace(/[1]/g, 'a');
  stringFrase = stringFrase.replace(/[2]/g, 'e');
  stringFrase = stringFrase.replace(/[3]/g, 'i');
  stringFrase = stringFrase.replace(/[4]/g, 'o');
  stringFrase = stringFrase.replace(/[5]/g, 'u');

  return stringFrase;
}

// Desafio 10
function techList(tecnologia, nome) {
  let resultado = [];

  if (tecnologia.length === 0) {
    return 'Vazio!';
  }

  for (let key of tecnologia.sort()) {
    let objeto = {
      tech: key,
      name: nome,
    };

    resultado.push(objeto);
  }

  return resultado;
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
