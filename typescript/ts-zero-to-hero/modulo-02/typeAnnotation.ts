// variaveis
let nome: string = "Bruno";
console.log(nome);

// Arrays

let animais: string[] = ["Elefante", "Panda", "Gato", "Girafa"];
console.log(animais);

// Objetos
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: "Toyota", ano: 2019, preco: 80000 };

// functions
function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumeros(2, 5));
