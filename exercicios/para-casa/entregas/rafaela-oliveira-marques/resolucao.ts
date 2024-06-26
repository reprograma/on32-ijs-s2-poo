import { ContaBanco } from "./entities/ContaBanco";
import { PessoaFisica } from "./entities/PessoaFisica";
import { PessoaJuridica } from "./entities/PessoaJuridica";
import { TipoConta } from "./entities/tipoConta";

const cliente1 = new PessoaFisica(
  "Mariana",
  "123.543.999-00",
  "Rua das flores, 32 - Centro, Aracaju - SE",
  "79999238772",
  2300
);

const contaBancariaCliente1 = new ContaBanco(
  "0001",
  cliente1,
  "1234-x",
  "98.872-1",
  TipoConta.Poupanca,
  "basico",
  0.0
);
contaBancariaCliente1.depositar(1000.0);

const cliente2 = new PessoaJuridica(
  "Reprograma",
  "01.234.987/0001-01",
  "Av.Paulista, 16 - Centro, São Paulo - SP",
  "1143250193",
  50000.0
);
const contaBancariaCliente2 = new ContaBanco(
  "0002",
  cliente2,
  "1234-x",
  "200.654-9",
  TipoConta.Corrente,
  "empresarial",
  1500.0
);

console.log(cliente1);
console.log(cliente2);
console.log(contaBancariaCliente1.saldo);
console.log(contaBancariaCliente2.saldo);
contaBancariaCliente1.sacar(3000);
contaBancariaCliente2.sacar(1500);
contaBancariaCliente1.depositar(500000);
