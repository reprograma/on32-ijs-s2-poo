import { Cliente } from "../../cliente/cliente";
import { Conta } from "../conta";
import { ContaTipoEnum } from "../enum/conta-tipo.enum";

export interface ContaInterface {
    cliente: Cliente,
    saldo: number,
    tipoConta: ContaTipoEnum,
    depositar(valor: number): void,
    sacar(valor: number): void,
    transferir(valor: number, destino: Conta): void
}