class Cliente {
    nome;
    cpf;
   }

class ContaCorrente {
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor){
            this.saldo -= valor;
        }
    }
}



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
contaCorrenteCarla.saldo = 0;
contaCorrenteCarla.agencia = 1001;

console.log(contaCorrenteCarla.saldo);
contaCorrenteCarla.saldo = 100;
console.log(contaCorrenteCarla.saldo);
contaCorrenteCarla.sacar(250);






console.log(contaCorrenteCarla.saldo);



console.log(cliente1);

