
import { Cliente } from "./Classe/clients/clientesClasse";
import { ContaCorrente } from "./Classe/contas/contaCorrenteClasse";
import { ContaPoupanca } from "./Classe/contas/ContaPoupançaClasse";
import { contaBancaria } from "./Interface/ContaBancaria-interface";

// Instancia um cliente de teste
const clienteTeste = new Cliente(
  1,
  "John Doe",
  "rua desconhecida, casa n333, bairro: Morro do Meio, Cidade: Joinville",
  "(99) 99 999-9999",
  1800
);

// Função para exibir dados do cliente
const exibeDadosCliente = (...cliente: Cliente[]): void => {
  const dadosCliente = cliente.map((item) => {
    return {
      id: item.getId(),
      nomeCompleto: item.getNomeCompleto(),
      endereco: item.getEndereco(),
      numeroTelefone: item.getNumeroTelefone(),
      rendaSalarial: item.getRendaSalarial(),
      contas: item.getContas(),
    };
  });
  console.log("Dados do cliente:");
  console.table(dadosCliente);
};

// Função para exibir dados das contas criadas
const exibirContas = (...contas: contaBancaria[]): void => {
  const contaDados = contas.map((item)=> {
      return {
          tipo: item.tipo,
      }
  })
  console.table(contaDados)
}

// Função para criar contas
const criarContas = (valor: number): void => {
  console.log(
    "_____________________Criação de conta_____________________________"
  );

  const contaCorrente = new ContaCorrente(valor);
  const contaPoupanca = new ContaPoupanca(valor);
  contaCorrente.getSaldo();
  contaPoupanca.getSaldo();

  if (valor >= 500) {

    clienteTeste.adicionarConta(contaCorrente);
    clienteTeste.adicionarConta(contaPoupanca);
    console.log(`Você adicionou um valor de: R$${valor}`);
    console.log(
      "Parabéns! Você possui uma nova conta corrente e uma nova conta poupança."
    );
    console.log(`Seu saldo atual na conta poupanca e conta corrente: R$${contaPoupanca.getSaldo()}`);
    exibirContas(contaCorrente, contaPoupanca)

  } else if (valor >= 100) {

    console.log(`Você adicionou um valor de: R$${valor}`);
    clienteTeste.adicionarConta(contaPoupanca);
    console.log("Parabéns! Você possui uma nova conta poupança.");
    console.log(`Seu saldo atual na conta poupanca: R$${contaPoupanca.getSaldo()}`);
    exibirContas(contaPoupanca)

  } else {
    console.log(
      "Valor insuficiente para criar uma nova conta corrente ou conta poupança."
    );
  }

  exibeDadosCliente(clienteTeste);
};

const exibeMovimentacaoContas = (
  conta: ContaCorrente | ContaPoupanca,
  opcao: string,
  valor: number = 0,
  contaDestino?: ContaCorrente | ContaPoupanca
) => {
  console.log(
    "_____________________Movimentação da conta_____________________________"
  );

  switch (opcao) {
    case "saque":
      console.log("Você escolheu a opção saque");
      // função para saque
      conta.sacar(valor);
      break; //sai do loop
    case "deposito":
      console.log("Você escolheu a opção deposito");
      // função para deposito
      conta.depositar(valor);
      break; //sai do loop
    case "transferencia":
      /*verificação para garantir que contaDestino 
      não seja undefined caso não informe a conta destino para transferencia*/
      if (contaDestino) {
      console.log("Você escolheu a opção transferencia");
      //função transferencia
      conta.transferir(valor, contaDestino); //sai do loop
    } else {
      console.log('Conta destino não informada para transferência');
    }
      break;
    default:
      console.log("essa opção não existe");
      break;
  }
  conta.getSaldo();
};

exibeDadosCliente(clienteTeste);
criarContas(100);

const contaCorrente = new ContaCorrente(5000);
const contaPoupanca = new ContaPoupanca(8000);
exibeMovimentacaoContas(contaCorrente, "saque", 2000);
exibeMovimentacaoContas(contaPoupanca, "saque", 4000);
