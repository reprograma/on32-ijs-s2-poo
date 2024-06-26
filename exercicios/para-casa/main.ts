import { Cliente, Endereco } from "./../para-casa/contas/clientes";
import { ContaCorrente } from "./../para-casa/contas/corrente";
import { ContaPoupanca } from "./../para-casa/contas/poupanca";

const enderecoCliente01: Endereco = {
    rua: "Rua das Flores",
    numero: 123,
    bairro: "Centro",
    cidade: "São Paulo",
    estado: "SP",
    cep: "01000-000"
};
const cliente01 = new Cliente(1, "João Silva", "11999999999", 3000, enderecoCliente01, "CORRENTE");
const contaCorrente01 = new ContaCorrente(cliente01, 12345, 1000);

const enderecoCliente02: Endereco = {
    rua: "Avenida Brasil",
    numero: 456,
    bairro: "Jardim América",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    cep: "20000-000"
};

const cliente02 = new Cliente(2, "Maria Oliveira", "21988888888", 4500, enderecoCliente02, "POUPANCA");
const contaPoupanca02 = new ContaPoupanca(cliente02, 67890, 2000);

contaCorrente01.depositar(500);
contaCorrente01.sacar(200);
contaCorrente01.transferir(300, contaPoupanca02);

console.log(contaCorrente01);
console.log(contaPoupanca02);


