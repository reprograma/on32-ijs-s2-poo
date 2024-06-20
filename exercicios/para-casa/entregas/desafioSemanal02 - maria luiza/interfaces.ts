export interface ClienteBanco{
    id: number;
    nome: string;
    endereco: string;
    numeroTelefone: string;
    valorDeposito: number;
}

export interface conta{
    numeroConta: number;
    saldo: number;
    titularConta: ClienteBanco;
}