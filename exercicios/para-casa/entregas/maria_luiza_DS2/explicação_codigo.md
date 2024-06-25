# EXPLICAÇÃO DE CÓDIGO

## Objetivos:
* Fragmentar o código de classes, atributos e interfaces em partes para análise e descrição
* Destacar termos desconhecidos para explicação e pesquisa

```typescript
// ENUM
export enum tipoConta{
    poupanca = 1,
    corrente = 2
}

// INTERFACES
import { tipoConta } from "./tipo-conta-enum";

export interface ClienteBanco{
    id: number;
    nome: string;
    endereco: string;
    numeroTelefone: string;
    rendaMensal: number;
    
}

export interface Conta{
    numeroConta: number;
    saldo: number;
    titularConta: ClienteBanco;
    tipo: tipoConta
}

```
As interfaces __"ClienteBanco"__ e __"Conta"__ foram criadas para estabalecer o _contrato_ do que é necessário as classes de conta e cliente devem ter.

```typescript
// Classe - Cliente
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

```
A classe __NovoCliente__ cria o molde com todas as informações necessárias dentro dos objetos clientes. 

```typescript
// Classes - Conta corrente e poupança 
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

```

As classes __ContaCorrente__ e __ContaPoupanca__ implementam a inferface __conta__.
 
 __ContaCorrente__ e  __ContaPoupanca__
 1. A classe __ContaCorrente__ armazena em propriedade chamada **tipoDeConta** o valor de *corrente* que está no enum criado. Já a classe __ContaPoupanca__ armazena no **tipoDeConta** o valor de *poupanca* Ou seja, através do enum, definimos "corrente" e "poupança" como 1 e 2, repectivamente, para separarmos os tipos de conta.
 2. A classe __ContaCorrente__  armazena o valor de cheque especial dentro de uma propriedade chamada **ChequeEspecial**.
 3. __public numeroConta: number__ foi declarado fora do construtor para definir a propriedade de forma explícita.
 4. Parâmentros do construtor: São públicos e serão inicalizados na instancia.
 5. O método __gerarNumeroConta__ é criado como privado e retorna um número que será a sequência numérica da conta do cliente. Dentro do método, um número entre 0 e 99.999 é gerado e arredondado para obter apenas a parte inteira.
 6. Na criação o método __gerarNumeroConta__ é definido que ele é privado, ou seja, não pode ser acessado fora da classe e estático, onde ele pertence a própria classe, sem a necessidade de criação de instância da classe.

```typescript
// Classe de banco, para a criação e manipulação de contas
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


```
__criarContaCor(cliente:ClienteBanco): Conta | null{}__ 
1. O parâmetro **cliente:ClienteBanco** define o nome do parâmentro do método "cliente" que recebe as informações criadas a partir do **ClienteBanco** ou seja, as informações do novo cliente.
2. **: Conta | null{}** fará o retorno do método, onde o valor pode ser o objeto que é a nova conta ou o valor null. Isso significa que, dependendo das condições do método, o retorno pode ser a nova conta ou um valor null.
3. Condicional: Para criar uma nova conta corrente, é necessário que o cliente tenha **renda mensal >=500**. Isso significa que, se o cliente atender essa espectativa, o if retornará a criação da nova conta utilizando o __return new ContaCorrente(0, cliente);__ e informará ao cliente que a conta foi criada com sucesso utilizando __console.log(`Olá, ${cliente.nome}! Sua conta corrente foi criada com sucesso!`);__
4. Caso o cliente *não tenha a renda mensal >= 500*, o else retornará com o valor null e a mensagem __console.log("A renda salarial informada é insuficiente para abrir uma conta corrente.");__ será impressa.


__criarContaPop(cliente: ClienteBanco): ContaPoupanca{}__
1. O parâmentro **cliente: ClienteBanco** define o nome do parâmentro **cliente** que vai receber as informações criadas a partir do **ClienteBanco** ou seja, as informações do cliente.
2. **: ContaPoupanca** é o retorno do método, onde será o objeto de conta poupança.
3. A mensagem __console.log(`Olá, ${cliente.nome}! Sua conta poupança foi criada com sucesso! `);__ pegando o nome do cliente através do parâmetro "cliente" que contém as informações do cliente será impressa e o retono __return new ContaPoupanca(0, cliente);__ fará a criação da nova conta poupança e retornará ao programa.

