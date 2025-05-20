---
title: "Condições"
date: 2025-05-20T12:39:00-03:00
draft: false
---

Você já deve ter visto alguns blocos ou encaixes com o formato de hexágono:

{{< image path="/conceitos/imagens/hexagono.png" alt="Exemplos de blocos e encaixes hexagonais" >}}

Nós chamamos esses blocos de **condições**, e essas condições podem ser **mentira** ou **verdade**.

Os encaixes hexagonais são como detectores de mentira: eles recebem uma condição e escolhem o que vão fazer com ela.

O bloco `se ... então`, por exemplo, abraça seus blocos-filho e só os executa quando a condição for verdade. Ele é como uma mamãe-coruja protegendo seus filhos das mentiras do mundo.

No exemplo abaixo, temos uma condição com esse bloco, e os blocos de dentro só vão ser executados caso a tecla espaço esteja pressionada:

{{< image path="/conceitos/imagens/condicao-exemplo-1.png" alt="Bloco 'se ... então' que só executa se a tecla espaço está pressionada" >}}

Ao longo das atividades, vamos ver juntos outras formas de usar nossos blocos detectores de mentira pra controlarmos a lógica dos nossos jogos.

Além disso, o Scratch também possui **operadores lógicos**, que nos ajudam a combinar condições ou manipular verdades.

O operador `não ...`, por exemplo, transforma uma mentira em uma verdade:

{{< image path="/conceitos/imagens/condicao-exemplo-2.png" alt="Bloco 'se ... então' que só executa se a tecla espaço não está pressionada" >}}

Essa é a lista de operadores lógicos nas condições:

| Operador | Descrição |
| -------------- | --------------- |
| `não ...` | Inverte uma condição |
| `... ou ...` | Verdade se ao menos uma das condições forem verdade |
| `... e ...` | Verdade apenas se ambas as condições forem verdade |

