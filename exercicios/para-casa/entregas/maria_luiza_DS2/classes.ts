import { ClienteBanco, Conta } from "./interfaces";
import { tipoConta } from "./tipo-conta-enum";

export class NovoCliente implements ClienteBanco {
    constructor(
        public id: number,
        public nome: string,
        public endereco: string,
        public numeroTelefone: string,
        public rendaMensal: number
    ) {}
}


export class ContaCorrente implements Conta{
    tipo: tipoConta = tipoConta.corrente;
    limiteChequeEspecial: number = 100;

    constructor(
        public numeroConta: number,
        public saldo: number,
        public titularConta: ClienteBanco,
    ){}
}

export class ContaPoupanca implements Conta{
    tipo: tipoConta = tipoConta.poupanca;
    constructor(
        public numeroConta: number,
        public saldo: number,
        public titularConta: ClienteBanco
    ){}
}

export class banco {
    private contasArmazenadas: Conta[] = [];

    criarContaCor(cliente:ClienteBanco): Conta {
        if (cliente.rendaMensal >= 500 ){
            const resposta = prompt(`${cliente.nome}, deseja criar uma conta corrente? (sim/não)`)
            if (resposta && resposta.toLowerCase() === "sim"){
                return new ContaCorrente(this.gerarNumeroConta(), 0, cliente);
            } else{
                return this.criarContaCor(cliente);
            }
        } else{
            console.log("Renda salarial insuficiente para abrir uma conta corrente.");
            return this.criarContaCor(cliente);
        }
    }

    criarContaPop(cliente: ClienteBanco): ContaPoupanca{
        return new ContaPoupanca(this.gerarNumeroConta(), 0, cliente);
    }

    depositar(conta: Conta, valor: number){
        conta.saldo += valor;
        return `Saldo atual após depósito ${conta.saldo.toFixed(2)}`
    }
    
    sacar(conta: Conta, valor: number): string {
        if (conta.tipo === tipoConta.corrente && (conta.saldo + (conta as ContaCorrente).limiteChequeEspecial) >= valor) {
            conta.saldo -= valor;
            return `Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${conta.saldo.toFixed(2)}.`;
        } else if (conta.tipo === tipoConta.poupanca && conta.saldo >= valor) {
            conta.saldo -= valor;
            return `Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${conta.saldo.toFixed(2)}.`;
        } else {
            return "Saldo insuficiente.";
        }
    }

    transferir(Contaorigem: Conta, Contadestino: Conta, valor: number): string {
        if (Contaorigem.tipo === tipoConta.corrente) {
            const contaCorrente = Contaorigem as ContaCorrente;
            if ((Contaorigem.saldo + contaCorrente.limiteChequeEspecial) >= valor) {
                Contaorigem.saldo -= valor;
                Contadestino.saldo += valor;
                return `Transferência de R$${valor.toFixed(2)} realizada com sucesso. Saldo atual da conta de origem: R$${Contaorigem.saldo.toFixed(2)}, saldo atual da conta de destino: R$${Contadestino.saldo.toFixed(2)}.`;
            } else {
                return "Transferência não realizada. Saldo insuficiente na conta de origem.";
            }
        } else if (Contaorigem.tipo === tipoConta.poupanca && Contaorigem.saldo >= valor) {
            Contaorigem.saldo -= valor;
            Contadestino.saldo += valor;
            return `Transferência de R$${valor.toFixed(2)} realizada com sucesso. Saldo atual da conta de origem: R$${Contaorigem.saldo.toFixed(2)}, saldo atual da conta de destino: R$${Contadestino.saldo.toFixed(2)}.`;
        } else {
            return "Transferência não realizada. Saldo insuficiente na conta de origem.";
        }
    }
    
    // método para gerar número de conta
    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000);
    }
    }



