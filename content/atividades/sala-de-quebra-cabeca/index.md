---
title: "Sala de Quebra-Cabeça"
date: 2025-07-10T11:20:00-03:00
draft: false
summary: "Tarefas e desafios dentro de uma estação espacial"
weight: 15
aliases:
  - /14
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [2 - Scratch Mais Longe](https://projects.raspberrypi.org/en/pathways/further-scratch)

**Atividade:** [2 - Sala de quebra-cabeça](https://projects.raspberrypi.org/pt-BR/projects/puzzle-room/)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1196216455/)

**Projeto base, com atores personalizados inclusos**: [entre e faça uma cópia clicando em "Remix"](https://scratch.mit.edu/projects/1196216373/)

---

{{< youtube B-f2bzWINUA >}}

E aí, internet! chegou a hora de aplicarmos o que aprendemos na atividade anterior ([Astromóvel da Natureza](/atividades/astromovel-da-natureza/)), além de utilizar operadores e variáveis pra darmos uma lista de tarefas a um astronauta.

O [material original](https://projects.raspberrypi.org/pt-BR/projects/puzzle-room/) dessa tarefa possui tradução pra português, então vou colocar aqui em baixo comentários adicionais que vão complementar o que ele diz por lá.

{{< details summary="O que você vai fazer" >}}
Assim como na atividade anterior, vamos ter um controle com botões pra movimentar um personagem ao longo da tela.

Esse personagem vai poder interagir com os controles na sala de controle pra executar tarefas. Veja o exemplo do material e tente interagir com o cenário:

- você consegue clicar no botão vermelho? O que acontece se o personagem não estiver perto suficiente?
- vá até o vidro da nave e tente interagir com os asteroides

Quando sentir que sua mente está cheia de ideias, vamos pra próxima parte.
{{< /details >}}

{{< details summary="Preparando o projeto" >}}
Os atores-base e o cenário do material original já foram preparados e recomenda que você crie o projeto a partir do projeto-base.

De qualquer forma, adicionei essa seção aqui caso você queira começar do zero e criar seu próprio projeto base.

Pra começar, adicione o cenário `Spaceship`. Ele é perfeito pra nós pois possui elementos que podemos destacar e transformar em atores:

{{< image path="imagens/cenario-1.png" alt="Cenário e objetos que serão transformados em atores" >}}

Agora, vamos criar mais 3 atores com base nesse cenário. Primeiro, clique no palco e vá pra aba de cenários.

Utilize a ferramenta "Selecionar" em todo o cenário e clique no botão "Copiar":

{{< video path=imagens/cenario-1.mp4 >}}

Agora clique no botão pra "Pintar um ator", dê o nome dele de "Cadeira", clique em "Converter pra bitmap" no canto de baixo da tela, e clique em "Colar".

Depois, use o botão borracha pra apagar todo o cenário, menos a cadeira:

{{< video path=imagens/cadeira-1.mp4 >}}

Agora posicione a cadeira por cima da cadeira original no cenário até que elas fiquem alinhadas:

{{< video path=imagens/cadeira-2.mp4 >}}

Faça o mesmo com a manivela e a janela de vidro.

Pra fazer a manivela, depois de colar e "limpar" o cenário, você vai terminar com metade da imagem.

Vamos fazer a manivela girar, então precisamos fazer com que ela seja uma manivela completa. Vá pra fantasia já limpa da manivela, copie e cole a manivela, gire 180 graus e junte com a outra metade:

{{< video path=imagens/manivela-1.mp4 >}}

> Não se esqueça de deixar a manivela centralizada no centro da fantasia do ator - isso é importante pra ela não sair do lugar quando girar

Agora você já tem o cenário e os 3 atores preparados - só não esqueça de dar nome a eles!

{{< image path="imagens/atores-1.png" alt="Painel de atores com os 3 objetos posicionados no cenário" >}}

Pra finalizar essa etapa, precisamos apagar a manivela do cenário pra ela nã́o ficar visível quando o ator da manivela girar.

Vá para o cenário, utilize a ferramenta de pincel pra pintar sobre a manivela.

Você pode selecionar a cor correta clicando no ícone de conta-gotas:

{{< video path=imagens/cenario-2.mp4 >}}
{{< /details >}}

{{< details summary="Quem está na sala do quebra-cabeças?" >}}
Essa parte do material te mostra como criar um ator pro astronauta, e os controles na tela.

Essa é a mesma técnica que utilizamos na atividade do astromóvel:

- 4 atores pra cada direção do controle
- cada um dos atores possui um código que `quando clicar na bandeira verde`, vai pra posição original e pra camada da frente
- ao clicar em cada um dos atores de direção, ele emite uma mensagem `andar para ...`, referente à direção
- o ator do astronauta possui blocos `quando eu receber ...` pra cada uma das mensagens, e altera o `x` e `y` de acordo com a direção desejada

{{< /details >}}

{{< details summary="O botão do quebra-cabeça" >}}
Nessa parte, o material vai te guiar pra adicionar um botão, e o desafio escondido pro jogador é ele apertar o botão 5 vezes.

Comece criando o botão: não precisa ser exatamente como o do material. Pode ser um botão circular, e até de outra cor!

No final dessa parte, seu código do botão vai ter dois _scripts_ que começam com um bloco de topete cada um:

- `quando a bandeira verde for clicada`
- `quando esse ator for clicado`

No código _mamãe-coruja_, você pode trocar o valor da distância caso o botão não esteja contabilizando.
{{< /details >}}

{{< details summary="O quebra-cabeça da roda-manual (manivela)" >}}
A nomenclatura de variáveis dessa parte do material está um pouco confusa, sugiro usar esses nomes no lugar:

- `roda-manual girada` para `voltas completas`
- `girada` para `graus girados`

Pra evitar bugs, se não quiser girar de `15` em `15` graus, tente outros números que encaixam no 360, como: `10`, `20`, `30`, `60`, etc.
{{< /details >}}

{{< details summary="O quebra-cabeça dos asteróides" >}}
Essa é a parte mais difícil do material, então caso esteja com bug, compare bem o seu resultado com o material (ou meu projeto pronto com o link no topo da página).

Essas são minhas sugestões de nomenclatura de variáveis:

- `asteroides` -> `asteroides destruidos`
- `na cadeira` -> `sentado`

Além disso, você vai precisar usar o bloco `defina`, que permite você criar seu próprio bloco. Você pode saber mais sobre ele [clicando aqui](/conceitos/defina/).

Ah, e também dá pra deixar o nome do novo bloco mais descritivo:

- `vá para posição` para `posicionar na janela`

E quando for selecionar a cor pros blocos `tocando na cor ...`, utilize a cor dessa parte da janela:

{{< image path="imagens/cor-1.png" alt="Lugar de onde pegar a cor usando o conta-gotas" >}}
{{< /details >}}

Espero que tenha gostado do exercício, e até a próxima!
