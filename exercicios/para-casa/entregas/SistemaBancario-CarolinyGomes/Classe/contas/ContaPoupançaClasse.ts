//classe conta poupança

import { contaBancaria } from "../../Interface/ContaBancaria-interface";
import { ContaTipoEnum } from "../../enums/ContasTipoEnum";

export class ContaPoupanca implements contaBancaria {
  public tipo: ContaTipoEnum.POUPANCA;
  private saldo: number = 0;

  constructor(saldoInicial: number) {
    this.tipo = ContaTipoEnum.POUPANCA;
    if (saldoInicial >= 100) {
      this.saldo = saldoInicial;
    }
  }
  sacar(valor: number): void {
    if (valor > this.saldo) {
      console.log("Saldo Insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Valor sacado na conta poupanca: R$ ${valor}`);
    }
  }
  depositar(valor: number): void {
    console.log(`Valor depositado na conta poupanca: R$ ${valor}`);
    this.saldo += valor;
  }

  transferir(valor: number, contaDestino: contaBancaria): void {
    this.saldo -= valor;
    console.log(`Valor transferido da conta poupanca: R$ ${valor}`);
    contaDestino.depositar(valor);
  }

  public getSaldo(): number {
    return this.saldo;
  }
}
