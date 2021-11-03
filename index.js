import { Cliente } from "./cliente.js";
import {ContaCorrente} from "./ContaCorrente.js";

const cliente1 = new Cliente();
cliente1.nome = "Carla";
cliente1.cpf = "11122233309";

const cliente2 = new Cliente();
cliente2.nome = "Ramon";
cliente2.cpf = "33366668902";

const cliente3 = new Cliente();
cliente3.nome = "Dandara";
cliente3.cpf = "99988877752";

const contaCorrenteCarla = new ContaCorrente();
contaCorrenteCarla.agencia = 1001;
contaCorrenteCarla.cliente = cliente1;
contaCorrenteCarla.depositar(200);

console.log(contaCorrenteCarla);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia = 102;
console.log(conta2);

const valorSacado = contaCorrenteCarla.sacar(50);
console.log(valorSacado);

contaCorrenteCarla.transferir(100, conta2);

console.log(conta2);
console.log(contaCorrenteCarla);




