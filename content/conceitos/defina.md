---
title: "Defina"
date: 2025-07-10T16:30:00-03:00
draft: false
---

O bloco `defina` é uma ótima forma de evitar repetições no código.

Imagine o seguinte exemplo:

{{< image path="/conceitos/imagens/defina-1.png" alt="exemplo de blocos se repetindo" >}}

Se eu precisar tricar a frase `"Deslizando!"` pra outra coisa, vou precisar mudar em dois lugares.

Agora, imagine se o projeto cresce, e isso é copiado pra outros lugares do código.

Apesar de compreensível, podemos deixar o código mais fácil de mudar e entender usando o bloco `defina`!

Pra fazer, procure nos blocos de código a seção `Meus Blocos`, e clique no botão `Criar um bloco`. Você poderá dar um nome pra ele - procure dar um nome de fácil compreensão.

Esse bloco é um bloco de topete, mas ele é diferente dos outros, pois é uma forma especial de _declarar_ uma informação.

Veja como ficaria o exemplo anterior se usarmos o bloco `defina`:

{{< image path="/conceitos/imagens/defina-2.png" alt="exemplo anterior, sem repetições, usando o bloco defina" >}}

Além disso, nosso bloco pode ter _entradas_, que são os "espaços em branco" que podem ser preenchido:

{{< image path="/conceitos/imagens/defina-3.png" alt="exemplo de entradas no bloco vá para" >}}

Essas "entradas" nos permitem usar o bloco com alguns valores. O bloco `vá para x ... y ...`, por exemplo, nos permite escolher as posições que o ator vai.

Quando criamos uma entrada no nosso bloco, ganhamos uma "variável especial", que podemos usar dentro do bloco `defina`. Essa variável vai conter o valor colocado quando o bloco for usado:

{{< image path="/conceitos/imagens/defina-4.png" alt="as entradas e seu valor dentro do bloco defina" >}}
