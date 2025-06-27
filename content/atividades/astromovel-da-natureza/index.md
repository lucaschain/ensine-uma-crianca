---
title: "Astromóvel na Natureza"
date: 2025-06-26T10:40:00-03:00
draft: false
summary: "Um robô controlável que explora um mundo natural"
weight: 14
aliases:
  - /13
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [2 - Scratch Mais Longe](https://projects.raspberrypi.org/en/pathways/further-scratch)

**Atividade:** [1 - Nature rover](https://projects.raspberrypi.org/pt-BR/pathways/further-scratch)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1192464470/)

**Imagem usada no projeto**: [clique para baixar](./imagens/robo.png)

**Projeto base, com atores personalizados inclusos**: [entre e faça uma cópia clicando em "Remix"](https://scratch.mit.edu/projects/1192478341/)

---

Olá! Esse aqui é o primeiro projeto da última trilha de Scratch do material do Code Club, mas não se preocupe! Quando acabar, temos mais conteúdo por vir.

O conteúdo original desse material não está traduzido, então o que vou escrever aqui nessa atividade vai ser mais completo pra você não precisar acompanhar traduzir por lá.

O que vamos fazer hoje é um jogo de exploração! Teremos um controle remoto que nos permite controlar um robô por um ambiente. Vamos aprender a criar o efeito de perspectiva pra fazer os objetos parecerem distantes.

Você pode ver um exemplo de como o jogo do material original ficou acessando [essa página](https://projects.raspberrypi.org/en/projects/nature-rover).

Caso você queira usar as mesmas imagens do meu exemplo, você pode baixar as imagens abaixo ou começar à partir de um remix do projeto base. O link tá no topo da página.

Agora, sem mais delongas, vamos começar!

{{< details summary="Preparando o cenário" >}}
Qual território seu astromóvel vai explorar? Meu astromóvel vai explorar um planeta laranja e montanhoso, e o céu será azul claro.

Vamos começar pelo céu: crie um novo cenário pro seu jogo e use a ferramenta de balde de tinta pra pintá-lo da cor que você preferir.

Depois disso, vamos fazer um fundo pro nosso jogo. Esse fundo vai se mover conforme movemos o robô, então ele não deve ser um cenário, e sim um ator!

Crie um novo ator e chame-o de `fundo`. Abra as fantasias dele e use sua criatividade pra desenhar suas montanhas. Se estiver na dúvida de como fazer cada montanha, veja esse vídeo do meu exemplo:

{{< video path=imagens/fundo-1.mp4 >}}
{{< /details >}}

{{< details summary="Controlando o astromóvel" >}}
Nosso projeto deve ter 5 atores pra representarmos o controle:

- o fundo do controle
- a seta pra cima
- a seta pra baixo
- a seta pra direita
- a seta pra esquerda

No meu exemplo, criei cada um dos atores usando a ferramenta "círculo", nas fantasias, mas você pode estilizar cada um dos seus botões como quiser!

Posicione o ator de fundo do controle onde você deseja que ele fique, e coloque os atores das direções do controle cada um em sua posição.

Seu projeto com os 5 atores do controle posicionados na tela deve ficar mais ou menos assim:

{{< image path="imagens/controle-1.png" alt="Organização dos controles e do fundo" >}}

Quando estivermos testando nosso jogo, pode ser que a gente tire os controles do lugar sem querer ao tentar controlar, por isso, vamos criar um código pro controle pra sempre mantê-lo na posição certa.

Pro fundo do controle, vamos fazer um "motorzinho" que mantém ele no lugar _o tempo todo_. Esse motorzinho vai ligar `quando a bandeira for clicada`, e vamos mandá-lo pra posição dele dentro de um bloco `sempre`.

Pra mandá-lo pra posição, primeiro coloque ele no lugar que ele deve ficar, e puxe o bloco `vá para posição x ... y ...`:

{{< image path="imagens/controle-2.png" alt="Motorzinho pra manter o fundo do controle no lugar" >}}
_o valor do seu x e y provavelmente vai ser diferente do meu, não se preocupe se estiver diferente_

Agora, vamos fazer o mesmo pra cada um dos botões do nosso controle, mas com uma diferença: queremos mandar o botão do controle sempre pra frente do fundo do controle. Seu código pra cada um dos botões vai ficar mais ou menos assim:

{{< image path="imagens/controle-3.png" alt="Motorzinho pra manter o botão do controle no lugar" >}}
_lembre-se de fazer esse código pros 4 botões do controle, cada um com sua posição_

Agora, vamos dar vida aos botões: cada um vai disparar uma mensagem referente a direção que aponta. O botão pra direita deve `transmitir <andar pra direita>`, o botão da esquerda deve `transmitir <andar pra esquerda>`, e o mesmo para o botão de cima e de baixo.

> O nome da mensagem que você vai transmitir poderia ser diferente, só lembre-se de escolher um nome que fique fácil lembrarmos depois

{{< image path="imagens/controle-4.png" alt="Código das setas do controle pra transmitir o comando de andar" >}}

No final de tudo, cada um dos seus botões deve estar transmitindo a mensagem da direção que ele aponta.

> 💡Você também pode `transmitir <andar para ...>` usando o bloco de topete `Quando a <seta para ...> for pressionada`, assim, quem estiver no computador pode controlar com o teclado.

Agora, vamos fazer o código do astromóvel que vai atender os comandos do controle. Já sabemos quais são as mensagens transmitidas pelo controle, então agora devemos colocar os blocos de topete `quando eu receber <andar para ...>` colocar os blocos de topete `quando eu receber <andar para ...`, e mudar a posição `x` e `y` do ator.

Por enquanto, vamos fazer só as direções `cima` e `baixo` (vertical) Pra isso, vamos usar o `y`. Caso você queira refrescar sua memória, veja nosso material para o [conceito de posicionamento](/conceitos/posicionamento/).

Resumindo:

- pra andar pra cima, aumenta `y`
- pra andar pra baixo, diminui `y`

Além disso, pra dar efeito que o robô está ficando distante, vamos diminuir o tamanho dele quando andar pra cima, e aumentar quando andar pra baixo. O código tá ficando assim:

{{< image path="imagens/robo-1.png" alt="Código do robô reagindo aos comandos cima e baixo" >}}

Vamos resolver a movimentação horizontal (`x`) em outro ator, pois o astromóvel vai ficar parado sempre no meio da tela, mas precisamos reagir ao comando de `anda pra esquerda/direita` com uma mudança na direção do ator `aponte para`:

{{< image path="imagens/robo-3.png" alt="Código do robô reagindo aos comandos direita e esquerda" >}}

Ah, lembra como se faz pro seu ator não ficar de ponta cabeça quando apontar pra esquerda? Selecione seu ator, e na direção dele, clique no botão "direita/esquerda":

{{< image path="imagens/robo-4.png" alt="Botão que muda o modo de direção para direita/esquerda" >}}

> Teste seu jogo e verifique se o astromóvel se move pra cima e pra baixo mudando de tamanho como se ele estivesse indo pra longe. Caso tenha algum bug, veja se não tem nenhum bloco diferente, mas parecido.

E quando começar o jogo, queremos colocar o robô na posição e tamanho iniciais com os blocos `vá para x ... y ...` e `defina o tamanho como ...`.

E pro nosso robô não ficar atrás do fundo, também devemos usar o bloco `vá para camada da frente`:

{{< image path="imagens/robo-2.png" alt="Código de preparação do astromóvel quando o jogo começa" >}}
{{< /details >}}

{{< details summary="Rolando o fundo do cenário" >}}
Agora chegou a hora de fazer a mágica acontecer! Como eu disse ali em cima, não é nosso personagem que vai se mover, e sim, o ambiente ao redor dele!

Pra fazer nosso fundo rolar infinitamente, vamos usar uma técnica pra dar a ilusão que nosso fundo não termina nunca.

O truque que vamos usar é: rolamos o fundo até o fim da tela, quando chegar lá, jogamos o fundo do outro lado da tela, como se ele fosse um carrossel.

Eu fiz uma demonstração com o mouse de como vai ficar a animação, mas saiba que quando fizermos isso no código, o fundo vai instantaneamente pro outro lado.

{{< video path=imagens/fundo-2.mp4 >}}

Pra começar, no ator do `fundo`, vamos jogá-lo pra camada de trás e pro centro da tela quando começar o jogo. Além disso, `quando eu receber <andar pra direita/esquerda>`, devemos modificar o `x` pro fundo rolar horizontalmente:

{{< image path="imagens/fundo-1.png" alt="Código de preparação e movimento do fundo" >}}

Nosso fundo está rolando, mas ele ainda não é infinito! Quando ele chega no fim da tela, ele fica por lá.

Vamos fazer um código agora que manda o fundo pro outro lado da tela quando ele alcança o fim. Esse código vai ser um "motorzinho", ou seja, um bloco `sempre` que é iniciado quando o jogo começa e fica o tempo todo executando.

A lógica do motorzinho vai ser assim: se a posição `x` do fundo estiver no final da tela (`x` maior que `460`), vamos jogar pro outro final da tela. Se estiver no outro canto da tela (`x` menor que `-460`).

Não se preocupa se você não entendeu essa lógica de primeira, vamos ter mais oportunidades de revisitar esse conceito.

Pra fazer isso, vamos usar o bloco `se` duas vezes, um pra cada canto da tela.

Pra dar o sinal pro "motorzinho" funcionar, vamos usar o bloco `transmita <iniciar rolagem>`.

{{< image path="imagens/fundo-2.png" alt="Motorzinho pra fazer a rolagem horizontal do fundo" >}}

Não se esqueça de clicar na bandeira verde antes de testar! O seu jogo deve estar parecido com isso:

{{< video path=imagens/fundo-3.mp4 >}}

Mas nosso fundo ainda tá incompleto! Quando ele anda pro lado, fica um espaço em branco onde ele estava.

Pra resolver isso, vamos usar uma técnica do Scratch chamada `clones`. Um clone do Scratch é igual um clone da vida real: um outro ator idêntico.

Pra tapar esse espaço que sobrou no nosso fundo, vamos criar um clone dele pra preencher esse espaço.

Pra isso, no mesmo código de topete `quando a bandeira verde for clicada`, antes de `inicar rolagem`, vamos adicionar o código `crie clone de <este ator>`, depois, movemos nosso ator pro fim da tela:

{{< image path="imagens/fundo-3.png" alt="Código do fundo com a clonagem pra ocupar o espaço em branco" >}}

Teste seu jogo e agora o fundo deve dar a impressão de ser infinito!
{{< /details >}}

{{< details summary="Adicionando objetos" >}}
Podemos colocar mais objetos que vão andar assim como o fundo, mas numa velocidade maior, já que estarão perto da câmera. O exemplo de objeto que vou adicionar é um montinho de terra pra enfeitar o chão.

Pra desenhá-lo, eu usei a ferramenta de pincel e desenhei um montinho de terra. O nome do meu ator vai ser `morrinho`.

{{< image path="imagens/morrinho-1.png" alt="Desenho do morrinho" >}}

O comportamento do morrinho vai ser igual o do fundo: vamos posicioná-lo quando começar o jogo, e ele vai responder às mensagens `andar pra direita/esquerda`.

{{< image path="imagens/morrinho-2.png" alt="Posicionamento e movimentação do morrinho" >}}

Agora, vamos fazer a rolagem do morrinho. O código dele e do fundo vai ser o mesmo, só que os números do `x` vão mudar, pois o ator é menor.

Primeiro, copie o código de rolagem do ator `fundo` para o ator `morrinho`:

{{< image path="imagens/morrinho-3.png" alt="Posicionamento e movimentação do morrinho" >}}

Agora, vamos descobrir qual é a posição `x` máxima e mínima para o ator do morrinho. No painel do ator, troque o valor da posição `x` para `-1000` e veja qual número aparece. Depois, faça o mesmo com o número `1000`.

{{< video path=imagens/fundo-4.mp4 >}}

No meu caso, encontrei os números `-279` e `274`.

Os números nas comparações devem ser um número antes do limite que encontramos, então o meu caso vai ser `-278` e `273`.

Fazendo as trocas, meu código ficou assim:

{{< image path="imagens/morrinho-4.png" alt="Motorzinho de rolagem do ator morrinho" >}}
{{< /details >}}

{{< details summary="Sua vez!" >}}
Agora que já vimos a essência de perspectiva e clones, você tem a liberdade pra concluir seu projeto do jeito que preferir!

Olha algumas ideias que você pode implementar no seu jogo:

- adicionar um novo botão pro robô interagir com objetos (ex. cavar o morrinho)
- adicionar mais objetos (lembre-se: quanto mais perto da câmera, mais rápido move no `x`)
- adicionar mais cenários

{{< /details >}}

Valeu por chegar até aqui e até a próxima atividade!
