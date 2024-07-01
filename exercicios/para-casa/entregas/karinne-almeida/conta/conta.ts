import { Cliente } from "../cliente/cliente";
import { ContaTipoEnum } from "./enum/conta-tipo.enum";
import { ContaInterface } from "./interface/conta.interface";

export class Conta implements ContaInterface {
    constructor (public cliente: Cliente, public saldo: number, public tipoConta: ContaTipoEnum) {}
    
    depositar(valor: number): void {
        const novoSaldo = this.saldo += valor;
        
        return console.log(`
            Depósito no valor de ${valor} efetuado com sucesso!
            Novo saldo: ${novoSaldo}`);
        
    }

    sacar(valor: number): void {
        if(this.saldo < valor) {
            return console.log("Saldo indisponível");
        }
        
            const novoSaldo = this.saldo -= valor;
            
            return console.log(`
            Saque no valor de ${valor} efetuado com sucesso!
            Novo saldo: ${novoSaldo}`
            );

    }

    transferir(valor: number, destino: Conta): void {
        if(this.saldo < valor) {
            return console.log("Saldo indisponível");
        }    
    
            this.saldo -= valor;
            destino.saldo += valor;

            return console.log(`
                Transferência de ${valor} realizada com sucesso!
                Novo saldo na conta de origem: ${this.saldo}
                Novo saldo na conta de destino: ${destino.saldo}
                `);
    }
}