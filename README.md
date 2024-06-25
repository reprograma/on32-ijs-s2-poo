<h1 align="center">
  <img src="assets/reprograma-fundos-claros.png" alt="logo reprograma" width="500">
</h1>

# Tema da Aula

Turma Online XX - Imersão JavaScript | Semana XX | 20XX | Professora XXXXX

### Instruções
Antes de começar, vamos organizar nosso setup.
* Fork esse repositório 
* Clone o fork na sua máquina (Para isso basta abrir o seu terminal e digitar `git clone url-do-seu-repositorio-forkado`)
* Entre na pasta do seu repositório (Para isso basta abrir o seu terminal e digitar `cd nome-do-seu-repositorio-forkado`)

### Objetivo
Entender na pratica de como utilizar os 4 conceitos da orientação a objetos com typescript.

### Resumo
Breve resumo de programação declarativa X imperativa e exemplos praticos de programação e teoria resumida de programação orientada a objetos.

# Conteúdo
Breve introdução sobre padgma de programação. 

### A Programação Imperativa

é um conceito baseado em estados, definidos por variáveis, e ações que são manipuladoras de estado, procedimentos.
Geralmente o programador(a) informa como as instruções devem ser executadas. 

#### Programaçao Procedural
Como a definical já diz, ela é uma programação aonde o programador define instruções em sequencia. 
Aplicamos quando utilizamos estrutura de if else ou quando escrevemos uma sequencia lógica de ações.

#### Programacao Orientada a objetos
Por definição simples, utilizamos classes e instancia que por sua vez, possui comportamentos (métodos) que expões as informações. Por ser baseado em comportamento, facilita muito abstrair necessidades do mundo real (funcionalidades = regras de negocio) para instruções em ordem lógica a ser execultada dentro da aplicação.


#### Programacao orientada a eventos.
Por definição simples, o aplicação escuta eventos e também emite eventos. Essa abordagem é muito util quando precisamos execultar multiplas tarefas ao mesmo tempo em modulos diferentes,
o ponto negativo que fica mais dificil entender o que está acontecendo em casos de bugs

#### Programacao funcional
Por definicao simples, pequenas funcoes, fazem pequenas acoes, com entrada e saida. Sua principal caracteristica é ser imutável. 

### Programação Declarativa
Ao contrario do conceito anterior, apenas informa o que precisa ser feito, ou seja, a partir daquela informação que o computador decide qual é a melhor solucao.
Ex: SQl que é uma linguagem de consulta.


### Extra
Vale apena ressaltar que algumas linguagems de programação pode ter suporte a multiplos paradmas, ex: Typescript, Koltin.

Embora não seja regra, mas geralmente o paradgma da linguagem acaba influenciando no tipo de banco de dados escolhido. Ex:  uma aplicacao com typescript, geralmente vai ter banco relacional, enquanto o javascript, geralmente vem com banco não-relacional.


#### OS 4 pilares do POO

#### Herença
A definição básica de herança é uma classe derivada poder herdar atributos e métodos de uma classe mae -- super classe.

##### Classe Abstrata

Ela não pode ser instanciada diretamente, sendo necessário uma classe derivada extender.

```typescript
abstract class Produto {
    nome: string;
    preco: number;
    percentualDeDesconto: 10

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }

    // Método abstrato que deve ser implementado pelas subclasses
    abstract exibirDetalhes(): void;

    // Método não abstrato que pode ser utilizado pelas subclasses
    calcularDesconto(): number {
        return this.preco * (1 - this.percentualDeDesconto / 100);
    }
}
```

Sua principal vantagem é poder abstrair de forma mais generica possivel uma regra de negocio. 
Outra vantagem, que podemos obrigar que classes derivadas sobrescrevam métodos, essa ação é chamada de sobrescrita. 

Sua desvantagem é que a depender da evolução da aplicação, ela acaba precisando ser muito modificada, o que pode acarretar em efeitos colaterais.


##### Classe concreta

Uma classe concreta é aquela que pode ser instanciada, diferente da abstrata que não. Ela pode extender de uma outra classe concreta ou de uma classe abstrata.

