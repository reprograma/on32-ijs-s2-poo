
export interface clientes{
    nomeCompleto: string,
    numeroID: string,
    endereco: string,
    telefone: string,
    rendaSalario: number;
}

export interface conta{
    id: string,
    saldo:number,

    depositar(valor:number):void,
    sacar(valor:number):void;

}