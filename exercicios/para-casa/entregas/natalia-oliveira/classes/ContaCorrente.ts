import { ClienteInterface } from "../interfaces/ClienteInterface";
import { Conta } from "./Conta";

export class ContaCorrente extends Conta {
    private limiteChequeEspecial: number = 100.00;

    constructor(cliente: ClienteInterface, numero: number) {
        super(cliente, numero);
    }

    sacar(valor: number): void {
        if (this.visualizarSaldo() + this.limiteChequeEspecial >= valor) {
            this.setSaldo(this.visualizarSaldo() - valor);
            console.log(`Sacado: R$${valor}. Saldo atual: R$${this.visualizarSaldo()}`);
        } else {
            console.log(`Saldo insuficiente, incluindo limite de cheque especial.`);
        }
    }

    visualizarLimiteChequeEspecial(): number {
        return this.limiteChequeEspecial;
    }

    private setSaldo(valor: number): void {
        // Método auxiliar para ajustar o saldo
        Object.defineProperty(this, 'saldo', {
            value: valor,
            writable: true
        });
    }
}