```typescript
class ProdutoFisico extends Produto {
    tipo: number; // Garantia em meses

    constructor(nome: string, preco: number, tipo: number) {
        super(nome, preco);
        this.tipo = tipo;
    }

    // sobrecarga do método abstrato exibirDetalhes
    exibirDetalhes(): void {
        console.log(`Produto Nome: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

```

##### Classe derivada

Uma classe pode ser considerada derivada, quando extendemos uma classe mae -- super classe.
Para indentificar se a classe é derivada, basta verificar se a mesma possui essa sequencia:

`class` NomeDaClasse `extends` ClasseMae

```typescript
class ProdutoVariacao extends ProdutoFisico {
    cor: string

    constructor(nome: string, preco: number, tipo: number, cor: string) {
        super(nome, preco, tipo);
        this.cor = cor;
    }

    // sobrecarga do método abstrato exibirDetalhes
    exibirDetalhes(): void {
        console.log(`Produto Eletrônico: ${this.nome}`);
        console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    }
}

```
##### Benefícios
Os pontos positivos de utilizar herança é poder herdar propriedades e métodos. Quando feito de forma sensata, garante um graul alto de confiança na aplicação e muita reutilização de código.


##### Pontos negativos
O ponto negativo é que caso aja uma alteração nas super-classe é necessário alterar todas as classes filhas e pontos que estão sendo instanciadas. 


#### Abstracao
Abstração é um principio que auxilia na simplificação da complexidade de um sistema.

Podemos entender de duas formas:

A primeira técnica a nivel de código.

Permite por meio de interfaces ou classes abstratas, simplificar o código,  definindo "o que" aquele objeto faz. Com essa abordagem não é necessário se preocupar com a implementação de fato.

A partir do momento que trabalhamos com abstrações, facilitamos a manutenção e evolução do sistema, 
porque nos preocupamos com comportamentos e não com implemtação, como cada classe tem o seu comportamento definido por uma interface ou classe abstrata, fazer uma alteração, não gera efeitos colaterais nas demais. 

A segunda parte a nivel de negocio (indepente de orientação a objetos). 
Permite traduzir uma regra de negocio de um sistema para a modelagem e a partir da modelagem definir comportamentos. 
Ex: um cliente precisa somente exibir os produtos no site, no entanto, o pagamento e frete será feito por meio de contato por whatsapp.

Nesse caso, o desenvolvedora só precisaria se preocupar em modelar a classe Produto, já que pelo os requisitos do cliente, não vai ser necessário modelar as classes referente a pagamento e frete. 

envolve também conceitos de MVP (minimo produto viavel), Prototipo(codigo rapido, cheio de gambiarra e descartavel) e Spike(pesquisa de viabilidade),
isso porque é no processo de abstração que fazemos também o levantamento de requisitos. 

##### Beneficios
Código limpo, escalável, entendivel por todos e idenpontente.

##### Pontos negativos
Uma abstração mal feita, pode comprometer um sistema inteiro, ou gerar bugs dificil de serem localizados. 


#### Polimorfismo
O polimorfismo, define um contrato a ser seguido, ele trabalha junto a abstração, no sentido de "O que".
- O que uma função recebe
- O que uma funcao retorna
- O que um método recebe
- O que um método retorna
- O que de propriedades métodos e propriedade uma classe tem.
- O que de comportamento uma classe tem.

No entanto, o poliforismo apenas indica o que precisa ter, sem entrar no mérito de implemtação. 
Isso auxilia a ter sistemas organizados, modulares e simplificados. 

#### Benefícios
Facil manutenção e adição de novas funcionalidades.

#### Pontos negativos
Assim como ma abstração mal feita, pode comprometer um sistema inteiro, ou gerar bugs dificil de serem localizados. 
Especificamente no typescript, a abstração é por meio de semelhanca, então em alguns casos, a função pode aceitar uma instancia de classe completamente diferente, porque possui o mesmo contrato e gerar bug dificil de ser detectado.
A alteração de uma interface, pode gerar a necessidade de modificar varios métodos e classes.
Complexidade, implementar o polimorfismo é muito complexo, pq é necessário combina-lo com todos os outros conceitos.

#### Encapsulamento
O encapsulamento pode ser dividido em alguns sub-topicos. 

> Acesso a propriedade
obj.nome << comportamento = metodo 
Nesse caso o encapsulamento pode ser utilizado somente para retornar uma propriedade privada que não poderia ser acessada diretamente. 

> Com `getter` `get nome()`
Nesse caso o encapusulamento pode ser utilizado sobrescrever o comportamento original de um get (acesso a propriedade) podendo manipular aquela informação

> Na confiabilidade de um código
Imagina que um sistema possui varios nivels de acesso para varios usuarios
poderiamos ter um metodo validarPermissao

Implemtação para um usuario normal
```typescript
auth.estaPermitido(userId: string): boolean { // instancia da classe UserAuth
   // ---
   mesalide.status == "paga"
  return this.usuario.id === userId
}
```
Implemtação para um admin
```typescript
auth.estaPermitido(userId: string): boolean { // instancia da classe AdminAuth
  return true
}
```

> Na simplificação

```typescript
class produto {
  tipo: number
  estoque: number
  rascunho: boolean
  estaDisponivel() {
    if (this.rascunho) {
      return false
    }
    if (this.isDigital()) {
      return true
    }
    return this.estoque > 0
  }
  isDigital(): boolean {
    this.tipo === 1 && this.estoque === -1
  }
  isFisico() {
    return !this.isDigital()
  }
  estoqueDisponivel() {
    if (this.isDigital()) return true
    return this.estoque > 0
  }
}
```

Exemplo sem encapsulamento.

```typescript
interface Produto {
    tipo: number;
    estoque: number;
}

