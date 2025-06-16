---
title: "Não caia!"
date: 2025-06-10T08:19:00-03:00
draft: false
summary: "Fazendo um jogo de ação pra testar as habilidades de quem jogar"
weight: 12
aliases:
  - /11
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [1 - Mais Scratch](https://projects.raspberrypi.org/pt-BR/pathways/more-scratch)

**Atividade:** [5 - Não caia!](https://projects.raspberrypi.org/pt-BR/projects/dont-fall-in)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1186975235/)

---

{{< youtube ouyedZ41Udw >}}

Chegou a hora de criarmos um jogo que vai tirar o sono das pessoas: quem errar o tempo, cai na lava.

Na atividade de hoje, vamos criar um jogo de ação, visto de cima, onde o jogador deve pular de plataforma em plataforma até chegar no objetivo final.

O material original possui tradução, portanto você consegue acompanhar na íntegra [clicando aqui](https://projects.raspberrypi.org/pt-BR/projects/dont-fall-in).

As seções aqui em baixo vão conter dicas de explicação pra cada etapa da criação do projeto.

{{< details summary="Você vai fazer" >}}
Explore essa parte pra saber como o jogo final vai ficar, e aproveite pra ver exemplos de temas pra você user no seu jogo.

O projeto-exemplo contém um bug de exibição, o seguinte link contém o projeto com o bug resolvido pra você poder testar: [clique aqui](https://scratch.mit.edu/projects/1186959599/).
{{< /details >}}

{{< details summary="Escolha um tema" >}}
O material vai propor algumas decisões pra você tomar: a direção que o jogador deve andar, as cores usadas, o personagem principal.

> ❗Na hora de escolher as cores, é muito importante que as cores do chão seja diferente da cor das plataformas e da cor do objetivo final, pois vamos usar as cores pra detectar onde o jogador está pisando.
{{< /details >}}

{{< details summary="Pule, salte, quique ou deslize!" >}}
Nessa primeira parte do jogo, seu personagem deve responder ao comando de salto. Você vai decidir como ele vai ser - o mais importante é que seu personagem saia do lugar e aumente de tamanho enquanto pula.

Aqui vai um exemplo de pulo de personagem:

- toca um som de salto
- aumenta de tamanho enquanto anda pra frente
- depois diminui de tamanho enquanto anda pra frente

Ah, e não se esqueça de "preparar o tabuleiro", e colocar seu personagem com o tamanho, fantasia e lugares corretos quando a bandeira verde for clicada.

Além disso, o material sugere colocar o código do pulo em um "bloco de topete" separado do bloco de início, assim, o código fica melhor organizado e fácil de interpretar. Ele faz isso usando o bloco `transmita ...`.

Ele vai ficar mais ou menos assim:

{{< image path="imagens/personagem-1.png" alt="Código inicial do ator do personagem principal com o pulo" >}}

Mude os números pra controlar a velocidade e a distância do pulo!
{{< /details >}}

{{< details summary="Ganhador" >}}
Essa seção mostra como fazermos a parte do "fim de jogo": como o jogador vence?

Escolha uma cor pro piso onde o jogador deve encostar pra vencer o jogo e lembre-se: só esse piso deve ter essa cor, assim o Scratch não "se confunde" na detecção.

Use essa cor pra desenhar esse piso em um novo ator chamado `Fim`

Se você prestar atenção, nessa parte também temos um código que inicia a partir da mensagem `inicio`, e possui um bloco `sempre` dentro: assim como o código anterior, ele também é um "motorzinho" que é ligado e fica rodando, esperando algo acontecer.

Nesse caso, esperamos o jogador estar tocando no chão, e tocando na cor certa.

O material original utiliza uma [variável](/conceitos/variaveis/) chamada `pousado` pra guardar o tamanho inicial do personagem. É o tamanho que o personagem vai ter quando está encostado no chão, já que ele cresce enquanto está pulando.

O bloco de [condição](/conceitos/condicoes/) `... = ...` ajuda a gente a saber se o tamanho do personagem é o mesmo tamanho dele `pousado`, ou seja, tocando no chão.

> 💡Adicione o bloco `vá para camada da frente` na preparação do personagem principal pra que ele sempre fique por cima das plataformas.

Essa é a parte do ator do personagem principal que foi afetada:

{{< image path="imagens/personagem-2.png" alt="Código do personagem principal com a lógica da plataforma final" >}}
{{< /details >}}

{{< details summary="Ande nas plataformas" >}}
Essa é a hora de colocar o desafio no jogo: as plataformas.

Siga as orientações do material pra criar suas plataformas, que devem ficar andando para o jogador tentar pular em cima.

Escolha uma cor única pras plataformas, já que vamos precisar disso pra saber se o jogador caiu em cima dela.

Você pode se beneficiar do bloco `se tocar na borda, volte` pra fazer a plataforma subir e descer. O código de cada plataforma minha ficou assim:

{{< image path="imagens/plataforma-1.png" alt="Código da plataforma com o motor de andar e rebater na borda" >}}

Depois de escolher o som de "fim de jogo" no ator principal, o material te instrui a mudar seu código com uma mudança: adicionar um grande bloco `se ... senão` logo abaixo do bloco `se tocando na cor <da plataforma final>`.

Esse novo bloco deve verificar se o jogador está tocando na cor das plataformas. Se estiver, verifica se está tocando cada uma das plataformas individualmente, e a plataforma que estiver, mandamos o ator pra lá.

Caso o jogador não esteja encostando na cor das plataformas, verificamos se ele está encostando na lava, e se estiver, terminamos o jogo.

{{< image path="imagens/personagem-3.png" alt="Novos blocos do código do ator pro comportamento das plataformas e lava" >}}

> 💡Se seu jogo estiver terminando antes do previsto, veja se seu personagem não está encostando na lava quando começa o jogo, antes de saltar. Se for necessário, use uma posição mais segura no `vá para ...` do início do jogo, ou diminua o tamanho do seu ator
{{< /details >}}

{{< details summary="Ajuste a dificuldade" >}}
Pra deixar seu jogo mais difícil ou mais fácil, você pode fazer coisas como:

- mudar a velocidade das plataformas e deixá-las menores
- adicionar mais plataformas e diminuir o tamanho do pulo
- diminuir o tamanho do personagem principal
- diminuir o tamanho da plataforma final
- aumentar/diminuir a velocidade do pulo nos blocos `mova ... passos` do ator principal
{{< /details >}}

Por fim, teste seus conhecimentos na seção "Teste rápido" e melhore seu projeto caso queira deixá-lo mais trabalhado com as dicas da seção "Melhore seu projeto".

Até a próxima atividade
