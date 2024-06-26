import { DetalhesCliente } from "../interfaces/cliente";

export interface ContaBancaria {
    cliente: DetalhesCliente;
    numeroConta: number;
    tipoConta: `CORRENTE` | `POUPANCA`;
    saldo: number;

    depositar(valor: number): void;
    sacar(valor: number): void;
    transferir(valor: number, destinatario: ContaBancaria): void;
}