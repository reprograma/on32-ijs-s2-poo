import { ClienteInterface } from "../interfaces/ClienteInterface";
import { ContaInterface } from "../interfaces/ContaInterface";

export class Conta implements ContaInterface {
    private saldo: number = 0;  // Propriedade privada para manter o saldo

    constructor(public cliente: ClienteInterface, private numero: number) {}

    numeroConta(): number {
        return this.numero;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`Depósito realizado! Saldo após depósito: ${this.saldo}`);
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`Sacado: R$${valor}. Saldo atual: R$${this.saldo}`);
        } else {
            console.log(`Saldo insuficiente.`);
        }
    }

    transferir(valor: number, contaDestino: ContaInterface): void {
        if (this.saldo < valor) {
            console.log("Saldo insuficiente");
            return;
        }

        this.saldo -= valor;
        contaDestino.depositar(valor);
        console.log(`Transferência realizada! Saldo após transferência: ${this.saldo}`);
    }

    visualizarSaldo(): number {
        return this.saldo;
    }
}