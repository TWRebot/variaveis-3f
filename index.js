const prompt = require('prompt-sync');
const entrada = prompt();
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

var nomeComprador = entrada("Digite seu nome: ");
var idadeComprador = entrada("Digite sua idade: ");

if(idadeComprador<18) {
  console.log ("Olá senhor(a)" + nomeComprador);
  console.log("infelizmente não podemos vender passagens para menores de idade");
}
if(idadeComprador >=18) {
  console.log ("Olá senhor(a)" + nomeComprador);
  console.log("Comprador maior de idade");
  console.log("Escolha seu destino");
 
  var contador = 0;

  while(contador <9){
    console.log(listaDeDestinos[contador]);
    contador++;
  }
  var destino = entrada("Digite o numero que corresponde ao destino selecionado (0-8)");
  console.log(`destino selecionado foi: ${listaDeDestinos[destino]}`);
  } 

