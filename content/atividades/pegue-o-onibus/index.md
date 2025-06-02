---
title: "Pegue o Ônibus"
date: 2022-10-13T13:24:00-03:00
draft: false
summary: "Aprendendo movimentação no Scratch"
weight: 3
aliases:
  - /2
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [0 - Introdução](https://projects.raspberrypi.org/pt-BR/pathways/scratch-intro)

**Atividade:** [2 - Pegue o Ônibus](https://projects.raspberrypi.org/pt-BR/projects/catch-the-bus/0)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1160660197/)

---

{{< youtube UN15kc-ta6U  >}}

Pra começar, abra o link do material clicando no nome da atividade aqui em cima e comece pela introdução.

Siga os passos do material e acompanhe cada etapa da atividade nos tópicos abaixo que se aprofundam, contém dicas dicas ou considerações.

{{< details summary="Introdução" >}}
Veja como o projeto final pode ficar clicando na bandeira verde.

Você vai ver que sim, é possível fazer [animações](/conceitos/animacoes/) com [código](/conceitos/codigo/)!
{{< /details >}}

{{< details summary="Crie o cenário do teu ônibus" >}}
Você pode fazer um *Remix* do projeto inicial ou criar um novo.

Após adicionar o cenário e o ônibus, você vai conhecer o mais importante bloco do Scratch.

É um bloco do tipo *Evento* (aqueles que são o início de todos os trechos de [código](/conceitos/codigo/)).

O bloco é: `quando (bandeira verde) for clicado`

Esse bloco vai dizer o que acontece quando iniciarmos o jogo. A bandeira verde é como um botão de "iniciar jogo", ou *"start game"*.

Todos os blocos que estiverem encaixados abaixo desse bloco serão executados de cima pra baixo assim que o jogador clicou na bandeira verde.

### Posição

Depois que você posicionar o ônibus, procure no painel do [ator](/conceitos/atores/) na direita e use o `X` e `Y` mostrados pra adicionar o bloco `Vá para x ... y ...` abaixo do nosso bloco inicial.

Esse bloco serve pra colocarmos o *ator* (ônibus) no seu lugar sempre que o jogo começar. Isso é a mesma coisa que colocar as peças do tabuleiro no lugar correto antes de começar uma partida.

Siga esse links pra entender mais:

- [posicionamento e camadas](/conceitos/posicionamento/)
{{< /details >}}

{{< details summary="O Gato Scratch alcança o ônibus" >}}

### Ponha o Gato Scratch em sua posição inicial

Assim como colocamos o ônibus no lugar correto quando iniciarmos o jogo, vamos colocar o Gato Scratch, nosso segundo ator, utilizando o bloco `Vá para x ... y ...`. Os números de `X` e `Y` são informados pelo material e vão fazer com que o Gato Scratch comece no lado inferior direito do *palco*.

Pra melhorarmos nossa animação, vamos fazer com que o gato olhe para o lado que está andando, e pra fazermos isso, vamos usar o conceito de [direção](/conceitos/direcao/).

Naturalmente, mudar a direção vai *girar* nosso ator, e não é esse comportamento que queremos. Nossa intenção é que o gato olhe pra direita ou pra esquerda, sem girar. Por causa disso, o material nos instrui a trocar o modo de direção do gato para `esquerda ou direita`.

> 💡 Experimente mudar a direção girando o ponteiro de direção em diferentes modos de direção

### Fazendo a animação

Nesse trecho do material, você vai aprender a utilizar os [blocos de repetição](/conceitos/repeticoes/) pra criar [animações](/conceitos/animacoes/). O truque vai ser mover nosso [ator](/conceitos/atores/) um pouco de cada vez, dando a ilusão de movimento.

Pra trazer mais realidade corrida do gato, o material nos instrui como usar o bloco `Próxima fantasia` pra fazer o gato mexer os braços.

No final dessa seção, você vai usar os blocos `mostre` e `esconda` pra dizer que o gato deve estar visível no começo do jogo, e desaparecer ao terminar a [animação](/conceitos/animacoes/).

Siga esse links pra entender mais:

- [direção](/conceitos/direcao/)
- [repetições](/conceitos/repeticoes/)
- [animações](/conceitos/animacoes/)
- [fantasias](/conceitos/fantasias/)
{{< /details >}}

{{< details summary="O hipopótamo alcança o ônibus voando" >}}
Nessa seção da atividade, vamos adicionar um novo [ator](/conceitos/atores/), o hipopótamo.

Os blocos referentes ao posicionamento, movimento, e troca de fantasia, serão como fizemos no [ator](/conceitos/atores/) anterior, com uma pequena diferença:

A direção do hipopótamo vai se comportar de forma diferente e vai fazer com que o [ator](/conceitos/atores/) "olhe" para algum alvo. Nesse caso, ele vai "olhar" pro ônibus usando o bloco `aponte para ...`.
{{< /details >}}

{{< details summary="O ônibus parte" >}}
Aqui somos apresentados a um novo bloco de [evento](/conceitos/eventos/): `quando [cronômetro] > ...`.

Nossa intenção aqui é que algo aconteça depois de `4` segundos que o jogo começar. Nesse caso, o ônibus começar a se mover.

Essa seção também apresenta uma forma diferente de movimentarmos um ator, com o bloco `deslize por ... segs. até ...`. Não esqueça de adicionar o bloco `esconda` pra fazer com que o ônibus suma ao chegar em seu destino.

Assim como nossos outros [atores](/conceitos/atores/), queremos que o ônibus esteja na posição correta e preparado pra ser animado quando o jogo começar. Por causa disso, somos instruidos a definir algumas coisas `quando a bandeira verde for clicada`:

- Definir a posição inicial (`vá para ...`)
- Colocar o ônibus no plano de fundo (`vá para a camada de trás`)
- Definindo a cor do ônibus (`defina o efeito [cor] como ...`)
- Exibindo o ônibus no palco (`mostre`)

> 💡 Essas definições que fizemos quando o jogo começa são como arrumar as peças de um jogo de tabuleiro antes de começar a jogar

Siga esse links pra entender mais:

- [eventos](/conceitos/eventos/)
- [fantasias (efeitos)](/conceitos/fantasias/)
- [animações](/conceitos/animacoes/)
- [posicionamento (camadas)](/conceitos/posicionamento/)
- [fantasias](/conceitos/fantasias/)
{{< /details >}}

{{< details summary="Perdendo o ônibus" >}}
Aqui, vamos simular uma situação onde o gato não consegue alcançar o ônibus.

Uma das formas de fazer isso é usarmos um bloco de controle chamado `espere ... seg`.

Esse bloco faz apenas uma coisa: aguarda um período de tempo até que o próximo bloco seja executado.

Essa seção te instrui a adicionar blocos de `espere ... seg` durante a [animação](/conceitos/animacoes/)do gato para que ele fique mais lento e não consiga alcançar o ônibus.
{{< /details >}}

{{< details summary="Mudando o destino" >}}
Agora deixe suas habilidades artisticas fluírem: desenhe na [fantasia](/conceitos/fantasias/) do ônibus do jeito que preferir.

> 💡 Esse é o seu universo, então não prenda sua imaginação na hora de mudar a fantasia
{{< /details >}}

{{< details summary="Reflexão" >}}
Aproveite essa seção pra testar seus conhecimentos. Você pode tentar quantas vezes quiser, então não tenha medo de errar!
{{< /details >}}

{{< details summary="Melhore o seu projeto" >}}
Explore ainda mais a ferramenta e tente adicionar novos [atores](/conceitos/atores/) com diferentes tipos de movimento!
{{< /details >}}
