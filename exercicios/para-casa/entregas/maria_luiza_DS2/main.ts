
import { NovoCliente, banco} from "./classes";

const iniciarBanco = new banco();

// clientes novos
// const clienteMaria = new NovoCliente("Maria Luiza", "Rua das cachoeiras, 34", "(11) 98752-1145", 100)
const clienteRafa = new NovoCliente("Rafaela Andrade", "Rua das piscinas, 3", "(11) 92789-2541", 800)
const clienteMatheus = new NovoCliente("Matheus Santos", "Rua dos chiquinhos, 345", "(11) 98765-4312", 8000 )


// conta corrente, onde a renda salarial <500 
// const ContaCorrenteMaria = iniciarBanco.criarContaCor(clienteMaria);

// conta corrente, onde a renda salarial >500 
const ContaCorrenteRafa = iniciarBanco.criarContaCor(clienteRafa);

// conta poupança
const ContaPoupancaMatheus = iniciarBanco.criarContaPop(clienteMatheus);

// Manipulando contas isoladamente
if(ContaPoupancaMatheus){
    console.log(iniciarBanco.depositar(ContaPoupancaMatheus, 2000));
    console.log(iniciarBanco.depositar(ContaPoupancaMatheus, 500));
    console.log(iniciarBanco.sacar(ContaPoupancaMatheus, 100))
}

if(ContaCorrenteRafa){
    console.log(iniciarBanco.depositar(ContaCorrenteRafa, 1000));
    console.log(iniciarBanco.depositar(ContaCorrenteRafa, 50));
    console.log(iniciarBanco.sacar(ContaCorrenteRafa, 500))
}

// Transferências entre as contas criadas
if (ContaCorrenteRafa && ContaPoupancaMatheus) {
    console.log(iniciarBanco.transferir(ContaCorrenteRafa, ContaPoupancaMatheus, 100)); // exemplo de transferência realizada
    console.log(iniciarBanco.transferir(ContaPoupancaMatheus, ContaCorrenteRafa, 3000)); // exemplo de transferência não realizada
}
