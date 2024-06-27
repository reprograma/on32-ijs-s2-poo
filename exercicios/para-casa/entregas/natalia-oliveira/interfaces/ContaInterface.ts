import { Conta } from "../classes/Conta";
import { ClienteInterface } from "./ClienteInterface";


export interface ContaInterface {
    cliente: ClienteInterface;
    numeroConta(valor: number): void;
    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, contaDestino: Conta): void;
    visualizarSaldo(): number;
   
}