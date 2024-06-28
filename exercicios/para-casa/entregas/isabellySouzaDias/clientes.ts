import { clientes } from "./interface";

export class Cliente implements clientes{
    nomeCompleto: string;
    numeroID: string;
    endereco: string;
    telefone: string;
    rendaSalario: number;
    constructor(nome:string,numID:string,endereco:string, tel:string,salario:number){
        this.nomeCompleto = nome,
        this.endereco = endereco,
        this.numeroID = numID,
        this.telefone = tel,
        this.rendaSalario = salario
    }

}