// Função para verificar se o produto é digital
function isDigital(produto: Produto): boolean {
    return produto.tipo === 1 && produto.estoque === -1;
}

// Função para verificar se o produto é físico
function isFisico(produto: Produto): boolean {
    return !isDigital(produto);
}

// Função para verificar a disponibilidade do estoque
function estoqueDisponivel(produto: Produto): boolean {
    if (isDigital(produto)) {
        return true; // Produto digital está sempre disponível
    }
    return produto.estoque > 0; // Produto físico precisa ter estoque > 0
}
```
Analisando ambos os exemplos, para ponto de partida, podemos ter algo como:

```typescript
const produtosEncapsulados: Produto[] = [new Produto()]
const produtos:  Produtos = [{}]

// com encapusulamento
const produtoEncapsuladoDisponivel = produtosEncapsulados.filter(produto => produtoEncapsulado.estaDisponivel())

// sem encapusulamento
const produtosDisponivels = produtos.filter(produto => {
if (!produto.rascunho) {
  return true
}
if (isDigital()) {
 return true
}

if (produto.estoque > 0) {
  return true
}

return false
})
```

##### Benefícios
Pordemos concluir a partir dos exemplos, que o encasulamento trás as regras de négocio para proximo as propriedades, trazendo mais segurança para o código.
Combinado com o poliformismo, facilita a manutenção e ecalonamento de código
Combinado com herança, facilita a reutilização de regras do código.
Reduz consideravelmente a quantidade de ifs. 

##### Pontos Negativos
É geralmente é necessário mais código para funciocar da maneira adquada.
Fica mais complicado o debug, pq é necessário ter o estado da classe.
Pode dificultar testes unitários, quando se trata de métodos privados.
Adição de novas funcionalidades pode ser uma tarefa dificil, porque pode gerar efeitos colaterais


# instruções 

`npm i -g ts-node` 
> utilize esse pacote para rodar diretamente um arquivo .ts :

`ts-node file.ts`
> ou
`npx ts-node file.ts`

> em caso de erros de import:

`ts-node file --esm` 

> Atenção ao **CAMINHO RELATIVO**

### Exercícios 
### Material da aula 
* [Material](/material)

### Links Úteis

<p align="center">
Desenvolvido com :purple_heart:  
</p>

