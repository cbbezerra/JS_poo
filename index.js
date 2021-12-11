import { Cliente } from "./cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor ("Rita", 10000, 12345678933);
diretor.cadastrarSenha("123456");

const gerente = new Gerente ("Ana", 5000, 12309845681);
gerente.cadastrarSenha("789456")


const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
console.log(diretorEstaLogado);

const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "789456");
console.log(gerenteEstaLogado);

const cliente = new Cliente("Lais", 56723489011, "456");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "456");
console.log(clienteEstaLogado);