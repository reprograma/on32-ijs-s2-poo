import { tipoConta } from "./tipo-conta-enum";

export interface ClienteBanco{
    id: number;
    nome: string;
    endereco: string;
    numeroTelefone: string;
    rendaMensal: number;
    
}

export interface Conta{
    numeroConta: number;
    saldo: number;
    titularConta: ClienteBanco;
    tipo: tipoConta
}