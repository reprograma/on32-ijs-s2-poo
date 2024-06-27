import { ClienteInterface } from "./interfaces/ClienteInterface";
import {ContaCorrente} from "./classes/ContaCorrente";
import {ContaPoupanca} from "./classes/ContaPoupanca";

const cliente1: ClienteInterface = {
    nomeCompleto: "Ada Lovelace",
    id: 1,
    endereco: "Rua Street, 1815 ",
    numeroTelefone: "271853",
    rendaSalarial: 1600
};

const contaCorrente1 = new ContaCorrente(cliente1, 12345);

contaCorrente1.depositar(200);
contaCorrente1.sacar(250);

console.log(`Cliente: ${cliente1.nomeCompleto} - Saldo atual Conta Corrente: ${contaCorrente1.visualizarSaldo()}`);
console.log(`Limite do cheque especial: ${contaCorrente1.visualizarLimiteChequeEspecial()}`);

const cliente2: ClienteInterface = {
    nomeCompleto: "Mary Jackson",
    id: 2,
    endereco: "Rua Star, 1921",
    numeroTelefone: "112005",
    rendaSalarial: 1400
};

const contaPoupanca1 = new ContaPoupanca(cliente2, 67890);

contaPoupanca1.depositar(500);
contaPoupanca1.sacar(100);

console.log(`Cliente: ${cliente2.nomeCompleto} - Saldo atual Conta Poupança: ${contaPoupanca1.visualizarSaldo()}`);

// Testando transferência
contaCorrente1.transferir(50, contaPoupanca1);
console.log(` Cliente: ${cliente1.nomeCompleto} - Saldo atual Conta Corrente após transferência: ${contaCorrente1.visualizarSaldo()}`);
console.log(` Cliente: ${cliente1.nomeCompleto} - Saldo atual Conta Poupança após recebimento da transferência: ${contaPoupanca1.visualizarSaldo()}`);