
// Cliente
class Cliente {
    nomeCompleto: String;
    id: String;
    endereco: String;
    numeroTelefone: number;
    rendaSalarial: number;

    constructor ( nomeCompleto: String, id: String, endereco: String, numeroTelefone: number, rendaSalarial: number) {
        this.nomeCompleto = nomeCompleto;
        this.id = id;
        this.endereco = endereco;
        this.numeroTelefone = numeroTelefone;
        this.rendaSalarial = rendaSalarial;
    }

}

// Conta Bancária
class contaBancaria  {
    numeroConta: number;
    cliente: String;
    saldo: number;
   

    constructor (numeroConta: number, cliente: String, saldo: number, ) {
        this.numeroConta = numeroConta;
        this.cliente = cliente;
        this.saldo = 0.00;
      
    }

    // Depositar
    depositar(valor:number): void {
        if(valor > 0) {
            this.saldo += valor;
            console.log (`O valor depositado R$ ${this.saldo}, foi realizado com sucesso!`)
        }else{
            console.log( `O depositado não foi realizado!`)
        }
    }

    // Sacar
    sacar(valor:number): void {
        if(valor > 0 && this.saldo >= valor) {
            this.saldo -= valor ;
            console.log (`O valor sacado foi de R$ ${valor}  e o saldo da conta é R$ ${this.saldo}.`)
        }else{
            console.log (`Saldo insuficiente! O saldo da conta é R$ ${this.saldo}`)
        }
    }
    // Verificar Saldo
    verificarSaldo(saldo: number): void  {
          console.log(`O saldo da sua conta é R$ ${this.saldo}`)
      
    }
}

// Conta Corrente
class ContaCorrente extends contaBancaria {
   limiteChequeEspecial: number;

   constructor (numeroConta: string, cliente: Cliente) {
    super(numeroConta, cliente);
    this.limiteChequeEspecial = 100.00;
   }

   sacar(valor: number): void {
       if(valor > this.saldo + this.limiteChequeEspecial) {
        console.log( `Saldo insuficiente!`)
    } else if (valor <= 0) {
        console.log("Valor de saque deve ser positivo.");
    } else {
        this.saldo -= valor;
        console.log(`Saque de R$ ${valor} realizado com sucesso.`)
       }
   }
}

// Conta Poupança
class ContaPoupanca extends contaBancaria {
    constructor (numeroConta: string, cliente: Cliente){
        super(numeroConta, cliente);
    }
}

class Banco {
    constructor() {
        this.contas = {};
    }

    adicionarConta(numeroConta, conta) {
        if (!this.contas[numeroConta]) {
            this.contas[numeroConta] = conta;
            console.log("Conta adicionada com sucesso!");
        } else {
            console.log("Número de conta já existe.");
        }
    }

    encontrarConta(numeroConta) {
        return this.contas[numeroConta];
    }
}


const prompt = require('prompt-sync')();

function main() {
    const banco = new Banco();

    while (true) {
        console.log("\nMenu:");
        console.log("1. Criar nova conta");
        console.log("2. Depositar");
        console.log("3. Sacar");
        console.log("4. Transferir");
        console.log("5. Verificar saldo");
        console.log("6. Sair");
        const escolha = prompt("Escolha uma opção: ");

        if (escolha === '1') {
            const numeroConta = prompt("Digite o número da conta: ");
            const nomeCompleto = prompt("Digite o nome completo do titular: ");
            const id = prompt("Digite o número de identificação (ID): ");
            const endereco = prompt("Digite o endereço: ");
            const numeroTelefone = prompt("Digite o número de telefone: ");
            const rendaSalarial = parseFloat(prompt("Digite a renda salarial: "));

            const cliente = new Cliente(nomeCompleto, id, endereco, numeroTelefone, rendaSalarial);

            if (rendaSalarial >= 500) {
                const contaCorrente = new ContaCorrente(numeroConta, cliente);
                banco.adicionarConta(numeroConta, contaCorrente);
            } else {
                const contaPoupanca = new ContaPoupanca(numeroConta, cliente);
                banco.adicionarConta(numeroConta, contaPoupanca);
            }
        } else if (escolha === '2') {
            const numeroConta = prompt("Digite o número da conta: ");
            const conta = banco.encontrarConta(numeroConta);
            if (conta) {
                const valor = parseFloat(prompt("Digite o valor para depositar: "));
                conta.depositar(valor);
            } else {
                console.log("Conta não encontrada.");
            }
        } else if (escolha === '3') {
            const numeroConta = prompt("Digite o número da conta: ");
            const conta = banco.encontrarConta(numeroConta);
            if (conta) {
                const valor = parseFloat(prompt("Digite o valor para sacar: "));
                conta.sacar(valor);
            } else {
                console.log("Conta não encontrada.");
            }
        } else if (escolha === '4') {
            const numeroContaOrigem = prompt("Digite o número da conta de origem: ");
            const contaOrigem = banco.encontrarConta(numeroContaOrigem);
            if (contaOrigem) {
                const numeroContaDestino = prompt("Digite o número da conta de destino: ");
                const contaDestino = banco.encontrarConta(numeroContaDestino);
                if (contaDestino) {
                    const valor = parseFloat(prompt("Digite o valor para transferir: "));
                    contaOrigem.transferir(valor, contaDestino);
                } else {
                    console.log("Conta de destino não encontrada.");
                }
            } else {
                console.log("Conta de origem não encontrada.");
            }
        } else if (escolha === '5') {
            const numeroConta = prompt("Digite o número da conta: ");
            const conta = banco.encontrarConta(numeroConta);
            if (conta) {
                conta.verificarSaldo();
            } else {
                console.log("Conta não encontrada.");
            }
        } else if (escolha === '6') {
            console.log("Saindo do sistema. Até mais!");
            break;
        } else {
            console.log("Opção inválida. Tente novamente.");
        }
    }
}

main();
