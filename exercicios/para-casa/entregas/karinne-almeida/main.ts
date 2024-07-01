import { Cliente } from "./cliente/cliente";
import { ClienteInterface } from "./cliente/interface/cliente.interface";
import { Conta } from "./conta/conta";
import { ContaCorrente } from "./conta/contaCorrente";
import { ContaInterface } from "./conta/interface/conta.interface";

const cliente1 = new Cliente('karinne', 
    {
        rua: 'alegria', 
        numero: '7', 
        cidade: 'niteroi', 
        bairro: 'barreto', 
        estado: 'rj', 
        cep: '24420025'
    }, 
    '21979491989',
    200)

const cliente2 = new Cliente('almeida',
    {
        rua: 'tristeza',
        numero: '7',
        cidade:'sao goncalo',
        bairro: 'neves',
        estado: 'rj',
        cep: '24420025'
    }, 
    '21979491989',
    1000)


const displayClientes = (...clientes: ClienteInterface[]): void => {
    console.table(clientes);
}
const displayContas = (...contas: ContaInterface[]): void => {
    console.table(contas);
}

displayClientes(cliente1, cliente2)

console.log(cliente1.contaCorrenteDisponivel());


const conta1 = new Conta (cliente1, 0, 1)
const conta2 = new Conta (cliente2, 0, 1)
const contaCorrente1 = new ContaCorrente (cliente2, 0, 2)

displayContas(conta1, conta2)

conta1.depositar(200);
conta2.depositar(1000);

displayContas(conta1, conta2)

conta2.transferir(400, conta1);

displayContas(conta1, conta2)

contaCorrente1.sacar(50);

displayContas(conta1, conta2, contaCorrente1)