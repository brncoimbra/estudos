// Falsy
// undefined
// null
// 0 
// false
// ''
// NaN - not a number

// Truthy

// false || 'Bruno'
// false || 1
// false || 1 || 3 ignora tudo que vem dps da comparação entao sera impresso apenas o 1

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao

console.log(corPerfil)