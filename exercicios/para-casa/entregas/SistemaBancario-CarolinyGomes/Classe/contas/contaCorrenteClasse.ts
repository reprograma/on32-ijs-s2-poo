//classe conta corrente

import { contaBancaria } from "../../Interface/ContaBancaria-interface";
import { ContaTipoEnum } from "../../enums/ContasTipoEnum";

export class ContaCorrente implements contaBancaria {
  public tipo: ContaTipoEnum.CORRENTE;
  private saldo: number = 0;
  private chequeEspecialLimite: number = 100;

  constructor(saldoInicial: number) {
    this.tipo = ContaTipoEnum.CORRENTE;
    if (saldoInicial >= 500) {
      this.saldo = saldoInicial;
    }
  }

  /*Lógica do cheque especial:
   * se saldo + chequeEspecialLimite forem maior do que valor de saque então pode sacar
   * se valor de saque for maior do que saldo + chequeEspecialLimite, atingiu limite do
   chequeEspecialLimite + saldo junto, então é saldo insuficiente na conta, não pode sacar
   */
  sacar(valor: number): void {
    if (this.saldo + this.chequeEspecialLimite >= valor) {
      this.saldo -= valor;
      console.log(`Valor sacado na conta corrente: R$ ${valor}`)
    } else {
      console.log("Você atingiu limite do cheque especial, Saldo insuficiente");
    }
  }

  depositar(valor: number): void {
    console.log(`Valor depositado na conta corrente: R$${valor}`);
    this.saldo += valor;
  }

  transferir(valor: number, contaDestino: contaBancaria): void {
    this.saldo -= valor;
    console.log(`Valor transferido da conta corrente: R$${valor}`)
    contaDestino.depositar(valor)
  }

  public getSaldo(): number {
    return this.saldo;
  }
}
