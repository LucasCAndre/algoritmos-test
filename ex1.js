// Crie um algoritmo que percorre uma array unidimensional contendo letras e números:

const array = ['a', 10, 'b', 'hola', 122, 15];

// Obtenha uma array contendo apenas as letras
const lettersOnly = (arr) => {
  const newArr = [];
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (typeof(arr[i]) === 'string') {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(`Question a: ${lettersOnly(array)}`);

// Obtenha uma array contendo apenas os números
const numbersOnly = (arr) => {
  const newArr = [];
  for (let i = 0; i <= arr.length - 1; i += 1) {
    if (typeof(arr[i]) === 'number') {
      newArr.push(arr[i]);
    }
  }
  return newArr
}

console.log(`Question b: ${numbersOnly(array)}`);

// Obtenha o maior número da array acima
const numArr = numbersOnly(array);
const maxNumber = () => {
  let max = 0;
  for (let i = 0; i <= numArr.length - 1; i += 1) {
    if (numArr[i] > max) {
      max = numArr[i];
    }
  }
  return max;
}

console.log(`Question c: ${maxNumber()}`);

