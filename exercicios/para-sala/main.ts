import { Produto } from "./produtos/produto"
import { ProdutoInterface } from "./produtos/interfaces/produtos.interface"
import { ProdutoTipoEnum } from "./produtos/enums/produto-tipo-enum"
import { ProdutoVariante } from "./produtos/produto-variante"
import { ProdutoDigital } from "./produtos/produto_digital"

//exercicios feitos pela profa aqui
console.log("rodando")


const produto = new Produto("Regata Laranja", 100, "Regata Laranja M")
const produtoObj: ProdutoInterface = {
    nome: "produto obj",
    descricao: "",
    preco: 0,
    tipo: ProdutoTipoEnum.DIGITAL
}

const produtoDigital = new ProdutoDigital( "Código Limpo", 90, "Abordando as complexidades de um software limpo.")
const regataRosa = new ProdutoVariante("Regata", 110, "Modelo primavera, tamanho G", 'Rosa')

const display = (...produtos: ProdutoInterface[]): void => {
    console.table(produtos)
}

//simulando carrinho
display(produto, produtoObj, produtoDigital, regataRosa)