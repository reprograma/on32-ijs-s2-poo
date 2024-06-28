import { Cliente } from "./clientes";
import { ContaCorrente, ContaPoupanca } from "./contas";
import { ContaTipo } from "./tipo";
import { conta } from "./interface";

export class Banco {

    private clientes: Cliente[] = [];
    private contas: conta[] = []; 
    

    adicionarCliente(cliente: Cliente): void {
        this.clientes.push(cliente);
        console.log(`Cliente ${cliente.nomeCompleto} adicionado com sucesso.`);
    }

    criarConta(clienteID: string, tipo: ContaTipo, saldoInicial: number): void {
        const cliente = this.clientes.find(cliente => cliente.numeroID === clienteID);

        if (!cliente) {
            console.log('Cliente não encontrado.');
            return;
        }

        let novaConta: conta;

        if (tipo === ContaTipo.ContaCorrente) {
            novaConta = new ContaCorrente(clienteID, saldoInicial);
        } else if (tipo === ContaTipo.ContaPoupanca) {
            novaConta = new ContaPoupanca(clienteID, saldoInicial);
        } else {
            console.log('Tipo de conta inválido.');
            return;
        }

        this.contas.push(novaConta);
        console.log(`Conta ${tipo} criada com sucesso para o cliente ${cliente.nomeCompleto}.`);
    }

    depositar(clienteID: string, valor: number): void {
        const conta = this.contas.find(conta => conta.id === clienteID);
        if (conta) {
            conta.depositar(valor);
        } else {
            console.log('Conta não encontrada.');
        }
    }

    sacar(clienteID: string, valor: number): void {
        const conta = this.contas.find(conta => conta.id === clienteID);
        if (conta) {
            conta.sacar(valor);
        } else {
            console.log('Conta não encontrada.');
        }
    }
    saldo2(clienteID:string, valor: number):void{
        const conta = this.contas.find(conta => conta.id === clienteID);
        if(conta){
            
        }
    }

}
