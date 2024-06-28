// Importando as classes e enums necessários
import { Cliente } from "./clientes";
import { ContaTipo } from "./tipo";
import { Banco } from "./banco";


const cliente1 = new Cliente("Isa Souza", "123456789", "Rua Aurora, 123", "(81) 98765-4321", 2000);
const cliente2 = new Cliente("Nataly Carvalho", "987654321", "Rua do sol, 456", "(81) 912345678", 3500);

const meuBanco = new Banco();

meuBanco.adicionarCliente(cliente1);
meuBanco.adicionarCliente(cliente2);


meuBanco.criarConta(cliente1.numeroID, ContaTipo.ContaCorrente, 1000); 
meuBanco.criarConta(cliente2.numeroID, ContaTipo.ContaPoupanca, 500); 


meuBanco.depositar(cliente1.numeroID, 500); 
meuBanco.sacar(cliente2.numeroID, 200); 

