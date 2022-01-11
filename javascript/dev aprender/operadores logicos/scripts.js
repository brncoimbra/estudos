// Operador Lógico E (&&)
// Retorna True se os dois operandos forem true

//console.log(true && true);

//exemplo real - uma pessoa só pode aplicar para uma vaga se for maior de 18 anos e ter carteira de trabalho

// let maiorDeIdade = true;
// let possuiCarteiraDeTrabalho = true;
// let podeAplicar = maiorDeIdade && possuiCarteiraDeTrabalho;

// console.log(podeAplicar);

// Operador Lógico OU (||)
// Retorna true se um dos operandos forem true

let maiorDeIdade = false;
let possuiCarteiraDeTrabalho = false;
let podeAplicar = maiorDeIdade || possuiCarteiraDeTrabalho;

console.log('pode aplicar: ', podeAplicar);

// Operador NOT (!)
let candidatoRecusado = !podeAplicar;

console.log('Candidato Recusado', candidatoRecusado);