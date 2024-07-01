import { Conta } from "./conta";

export class ContaCorrente extends Conta {
    
    public chequeEspecial = 100;

    
    public sacar(valor: number): void {
        const valorDisponivel = this.saldo + this.chequeEspecial
        
        if(valorDisponivel < valor) {
            return console.log("Saldo indisponível");
        }
        
        if (valorDisponivel >= valor ) {

            if (this.saldo >= valor) {
                const novoSaldo = this.saldo -= valor;
                return console.log(`
                    Saque no valor de ${valor} efetuado com sucesso!
                    Novo saldo: ${novoSaldo}`
                );
            }
            
                const novoSaldo = this.saldo = 0;
                const novoChequeEspecial = this.chequeEspecial -= (valor - this.saldo);
                return console.log(`
                    Saque no valor de ${valor} efetuado com sucesso!
                    Novo saldo: ${novoSaldo}
                    Cheque Especial: ${novoChequeEspecial}`)                
                
            }
            
        }


    transferir(valor: number, destino: Conta): void {
        const valorDisponivel = this.saldo + this.chequeEspecial

        if(valorDisponivel < valor) {
            return console.log("Saldo indisponível");
        }
        
        if (valorDisponivel >= valor ) {    

            
        
        if (this.saldo >= valor ) {
            this.saldo -= valor;
            destino.saldo += valor;    
            return console.log(`
                Transferência de ${valor} realizada com sucesso!
                Novo saldo na conta de origem: ${this.saldo}
                Novo saldo na conta de destino: ${destino.saldo}
                `);
        }

        const novoSaldo = this.saldo = 0;
        const novoChequeEspecial = this.chequeEspecial -= (valor - this.saldo);
        destino.saldo += valor;
        console.log(`
            Transferência de ${valor} realizada com sucesso!
            Novo saldo na conta de origem: ${this.saldo}
            Novo saldo na conta de destino: ${destino.saldo}
            `);
    }
}
}