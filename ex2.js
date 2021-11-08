// Crie um hashmap (ou um objeto simples em JavaScript) que contenha as funções elementares de adição, subtração, multiplicação e divisão.
// Leve em consideração que a divisão não deve permitir dividendo 0
// A função sum permite um array como parâmetro de entrada e adiciona todos os seus elementos.
// A função de subtração permite um array como parâmetro de entrada e subtrai todos os seus elementos.
// Função de multiplicação - Idem
// A função de divisão aceita dois parâmetros: a e b.

const array = [1, 2, 3, 4];

const calc = {
  sum: (arr) => {
    const total = arr.reduce((sum, num) => {
      return sum + num;
    })
    return total;
  },
  sub: (arr) => {
    const total = arr.reduce((sub, num) => {
      return sub - num;
    }, 0)
    return total;
  },
  mult: (arr) => {
    const total = arr.reduce((mult, num) => {
      return mult * num;
    })
    return total;
  },
  div: (a, b) => {
    if (b !== 0) {
      return a / b;
    }
    return 'cant divide by 0'
  },
}

console.log(`soma = ${calc.sum(array)}`);

console.log(`subtração = ${calc.sub(array)}`);

console.log(`multiplicação = ${calc.mult(array)}`);

console.log(`divisão = ${calc.div(4, 2)}`);
