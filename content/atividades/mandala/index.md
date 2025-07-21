---
title: "Mandala"
date: 2025-07-17T08:19:00-03:00
draft: false
summary: "Fazendo um jogo de ação pra testar as habilidades de quem jogar"
weight: 16
aliases:
  - /15
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [2 - Scratch Mais Longe](https://projects.raspberrypi.org/en/pathways/further-scratch)

**Atividade:** [3 - Mandala](https://projects.raspberrypi.org/en/projects/mandala/)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1197845624/)

---

{{< youtube hvmY5xtZHNk >}}

Fala, internet! Hoje vai ser mais um dia de arte digital, por que vamos fazer um criador de mandalas.

A palavra "mandala" significa "círculo", na língua sânscrita, e elas são comuns nas tradições budistas e hindu.

Hoje, vamos homenagear essa estética com um nossa arte interativa: um criador de mandalas, que cria formas circulares em cores e formatos diversos de acordo com nossa configuração.

O material original não está traduzido, então trouxe a atividade completa no texto daqui, com um roteiro um pouco reordenado.

{{< details summary="O que você vai fazer" >}}
Acesse a [seção "You will make" do material original](https://projects.raspberrypi.org/en/projects/mandala/0) pra ver um exemplo de como são as mandalas geradas automaticamente.
{{< /details >}}

{{< details summary="Clonando formas e formando padrões" >}}
Pra começar nosso projeto, vamos desenhar um novo ator e criar uma pétala. Você pode escolher a cor, o formato, e a posição dela.

Vou criar a minha com a função da caneta e pintar no centro:

{{< image path="imagens/petala-1.png" alt="petala de flor pintada de roxo" >}}

Dei o nome do meu ator de `pétala`, mas você pode decidir fazer sua mandala com qualquer símbolo.

Agora, vamos fazer nossa primeira demonstração de "repetir um padrão".

No código da pétala, `quando a bandeira verde for clicada`, vamos usar o bloco `crie um clone desse ator` e o bloco `mova ... passos`.

> O que acontece quando você clica em um botão depois do outro, repetidamente?

Percebeu que conseguimos criar clones, um ao lado do outro se usarmos esses dois blocos?

Nosso código de demonstração até agora tá assim:

{{< image path="imagens/petala-2.png" alt="repetição da clonagem" >}}

Só que isso ainda não tem nada parecido com um círculo, né? Então chegou a hora de experimentar.

Além de `mover 10 passos`, por que não tentamos `girar 15 graus`? Também vou colocar um `vá para x ... y ...` pra posicionar a primeira pétala no centro da tela.

> Se seu círculo não ficar completo, experimente aumentar a quantidade de vezes que o padrão vai se repetir

{{< image path="imagens/petala-3.png" alt="posicionando a mandala antes de começar a girar" >}}

Vamos querer desenhar mais de uma mandala na tela, então vamos transformar o código de repetição de padrões em um bloco só nosso, através do botão "Criar novo bloco":

{{< video path=imagens/petala-1.mp4 >}}

Pra saber mais sobre o bloco `defina`, [clique aqui](/conceitos/defina/).
{{< /details >}}

{{< details summary="Adicionando mais mandalas" >}}
E se quisermos adicionar mais mandalas na tela? Podemos usar nosso bloco mais vezes, em lugares diferentes.

> Faça o teste com blocos `vá para ...` pra posicionar e criar as mandalas em lugares diferentes

Só que desse jeito, todas as nossas mandalas vão sair iguais, vamos resolver isso usando _entradas_ nos nossos blocos defina.

Clique com o botão direito do mouse no bloco e clique em editar, aí adicione uma nova entrada com um rótulo:

{{< video path=imagens/petala-2.mp4 >}}

Percebeu que agora podemos passar o valor `15` pro nosso bloco? E estamos usando esse valor no nosso bloco `gire ... graus`.

Agora, adicione mais desses blocos, com o ator em lugares diferentes do mapa:

{{< image path="imagens/petala-4.png" alt="mais de um padrão desenhado, cada um com um valor de graus" >}}

E com isso, podemos adicionar mais entradas e deixarmos as mandalas mais diferentes uma da outra.

Edite seu bloco mais uma vez, e adicione entradas para a quantidade de vezes que ele vai repetir, o tamanho e o movimento:

{{< video path=imagens/petala-3.mp4 >}}
{{< /details >}}

{{< details summary="Mais efeitos!" >}}
Pra fazer nossa mandala ter folhas duplas, em cada repetição, podemos fazer um clone extra com o tamanho menor.

Vamos usar o bloco de `mude ... no tamanho` depois de criar o primeiro clone, e vamos aumentar o tamanho em 20 e diminuir depois de tirar o segundo clone pra voltar ao normal:

{{< image path="imagens/petala-5.png" alt="fazendo a folha dupla dentro do repita" >}}

Além disso, podemos também usar efeitos de imagem! Experimente com os efeitos e adicione dentro da sua repetição

{{< image path="imagens/petala-6.png" alt="efeito de cor adicionado na repetição" >}}
{{< /details >}}

{{< details summary="Mudando a fantasia" >}}
A última experiência que quero mostrar no seu criador de mandalas é a possibilidade de usarmos mais de uma fantasia, e até permitir o jogador escolher a fantasia de cada mandala.

Pra começar, adicione mais fantasias na sua mandala, e mude seu nome para os números 1, 2 e 3:

{{< image path="imagens/petala-7.png" alt="nomes nas fantasias adicionadas à pétala" >}}

> Veja, no mundo, nem tudo são flores. Escolhi uma pétala de banana e outra de pterodáctilo.

E pra complementar, podemos usar o bloco `pergunte` pra deixar nosso jogador escolher qual é a fantasia da mandala.

Na pergunta, digite algo como: `"Escolha a fantasia: 1 - flor, 2 - banana, 3 - pterodáctilo"`, e utilize a `resposta` dentro de um bloco `mude para fantasia ...`:

{{< image path="imagens/petala-8.png" alt="perguntas pro jogador qual é a fantasia antes de desenhar o padrão" >}}
{{< /details >}}

Como desafio, tente colocar valores aleatórios para os números das mandalas, ou adicionar mais fantasias!

Espero que tenha gostado dessa atividade, e vejo você na próxima!
