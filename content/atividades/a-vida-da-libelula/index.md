---
title: "A Vida da Libélula"
date: 2025-05-19T13:27:00-03:00
draft: false
summary: "Vamos criar um jogo de controlar e desenvolver uma libélula"
weight: 9
aliases:
  - /8
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [1 - Mais Scratch](https://projects.raspberrypi.org/pt-BR/pathways/more-scratch)

**Atividade:** [2 - A Vida da Libélula](https://projects.raspberrypi.org/en/projects/grow-a-dragonfly/)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1177608441/)

---

{{< youtube n46xrTEJrTc >}}

> ⚠️ A partir dessa atividade, o material original não possui tradução pra português. Por isso, vamos passar a incluir mais detalhes nas atividades aqui no site pra suprir essa falta.

{{< details summary="O que você vai fazer" >}}
Vamos fazer um jogo onde o jogador controla uma libélula e a alimenta para que ela cresça o suficiente.

A seção *"What you will make"* do material tem um exemplo do jogo pronto pra você poder testar. Caso queira testar, aqui estão algumas instruções:

- clique na bandeira verde e use o ponteiro do mouse pra controlar a libélula
- faça a libélula tocar em outros insetos pra crescer de tamanho
{{< /details >}}

{{< details summary="Preparando o cenário" >}}
Decida qual vai ser a temática de seu jogo e escolha qual vai ser o plano de fundo. O material original utiliza o cenário `Jurassic` (jurássico).

Depois disso, crie um novo [ator](/conceitos/atores/) que vai ser seu personagem principal. Pode ser a libélula (Dragonfly) como no exemplo, ou um outro ator que você escolher.

O [código](/conceitos/codigo) do personagem principal é o seguinte:

{{< image path="imagens/libelula-1.png" alt="Código da Libélula que faz seguir o mouse" >}}

Quando testar seu jogo, vai ver que a libélula está andando "de lado" em direção ao mouse. A gente já teve que lidar com isso antes. Você lembra o motivo?

Acontece que todas as [fantasias](/conceitos/fantasias) no Scratch que forem usufruir de [direção,](conceitos/direcao) devem estar preparadas e apontar/olhar pra direita.

Por isso, vamos alterar a fantasia do nosso personagem principal pra garantir que ele olha pra direita:

{{< video path=imagens/libelula-fantasia-1.mp4 >}}

Agora, vamos fazer uma ciência de [sons](/conceitos/sons/) pra construir o bater-de-asas da nossa libélula.

Primeiro, vamos adicionar um novo som à libélula, o som `Crank`. Quando adicionar, dá um play e me diz: será que dá pra usar isso pra fazer som de libélula?

Vamos fazer uma operação! Selecionamos só um pedaço do som da libélula, e clicamos no "Copiar como novo" pra separar o recorte em outro som:

{{< image path="imagens/cortando-som-asas.png" alt="Código da Libélula que faz seguir o mouse" >}}

Ah, e nomeia o novo som criado para "asas" pra facilitar pro futuro.

Agora, adicione o novo bloco no código da libélula pra emitir o som e veja se o barulho das asas está bom. Caso não estiver, experimente brincar com os efeitos de som, ou selecionar partes diferentes do som:

{{< image path="imagens/libelula-2.png" alt="Código da Libélula com o novo bloco adicionado" >}}
{{< /details >}}

{{< details summary="Uma mosca pra lambiscar" >}}
Agora, queremos adicionar o que pode ser o alimento da nossa libélula. Vai ser a refeição que vai fazer a libélula crescer de tamanho.

Aqui no exemplo, vamos pegar emprestado uma mosca que está dentro da fantasia de um sapo. Procure o ator "Frog 2", renomeie-o pra "mosca".

Vá nas fantasias do sapo, deixe apenas uma, e utilize a ferramenta "Seta" pra selecionar apenas o sapo e apagá-lo.

Depois disso, use a seta pra mover a mosca que sobrou pro centro do ator (a "mirinha"):

{{< video path=imagens/fantasia-mosca-1.mp4 >}}

Agora, vamos fazer o código da mosca para que ela fique andando e rebatendo nas bordas do cenário:

{{< image path="imagens/mosca-1.png" alt="Código da mosca pra rebater nas paredes" >}}

Pra ela não ficar sempre rebatendo na horizontal, mude ela pra uma posição diagonal.

Agora, finalmente chegou a hora de aprendermos um dos principais blocos no mundo da programação: O `se ... então`.

Esse bloco funciona como um "detector de mentiras": Ele abraça blocos dentro dele, mas esses blocos só são executados caso a `condição` seja verdade.

A **condição** é essa forma de hexágono com pontas nas laterais. Ela é como se fosse uma frase, que pode ser verdade, ou mentira (`verdadeiro/falso`).

Aqui estão alguns exemplos de condições que podem ser verdadeiras ou falsas:

- A tecla espaço está pressionada?
- O ator está tocando na borda da tela?
- Idade é maior que 18?

No nosso projeto, precisamos saber se a mosca encostou na libélula pra podermos aumentar de tamanho. Nossa condição é a `tocando em ...`, que é *verdade* quando o ator encosta no outro.

Pra usar o bloco `se ... então`, vamos começar puxando nossa **condição** da área de *Sensores* - `tocando em ...` e escolha o ator da libélula (lembre-se de nomear o ator da libélula pra facilitar pro futuro).

Combine os dois blocos encaixando a condição no espaço do hexágono do bloco `se ... então`.

Tudo o que estiver sendo abraçado pelo `se ... então`, só vai ser executável caso nossa **condição** seja verdade.

Pra causar o efeito da mosca sendo consumida, vamos usar o bloco `esconda`. Adicione-o dentro do bloco `se ... então` e teste seu jogo.

| 💡Se sua mosca sumir e você quiser testar mais, clica no ícone dos olhos no painel do ator próximo ao nome dele

Pra uma nova mosca aparecer depois, vamos usar o bloco `espere ...` junto com o bloco `vá para posição aleatória` e o `mostre`, vai causar a ilusão de ser uma nova mosca aparecendo, mas na verdade é a mesma.

Esse aqui é o código da nossa mosca até agora:

{{< image path="imagens/mosca-2.png" alt="Código da mosca com a condição de tocar na libélula" >}}

Pra mosca sempre aparecer no começo do jogo, adicionamos um bloco `mostre` no começo do código também.
{{< /details >}}


{{< details summary="Crescendo até o máximo" >}}
Chegamos no mesmo dilema da atividade anterior: nosso código de capturar a mosca está no próprio ator da mosca, e agora precisamos fazer a libélula crescer - nossos atores precisam se comunicar!

No código da mosca, logo após o bloco `esconda`, vamos adicionar um bloco `transmita ...`, com uma nova mensagem chamada `"alimento"`:

{{< image path="imagens/mosca-3.png" alt="Código da mosca com o bloco de transmita logo após esconder" >}}

E assim que o ator da libélula receber essa mensagem, ele deve aumentar de tamanho, tocar um som, e finalizar o jogo caso esteja no tamanho máximo.

Pra começar, vamos iniciar um novo bloco no ator da libélula com o bloco `quando eu receber ...` com a mensagem `"alimento"`.

Adicione um novo som ("Chomp") no ator da libélula e use o bloco `toque o som ...` logo abaixo do primeiro bloco.

Depois desse, coloque o som `mude ... no tamanho` e teste seu código:

{{< image path="imagens/libelula-3.png" alt="Código da libélula que começa quando receber alimento" >}}

E pra fechar, precisamos saber se *o tamanho da libélula é grande o suficiente*.

Pra isso, também vamos usar o bloco `se ... então`, e nossa *condição* vai verificar o tamanho da libélula.

Na categoria *Operadores* (blocos verdes), conseguimos encontrar condições de comparação matemática, como `maior`, `menor`, `igual`, etc.

Esses blocos possuem dois encaixes redondos, que podem conter valores como `tamanho` do ator.

Vamos usar esses blocos e encaixá-los de forma com que nossa condição fique assim: `tamanho > 100`. O valor `tamanho` pode ser encontrado no fim dos blocos de *Aparência*.

Encaixe essa condição no *se .. então*, deixando assim:

{{< image path="imagens/se-tamanho-grande.png" alt="Bloco \"se\" coma a condição de tamanho" >}}

O que deve acontecer se nossa libélula chegar ao tamanho máximo? Aqui no nosso exemplo, vamos falar uma frase e finalizar o jogo com o bloco `pare todos`. Esses blocos devem ficar dentro do bloco `se ... então`:

{{< image path="imagens/libelula-4.png" alt="Código final da alimentação da libelula" >}}
{{< /details >}}

{{< details summary="Movimento aprimorado" >}}
Não sei se você notou: ao parar o mouse, a libélula fica completamente maluca quando chega nele, tremendo e mudando de direção adoidada. Eu particularmente amo quando os bugs são engraçados desse jeito.

Apesar disso, temos que deixar o jogo polido pras pessoas que jogarem, então vamos corrigir isso.

O bug está acontecendo por que  a libélula sempre vai andar em direção ao mouse, **mesmo quando já estiver perto dele**, causando esse efeito de "tremilique".

Pra corrigir esse problema, vamos adicionar um bloco `se ... então` pra garantir que só vamos andar pra frente, **caso a libélula ainda não tenha alcançado o cursor**:

Pra fazer isso no código da libélula, vamos usar o *sensor* `tocando em ...` como condição pra detectarmos se já estamos tocando no mouse.

Dessa vez, vamos fazer algo um pouco diferente: queremos andar com a libélula caso **não** esteja tocando no cursor. Temos um operador com o nome `não ...` que vai ajudar a montarmos nossa condição.

No final, a condição vai ser: `se a libélula não estiver tocando no cursor`, ou na linguagem do Scratch, `se não tocando em cursor do mouse?`:

{{< image path="imagens/libelula-5.png" alt="Código que previne libélula de andar quando chegar no mouse" >}}

Com esse bloco pronto, podemos colocar dentro dele todo o código que faz a libélula andar, ficando assim no final:


{{< image path="imagens/libelula-6.png" alt="Código do movimento da libélula somente quando ainda não tocou no mouse" >}}

> 💡ao invés de utilizar o bloco `não tocando em ponteiro do mouse`, que tal tentar algo como `distância até ponteiro do mouse > 50`? Assim, a libélula pode parar até mesmo antes de chegar perto do cursor. Esses blocos estão em *Sensores* e *Operadores*.
{{< /details >}}

{{< details summary="Alimentação realista" >}}
Do jeito que o jogo está agora, a libélula consegue comer moscas com suas asas e corpo, não só com sua boca. Pra corrigir isso, vamos fazer a libélula comer a mosca só quando estiver tocando em sua boca.

Pra corrigir isso, vamos usar uma técnica do Scratch que nos permite dizer se o ator está tocando uma cor específica.

Primeiro, vamos escolher uma cor pra boca da libélula. Vá até a fantasia da libélula que está virada pra direita, selecione a ferramenta de balde, escolhar uma cor e pinte a boca da libélula, com **atenção nos números da cor escolhida**, pois vamos usar essa cor no código da mosca.

{{< image path="imagens/fantasia-libelula-1.png" alt="Demonstração de como pintar a cor da libélula com o balde" >}}

Agora, no código da mosca, na condição que diz se a mosca está encostando na libélula, vamos usar o operador `... e ...` pra combinar duas condições: `tocando em libélula` e `tocando na cor ...`.

> 💡Quando usamos o operador `... e ...`, dizemos pro "detector de mentiras" que as duas condições **precisam** ser verdade. Visite a explicação sobre [condições](/conceitos/condicoes/) pra saber mais sobre esse e outros operadores lógicos.


{{< image path="imagens/operador-e-1.png" alt="Substituição do operador Tocando em Libélula por sua combinação com 'tocando na cor' no operador 'e'" >}}

A cor que você colocar no bloco `tocando na cor ...` deve possuir exatamente os mesmos números da cor que você usou pra pintar a boca da libélula.

O código final da mosca vai ficar assim:

{{< image path="imagens/mosca-4.png" alt="Código final da mosca incluindo a condição de tocar na boca da libélula" >}}
{{< /details >}}

{{< details summary="Mais comida" >}}
Pra finalizar as sugestões do material original, vamos adicionar mais uma opção de banquete pra libélula.

Duplique o ator da mosca clicando nele com o botão direito do mouse e selecionando "Duplicar". Pra deixar a nova mosca diferente da outra, você pode trocar coisas como:

- a cor de sua fantasia
- selecionar outra fantasia de inseto (não se esqueça de virar pra direita)
- a direção do ator
{{< /details >}}

E essa foi a atividade de hoje! Como desafio, será que você consegue adicionar mais funcionalidades no seu jogo?

- mais insetos
- movimentação diferente em novos insetos
- aumentar a velocidade do inseto

Nos vemos na próxima atividade!
