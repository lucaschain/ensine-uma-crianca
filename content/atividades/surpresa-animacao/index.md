---
title: "5 - Surpresa! Animação"
date: 2025-04-17T15:39:00-03:00
draft: false
summary: "Criando um roteiro e separando seu código em partes"
weight: 6
aliases:
  - /5
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [0 - Introdução](https://projects.raspberrypi.org/pt-BR/pathways/scratch-intro)

**Atividade:** [5 - Surpresa! Animação](https://projects.raspberrypi.org/pt-BR/projects/surprise-animation/0)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1169294916)

{{< youtube D-DrYcVihNM   >}}

Pra começar, abra o link do material clicando no nome da atividade aqui em cima e comece pela introdução.

Siga os passos do material e acompanhe cada etapa da atividade nos tópicos abaixo que se aprofundam, contém dicas dicas ou considerações.

{{< details summary="Introdução" >}}
Comece dando dois passos pra trás: antes de fazer qualquer coisa, vamos pensar no roteiro.

A proposta do material é dividirmos em quatro partes:

1. Configuração (ou preparar o tabuleiro)
2. Curiosidade
3. Surpresa!
4. Reação

A configuração é algo que já fazemos normalmente: preparar os atores em suas posições e fantasias corretamente antes de tudo começar.

Dê uma olhada nas inspirações que o material oferece e monte sua própria história. Aqui vai mais uma sugestão:

1. Um carro está desbravando uma estrada
2. Um obstáculo cai na frente do carro!
3. O carro consegue frear antes de bater no obstáculo
{{< /details >}}

{{< details summary="Configurar" >}}
Nos vídeos, sempre falamos da configuração como "preparando o tabuleiro", que é o que precisamos fazer antes de começar uma nova partida: colocar as peças, cartas, ou dados nos lugares deles.

No Scratch, isso significa escolhar a posição, direção, fantasia, visibilidade, entre outras coisas sobre os [atores](/conceitos/atores/) e [cenários](/conceitos/cenarios/).

Confira se você está logado no site e se você salvou seu projeto!
{{< /details >}}

{{< details summary="Curiosidade" >}}
Dependendo do seu roteiro, você vai precisar fazer coisas como:

1. Fazer o ator pensar ou dizer algo;
2. Trocar sua fantasia;
3. Girar ou mover o personagem até algum lugar.

Seguindo o exemplo que escolhemos antes, essa é a cena que o carro vai estar andando na estrada, antes do obstáculo cair.

Preste atenção em quanto tempo leva para sua animação concluir essa etapa, você vai precisar disso depois!
{{< /details >}}

{{< details summary="Surpresa" >}}
Pra fazer a surpresa, você vai usar tecnicas parecidas! Geralmente a surpresa consiste em um elemento aparecer na tela, então, um novo ator que começa escondido e aparece depois pode ser útil!

O desafio dessa parte da história é: que momento ela vai começar?

Toda a animação que colocarmos aqui deve partir de um bloco de início (ou topete), mas não pode ser imediatamente quando a bandeira verde for clicada.

Pra isso, podemos usar o bloco `espere ... segundos` logo após o bloco de início `Quando bandeira verde for clicada`. Agora, você vai precisar saber quanto tempo leva pra animação da "Curiosidade" terminar.

Depois de esperar, o código da "Surpresa" entra em jogo.

Existe uma outra forma de atrasar esse código começar utilizando o `cronômetro`. [Você pode saber sobre ele mais clicando aqui](/conceitos/cronometro/).
{{< /details >}}

{{< details summary="Reação" >}}
Pra finalizar, você vai adicionar a animação da reação no primeiro ator.

No exemplo que demos acima, seu código poderá ficar logo em seguida do código da "Curiosidade", ou você pode colocar outro bloco de início `Quando a bandeira verde for clicada`, aguardar até a "Surpresa" terminar usando o bloco `espere ... segundos`.
{{< /details >}}

Prossiga com a reflexão do material pra testar seus conhecimentos e melhore seu projeto ainda mais! Pra ver um exemplo de projeto pronto, veja o vídeo da atividade acima.

Vejo você na próxima atividade!
