import { ClienteInterface, endereco } from "./interface/cliente.interface";

export class Cliente implements ClienteInterface {

    constructor (public nome: string, public endereco: endereco, public telefone: string, public renda: number) {}
    contaCorrenteDisponivel(): boolean {
        return this.renda >= 500
    }

}