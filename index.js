import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { ContaPoupanca } from "./ContaPoupanca.js";
import { ContaSalario } from "./ContaSalario.js";

const cliente1 = new Cliente("Carla", 11122233309);
const cliente2 = new Cliente("Ramon", 33366668902);
const cliente3 = new Cliente("Dandara", 99988877752);


//const contaCorrenteCarla = new ContaCorrente(0, cliente1, 1020);
//console.log(contaCorrenteCarla);

//contaCorrenteCarla.depositar(200);

//const valorSacado = contaCorrenteCarla.sacar(50);
//console.log(valorSacado);

// MODULO 2 INTERFACES E HERANÇA

//const contaPoupanca = new ContaPoupanca(50, cliente1, 1020);

const contaSalario = new ContaSalario(cliente1);
contaSalario.depositar(100);
contaSalario.sacar(10);

console.log(contaSalario);

