import { ClienteBanco, conta } from "./interfaces";
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

export class contaCliente implements conta{
    constructor(
        public numeroConta: number,
        public saldo: number,
        public titularConta: ClienteBanco,
    ){}
}

export class ContaCorrente implements conta{
    tipo: tipoConta = tipoConta.poupanca;
    limiteChequeEspecial: number = 100;

    constructor(
        public numeroConta: number,
        public saldo: number,
        public titularConta: ClienteBanco
    ){}
}

export class ContaPoupanca implements conta{
    tipo: tipoConta = tipoConta.poupanca;
    constructor(
        public numeroConta: number,
        public saldo: number,
        public titularConta: ClienteBanco
    ){}
}

export class banco {
    criarContaCor(cliente:ClienteBanco): ContaCorrente | null {
        if (cliente.rendaMensal >= 500){
            return new ContaCorrente(this.gerarNumeroConta(), 0, cliente);
        } 
        else{
            console.log("Renda salarial insuficiente para abrir uma conta corrente.");
            return null
        }
    }

    criarContaPop(cliente: ClienteBanco): ContaPoupanca{
        return new ContaPoupanca(this.gerarNumeroConta(), 0, cliente);
    }


    // classe para gerar número de conta
    private gerarNumeroConta(): number {
        return Math.floor(Math.random() * 100000);
    }

    }