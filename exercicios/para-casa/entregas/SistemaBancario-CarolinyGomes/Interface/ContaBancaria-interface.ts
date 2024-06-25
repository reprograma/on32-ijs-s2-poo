//interface da conta bancaria

import { ContaTipoEnum } from "../Classe/Contas/enums/ContasTipoEnum";

export interface contaBancaria {
  tipo: ContaTipoEnum
  sacar(valor: number): void;
  depositar(valor: number): void;
  transferir(valor: number, contaDestino: object):void;
  getSaldo(): number;
}
