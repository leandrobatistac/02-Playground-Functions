// Desafio 11
function generatePhoneNumber(numero) {

  let ddd = '';
  let blocoA = '';
  let blocoB = '';

  if(numero.length !== 11){
    return 'Array com tamanho incorreto.'
  }

  for(let index2 in numero){
    let contador = 0;

    for(let index3 in numero){
      if(numero[index2] === numero[index3]){
        contador += 1;
      }
    }

    if(contador >=3 || numero[index2]<=-1 || numero[index2]>= 10){
      return 'não é possível gerar um número de telefone com esses valores'
    }
  }

  for(let index in numero){
    if(index <= 1){
      ddd = ddd.concat(numero[index]);
    }
  }

  for(let index in numero){
    if(index >= 2 && index <= 6){
      blocoA = blocoA.concat(numero[index]);
    }
  }

  for(let index in numero){
    if(index >= 7){
      blocoB = blocoB.concat(numero[index]);
    }
  }

    let resultado = '('.concat(ddd, ') ', blocoA, '-',blocoB);
    return resultado;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  
  let criterioA = false;
  let criterioB = false;
  
  if(lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineB + lineA){
    criterioA = true;
  }

  if(lineA > Math.abs(lineB-lineC) && lineB > Math.abs(lineA-lineC) && lineC > Math.abs(lineB-lineA)){
    criterioB = true;
  }

  return criterioA && criterioB;
}

// Desafio 13
function hydrate(hidratacao) {
  let regular = /\d+/g;
  let copos = hidratacao.match(regular);
  let resultado = '';
  let numero = 0;

  for(let index in copos){
      numero = numero + parseInt(copos[index]);
  }

  if(numero === 1){
    return resultado.concat(numero,' copo de água');
  }

  else if(numero >= 2){
    return resultado.concat(numero,' copos de água');
  }
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
