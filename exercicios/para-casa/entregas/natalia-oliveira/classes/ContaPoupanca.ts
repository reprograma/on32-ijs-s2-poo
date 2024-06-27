import { ClienteInterface } from "../interfaces/ClienteInterface";
import { Conta } from "./Conta";

export class ContaPoupanca extends Conta {
    constructor(cliente: ClienteInterface, numero: number) {
        super(cliente, numero);
    }
}