__depositar(conta: Conta, valor: number): string{}__
1. O método **depositar()** possui dois parâmentros: **conta**, que receberá as informações da conta que o depósito será feito. O parâmentro recebe as informações do objeto __Conta__, que contém as informações da conta criada e está atrelada ao cliente proprietário. O segundo parâmetro, **valor**, receberá o valor de depósito.
2. **conta.saldo += valor;** pega o saldo atual do cliente e soma com o valor de depósito.
3. **: string** retornará uma mensagem informando o depósito feito return `Olá, ${conta.titularConta.nome}! Seu saldo atual após depósito é de ${conta.saldo.toFixed(2)}`. Além disso, mostramos o saldo atual que está no parâmentro conta e o formatamos para duas casas decimais utilizando o toFixed(2).

__sacar(conta: Conta, valor: number): string{}__
1. O método **sacar()** possui dois parâmentros: **conta**, que receberá as informações da conta que o depósito será feito. O parâmentro recebe as informações do objeto __Conta__, que contém as informações da conta criada e está atrelada ao cliente proprietário. O segundo parâmetro, **valor**, receberá o valor de saque.
2. O objetivo do método é verificar qual o tipo de conta que será feito o saque e, a partir dai, realizar a transação. Para realizar a transação, o if deve verificar se a conta é do tipo *corrente* e, caso seja, se o valor de saldo + cheque especial é suficiente para o saque. Se a conta for do tipo *poupança* e o saldo for maior ou igual que o valor de saque, a transação será realizada.
3. __conta.saldo -= valor;__ fará a subtração de valor caso a conta seja poupança ou corrente. Já que estamos analisando as duas probabilidades utilizando __if e else if__
4. O método deve retornar uma string. No caso da verificação de conta corrente, caso o usuário esteja sacando desse tipo de conta, a mensagem __return `${conta.titularConta.nome}, seu saque de R$${valor.toFixed(2)} realizado com sucesso. Saldo atual: R$${conta.saldo.toFixed(2)}.`;__ será retornada, informando o valor de saque e o saldo atual de conta, utilizando o toFixed(2) para a formatação em duas casas decimais.
5. O else que fecha o método será iniciado quando as condições do if ou else if não forem atendidas. Ele retorna uma mensagem de saldo insuficiente: __return "Saldo insuficiente.";__

__transferir(Contaorigem: Conta, Contadestino: Conta, valor: number): string{}__
1. O método possui os parâmetros: **Contaorigem** que recebe o objeto __Conta__ e armazena as informações da conta que fará a transferência. **Contadestino** também recebe __Conta__ e armazena as informações da conta que recerá a transferência. O parâmetro **valor** recebe o valor de transferência.
2. **: string** é o retorno do método, uma mensagem do tipo string.
3. __if (Contaorigem.tipoDeConta === tipoConta.corrente)__ verifica se o tipo de conta que fará a tranferência é corrente e caso de verdade, verifica se o saldo da conta + cheque especial é >= valor de transferência, utilizando o código __if ((Contaorigem.saldo + contaCorrenteOrigem.ChequeEspecial) >= valor)__.
4. __const contaCorrenteOrigem = Contaorigem as ContaCorrente;__ é uma operação chamada _Type Assertion_ onde, se informa ao compilador explicitamente um valor. No código, ele diz ao compilador TypeScript para tratar *Contaorigem* como se fosse do tipo do objeto *ContaCorrente*.
5. Caso o if __if ((Contaorigem.saldo + contaCorrenteOrigem.ChequeEspecial) >= valor)__ seja verdadeiro, será subtraido o valor de transferência da conta de origem __Contaorigem.saldo -= valor;__ e adicionado o valor na conta de destino __Contadestino.saldo += valor;__. Além disso, retornará uma mensagem de sucesso de transação. Caso if de verificação de valor __if ((Contaorigem.saldo + contaCorrenteOrigem.ChequeEspecial) >= valor)__ seja falso, o else com a mensagem de saldo insuficiente será executado.
6. Se o if de verificação do tipo de conta for falso, ou seja, a conta de origem da tranferência não é do tipo corrente, o _else if_ verificará se o tipo de conta é poupança e se o saldo é suficiente para a tranferência. Caso o if seja verdadeito será subtraido o valor de transferência da conta de origem __Contaorigem.saldo -= valor;__ e adicionado o valor na conta de destino __Contadestino.saldo += valor;__. Se o resultado for falso, uma mensagem de saldo insuficiente será mostrada ao usuário.

# Termos para pesquisa
1. _Type Assertion_ => termo _AS_
2. Visibilidade de código => _private, public, protected_
3. Palavra chave _static_