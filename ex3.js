// Crie um algoritmo que gere o seguinte padrão de ID aleatório: XXXX-AAAA-BBBB-CCCC
// Onde os padrões XXXX, AAAA, BBBB e CCCC são alfanuméricos aleatórios
// O padrão é uma string: "XXXX-AAAA-BBBB-CCCC"
// O resultado deve ser armazenado em uma variável. Por exemplo:
// let id = generarId()
// id vale ~ abc1-bb12-234a-bcc2


const generateId = () => {
  const chars = 'abcdefghijklmnopqrstuvxwyz0123456789'
  let id = '';
  for (let i = 0; i <= 18; i += 1) {
    if (i === 4 || i === 9 || i === 14) {
      id += '-';
    } else {
      const element = chars[Math.round(Math.random() * (chars.length - 1))]
      id += element;
    }
  }
  return id;
}

let id = generateId();

console.log(id);
