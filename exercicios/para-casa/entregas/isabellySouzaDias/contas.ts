import { conta } from "./interface";
import { ContaTipo } from "./tipo";

export class ContaCorrente implements conta {
    
    id: string;
    saldo: number;
    tipo: ContaTipo;
    chequeEspecial = 0

    constructor(id: string, saldo: number) {
        this.id = id
        this.saldo = saldo
        this.tipo = ContaTipo.ContaCorrente;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`O valor de ${valor} foi depositado com Sucesso.`)
        console.log(`saldo total de: ${this.saldo}`)
    }
    sacar(valor: number): void {

        if (this.saldo + this.chequeEspecial >= valor) {
            this.saldo -= valor;
            console.log(`O valor de R$ ${valor} foi sacado com sucesso.`);
            console.log(`saldo total de: ${this.saldo}`)
        } else {
            console.log('Saldo insuficiente.');
        }
    }


}

export class ContaPoupanca implements conta {

    id: string;
    saldo: number;
    tipo: ContaTipo;

    constructor(id: string, saldo: number) {
        this.id = id
        this.saldo = saldo
        this.tipo = ContaTipo.ContaPoupanca;
    }

    depositar(valor: number): void {
        this.saldo += valor;
        console.log(`O valor de ${valor} foi depositado com Sucesso.`)
        console.log(`saldo total de: ${this.saldo}`)
    }
    sacar(valor: number): void {

        if (this.saldo >= valor) {
            this.saldo -= valor;
            console.log(`O valor de R$ ${valor} foi sacado com sucesso.`);
            console.log(`saldo total de: ${this.saldo}`)

        } else {
            console.log('Saldo insuficiente.');
        }
    }

}