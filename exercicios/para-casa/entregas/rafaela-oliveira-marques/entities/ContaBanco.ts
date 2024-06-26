import { PessoaFisica } from "./PessoaFisica";
import { PessoaJuridica } from "./PessoaJuridica";
import { TipoConta } from "./tipoConta";

export class ContaBanco {
  id: string;
  cliente: PessoaFisica | PessoaJuridica;
  agencia: string;
  contaNumero: string;
  tipo: TipoConta;
  cestaTarifa: string;
  saldo: number;
  chequeEspecial?: number;

  constructor(
    id: string,
    cliente: PessoaFisica | PessoaJuridica,
    agencia: string,
    contaNumero: string,
    tipo: TipoConta,
    cestaTarifa: string,
    saldo: number
  ) {
    if (tipo === TipoConta.Corrente && saldo < 500.0) {
      throw new Error(
        "Para abrir uma conta com tipo Corrente é necessário possuir saldo minimo de R$ 500.00"
      );
    }

    TipoConta.Corrente ? (this.chequeEspecial = 100.0) : 0.0;

    this.id = id;
    this.cliente = cliente;
    this.agencia = agencia;
    this.contaNumero = contaNumero;
    this.tipo = tipo;
    this.cestaTarifa = cestaTarifa;
    this.saldo = saldo;
  }

  sacar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do saque deve ser maior que zero.");
    }

    if (this.saldo < valor) {
      console.log("Saldo insuficiente.");
    }

    this.saldo -= valor;
  }

  depositar(valor: number): void {
    if (valor <= 0) {
      console.log("O valor do depósito deve ser maior que zero.");
    }

    this.saldo += valor;
    console.log(`Saldo atualizado para R$ ${this.saldo}`);
  }
}
