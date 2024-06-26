import { DetalhesCliente } from "../interfaces/cliente";
import { ContaBancaria } from "../interfaces/conta";

export class ContaCorrente implements ContaBancaria {
    cliente: DetalhesCliente;
    numeroConta: number;
    saldo: number;
    tipoConta: 'CORRENTE';
    chequeEspecial: number = 100.00;

    constructor(cliente: DetalhesCliente, numeroConta: number, saldo: number) {
        if (cliente.salario < 500) {
            throw new Error("Necessário ter salário a partir de R$ 500,00 para abrir uma Conta Corrente");
        }
        this.cliente = cliente;
        this.numeroConta = numeroConta;
        this.saldo = saldo;
    }

    depositar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do depósito deve ser positivo");
        }
        this.saldo += valor;
        console.log(`Depósito realizado. Saldo atualizado: R$ ${this.saldo}`);
    }

    sacar(valor: number): void {
        if (valor <= 0) {
            throw new Error("O valor do saque deve ser positivo");
        }
        if (valor > this.saldo + this.chequeEspecial) {
            throw new Error("Saldo insuficiente para realizar o saque");
        }
        this.saldo -= valor;
        console.log(`Saque realizado. Saldo atualizado: R$ ${this.saldo}`);
    }

    transferir(valor: number, destinatario: ContaBancaria): void {
        this.sacar(valor);
        destinatario.depositar(valor);
        console.log(`Transferência de R$ ${valor} realizada para a conta ${destinatario.numeroConta}`);
    }
}
