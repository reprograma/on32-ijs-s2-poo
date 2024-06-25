import { ClienteBanco, Conta } from "./interfaces";
import { tipoConta } from "./tipo-conta-enum";

export class NovoCliente implements ClienteBanco {
    private static idCliente: number = 1;
    public id: number;

    constructor(
        public nome: string,
        public endereco: string,
        public numeroTelefone: string,
        public rendaMensal: number
    ) {
        this.id = NovoCliente.idCliente++;
    }
}


export class ContaCorrente implements Conta {
    tipoDeConta: tipoConta = tipoConta.corrente;
    public numeroConta: number;
    ChequeEspecial: number = 100;

    constructor(
        public saldo: number,
        public titularConta: ClienteBanco,
    ) {
        this.numeroConta = ContaCorrente.gerarNumeroConta();
    }

    private static gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000);
    }
}

export class ContaPoupanca implements Conta {
    tipoDeConta: tipoConta = tipoConta.poupanca;
    public numeroConta: number;

    constructor(
        public saldo: number,
        public titularConta: ClienteBanco,
    ) {
        this.numeroConta =  ContaPoupanca.gerarNumeroConta();
    }

    private static gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000);
    }
}


export class banco {

    criarContaCor(cliente:ClienteBanco): Conta | null {
        if (cliente.rendaMensal >= 500 ){
            console.log(`Olá, ${cliente.nome}! Sua conta corrente foi criada com sucesso! `);
            return new ContaCorrente(0, cliente);
        
        } else{
            console.log("A renda salarial informada é insuficiente para abrir uma conta corrente.");
            return null;
        }
    }
    
    criarContaPop(cliente: ClienteBanco): ContaPoupanca{
        console.log(`Olá, ${cliente.nome}! Sua conta poupança foi criada com sucesso! `);
        return new ContaPoupanca(0, cliente);
    }

    depositar(conta: Conta, valor: number): string{
        conta.saldo += valor;
        return `Olá, ${conta.titularConta.nome}! Seu saldo atual após depósito é de ${conta.saldo.toFixed(2)}`
    }
    
    sacar(conta: Conta, valor: number): string {
        if (conta.tipoDeConta === tipoConta.corrente && (conta.saldo + (conta as ContaCorrente).ChequeEspecial) >= valor) {
            conta.saldo -= valor;
            return `${conta.titularConta.nome}, seu saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${conta.saldo.toFixed(2)}.`;
        } else if (conta.tipoDeConta === tipoConta.poupanca && conta.saldo >= valor) {
            conta.saldo -= valor;
            return `Saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${conta.saldo.toFixed(2)}.`;
        } else {
            return "Saldo insuficiente.";
        }
    }

    transferir(Contaorigem: Conta, Contadestino: Conta, valor: number): string {
        if (Contaorigem.tipoDeConta === tipoConta.corrente) {
            const contaCorrenteOrigem = Contaorigem as ContaCorrente;
            if ((Contaorigem.saldo + contaCorrenteOrigem.ChequeEspecial) >= valor) {
                Contaorigem.saldo -= valor;
                Contadestino.saldo += valor;
                return `Transferência de R$${valor.toFixed(2)} feita por
                ${contaCorrenteOrigem.titularConta.nome} para ${Contadestino.titularConta.nome} foi realizada com sucesso.
                Saldo atual da conta de origem: R$${Contaorigem.saldo.toFixed(2)}, saldo atual da conta de destino: R$${Contadestino.saldo.toFixed(2)}.`;
            } else {
                return `Transferência não realizada. O saldo da conta de ${Contaorigem.titularConta.nome} é R$ ${Contaorigem.saldo.toFixed(2)}. O valor de transferência é insuficiente.`;
            }
        } else if (Contaorigem.tipoDeConta === tipoConta.poupanca && Contaorigem.saldo >= valor) {
            Contaorigem.saldo -= valor;
            Contadestino.saldo += valor;
            return `Transferência de R$${valor.toFixed(2)} feita por:
            ${Contaorigem.titularConta.nome} para: ${Contadestino.titularConta.nome} foi realizada com sucesso.
            Saldo atual da conta de origem: R$ ${Contaorigem.saldo.toFixed(2)}, saldo atual da conta de destino: R$${Contadestino.saldo.toFixed(2)}.`;
        } else {
            return `Transferência não realizada. O saldo da conta de ${Contaorigem.titularConta.nome} é R$ ${Contaorigem.saldo.toFixed(2)}. O valor de transferência é insuficiente.`;
        }
    }
    
    
}   



