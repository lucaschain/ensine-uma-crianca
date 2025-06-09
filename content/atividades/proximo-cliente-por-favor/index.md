---
title: "Próximo Cliente, Por Favor"
date: 2025-06-03T10:00:00-03:00
draft: false
summary: "Como contabilizar o preço de carrinho de compras usando variáveis"
weight: 11
aliases:
  - /10
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [1 - Mais Scratch](https://projects.raspberrypi.org/pt-BR/pathways/more-scratch)

**Atividade:** [4 - Next customer please](https://projects.raspberrypi.org/en/projects/next-customer-please)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1184274143/)

---

{{< youtube uF5zlagohh0 >}}

O jogo que você vai aprender a fazer hoje pode ser o início de uma ideia pra criar um sistema de mercados!

No projeto de hoje, vamos criar um catálogo de produtos que um cliente pode colocar no carrinho e comprar.

{{< details summary="O que você vai fazer" >}}
Pra ver uma versão do jogo funcionando, acesse a [página do material original](https://projects.raspberrypi.org/en/projects/next-customer-please/0) na seção "What you will make" e veja os exemplos de lojas que pode criar!

Pode ser uma loja de roupa, bandeira, comidas, brinquedos, ou qualquer outra coisa que você quiser.

Quando estiver testando, tente fazer a compra antes de adicionar qualquer produto - o que acontece?

E uma reflexão antes de você começar:

> ❓Como vamos saber se nosso carrinho está vazio?

Uma dica: vamos usar o valor de uma variável.
{{< /details >}}

{{< details summary="Sua loja" >}}
Agora é sua vez de pensar como vai ser seu empreendimento: crie um novo projeto no Scratch e procure (ou desenhe) um cenário pra sua loja.

Pense em quais coisas podem compor o cenário:

- um balcão?
- um caixa?
- uma prateleira pra colocar os itens?
- uma vitrine?
- um painel de preços?

E além disso, adicione também um [ator](/conceitos/atores/) que vai atender os clientes e conversar com eles.

No código desse ator, já vamos adicionar um código pra ele conversar com nosso jogador:

Quando a bandeira verde for clicada, esse ator vai chamar o próximo cliente:

{{< image path="imagens/vendedor-1.png" alt="Código inicial do ator vendedor" >}}

Pro meu exemplo, vou fazer uma loja de poções, e a vendedora vai ser uma bruxa!

{{< image path="imagens/preview-1.png" alt="Visualização do jogo com o cenário inicial e a bruxa chamando o próximo cliente" >}}
{{< /details >}}

{{< details summary="Itens à venda" >}}
Pra contabilizar o preço total do carrinho, vamos usar uma [variável](/conceitos/variaveis/) e vamos chamá-la de `total`.

Pra criar uma variável, vá na seção "Variáveis" de blocos e clique em `Criar nova variável`. Não se esqueça de selecionar `para todos os atores`, já que mais de um ator vai mudar o valor dessa variável.

E no código do ator vendedor, vamos adicionar o código pra sempre começar o novo cliente com o total zerado:

{{< image path="imagens/vendedor-2.png" alt="Bloco que zera o total adicionado no ator da bruxa" >}}

Você já pensou quais itens sua loja vai vender?

No meu exemplo, vou colocar ingredientes de poções à venda. Vou começar com um ator (`Wizard Hat`).

Depois de selecionar seu ator, mude a fantasia dele pra incluir uma etiqueta ou placa com o preço:

{{< video path=imagens/item-1.mp4 >}}

Além disso, adicione um novo som no seu ator para que ele seja tocado quando o item for selecionado. Eu vou usar o som `pop` em meu exemplo.

Por último, vamos fazer o código do produto. Quando clicarmos nele, ele deve adicionar o valor ao total, e emitir um som:

{{< image path="imagens/item-1.png" alt="Código do item que será comprado" >}}

Agora, adicione mais alguns itens repetindo esse processo até que sua loja fique cheia!

Minha loja tá ficando assim:

{{< image path="imagens/preview-2.png" alt="Jogo com cenário, vendedor e produtos com preços listados" >}}
{{< /details >}}

{{< details summary="Compras" >}}
Quando o jogador terminar de comprar, ele deve clicar no vendedor pra concluir sua compra.

Primeiro, o vendedor deve dizer pro cliente quanto deu o total da compra.

Pra fazermos isso, vamos usar o bloco `diga ...`.

Nesse bloco, só temos um espaço em branco pra colocar nosso texto. Temos a opção de colocar o `total` diretamente lá, mas o vendedor só falaria um número, e não a frase completa.

Nós queremos que a vendedora diga `"O valor da sua compra é 50"`. Como podemos fazer isso, já que o valor da compra está dentro da variável (gaveta) `total`?

Exite um bloco chamado `junte ... com ...`, que serve pra grudar 2 palavras ou números um no outro.

Se juntarmos a frase  `"O valor da sua compra é ` com a variável `total`, a frase fica completa:

{{< image path="imagens/junte-1.png" alt="O bloco junte pra unir a frase com o conteúdo da variável" >}}

(note que há uma barra espaço no final da frase `O valor da sua compra é `, assim ela não fica grudada com o valor)

E o código da compra por enquanto tá assim:

Pra deixar tudo mais imersivo, quero tocar um som de máquina registradora quando a venda for concluída, então vou na aba `Sons` e vou adicionar o som com nome `Machine` no ator da bruxa.

Esse som é parecido com o de uma caixa registradora, e vamos tocá-lo com o bloco `toque o som ... até o fim` depois da bruxa dizer o valor da compra:

{{< image path="imagens/vendedor-3.png" alt="Código do clique no vendedor pra concluir a compra até agora" >}}
{{< /details >}}

{{< details summary="Mais clientes!" >}}
Por enquanto, nosso jogo só atende um cliente, e pra atender outro cliente, precisamos começar o jogo de novo clicando na bandeira verde.

O que nós queremos é que nosso jogo permita vários clientes dentro da loja. Pra isso, vamos usar um bloco que já estamos ficando acostumados em ver: `transmita ...`.

Primeiro de tudo, vamos usar o bloco de topete `quando eu receber ...` e adicionar uma nova mensagem com o nome `proximo cliente`:

{{< video path=imagens/vendedor-1.mp4 >}}

Agora, vamos **refatorar** uma parte do código: os blocos de `mude o total para 0` e `diga "Próximo cliente, por favor"` que estavam antes juntos com o bloco de topete `quando bandeira verde for clicada` agora devem ficar abaixo do `quando eu receber proximo cliente`.

O bloco `quando bandeira verde for clicada` deve conter apenas o bloco `transmita proximo cliente`:

{{< video path=imagens/vendedor-2.mp4 >}}

Agora, ainda no código da vendedora, depois que tocarmos o som da caixa registradora, queremos agradecer o cliente atual e depois chamar o próximo cliente com o bloco transmita:

{{< image path="imagens/vendedor-4.png" alt="Código final da bruxa com o transmita" >}}

Você percebeu o que fizemos com essa refatoração? Nós utilizamos o bloco `transmita ...` para um ator conversar consigo mesmo - isso pode parecer estranho no primeiro momento, mas posso explicar.

Em dois momentos distintos do nosso jogo, nosso vendedor faz a mesma coisa:

1. Quando começamos o jogo, o vendedor diz `"próximo cliente, por favor"`, e muda o valor de `total` para `0`;
2. Quando terminamos uma venda, o vendedor faz a mesma coisa e também mudamos `total` para `0`;

Nós poderíamos copiar o código pra não precisar usar o `transmita ...`. Nosso código ficaria assim:

{{< image path="imagens/refatora-antes.png" alt="Código da bruxa, sem refatoração" >}}
(código de exemplo, não precisa copiar)

Se quiséssemos mudar a frase que a bruxa fala, precisaríamos mudar em 2 lugares diferentes e correria o risco de esquecermos.

Pra não ter esse problema, usamos o bloco `transmita ...` pra "executar" o mesmo código, em momentos diferentes, sem precisar duplicá-los:

{{< image path="imagens/refatora-depois.png" alt="Código da bruxa, com refatoração" >}}

Esse foi um exemplo de **refatoração**, que é: mexer no nosso código pra deixar ele mais fácil de entender ou melhorar, sem afetar seu funcionamento.
{{< /details >}}

E esse foi nosso projeto de loja! Compartilhe o link com as pessoas que você acha que vão gostar da sua loja virtual.

Um abraço e até a próxima atividade!
