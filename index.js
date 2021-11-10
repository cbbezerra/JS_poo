import { Cliente } from "./cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente("Carla", 11122233309);
const cliente2 = new Cliente("Ramon", 33366668902);
const cliente3 = new Cliente("Dandara", 99988877752);

let numeroDeContas = 0;
const contaCorrenteCarla = new ContaCorrente (cliente1, 1020);

contaCorrenteCarla.depositar(200);

const conta2 = new ContaCorrente(cliente2, 1020);

const conta3 = new ContaCorrente(cliente3, 1030);

const valorSacado = contaCorrenteCarla.sacar(50);
console.log(valorSacado);

let valor = 100
contaCorrenteCarla.transferir(valor, conta2);

console.log(ContaCorrente.numeroDeContas);

