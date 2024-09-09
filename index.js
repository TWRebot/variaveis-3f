let idade = 17;
const anoNascimento = 2007;
let anoAtual = 2024;
const nomeCompleto = "Luis Gutierrez"

console.log("Meu nome é " + nomeCompleto + " nascido no ano de " + anoNascimento + " e no ano atual" + " completo " + idade + " anos");
anoAtual = anoAtual + 1;
console.log (anoAtual);

idade = idade + 1;
console.log (idade);

//Agência de viagens Madrid New York Buenos Aires Tokyo Barcelona 
const listaDeDestinos = new Array(
  " Madrid",
  " Londres",
  " Manchester",
   " Tokyo",
  " Barcelona"
);

console.log(listaDeDestinos);
console.log(listaDeDestinos[3]);
listaDeDestinos.push("Coronel Vivida");
console.log(listaDeDestinos);
listaDeDestinos.push("Curitiba")
listaDeDestinos.push("Rio Branco");
listaDeDestinos.push("Berlin");
console.log(listaDeDestinos);

const idadeComprador = 17;

if(idadeComprador<18) {
  console.log("infelizmente não podemos vender passagens para menores de idade");
}
if(idadeComprador >=18) {
  console.log("Comprador maior de idade");

  console.log("Destinos disponíveis: " + listaDeDestinos);
} 