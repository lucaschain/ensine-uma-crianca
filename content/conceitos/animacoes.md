---
title: "Animações"
date: 2022-10-14T18:30:18-03:00
draft: false
---

Animações em jogos são feitas da mesma forma que [animações](/conceitos/animacoes) eram feitas em papel:

<img alt="Animação de letras em um bloco de papel com a frase 'I love you'" src="/conceitos/imagens/animacao-post-it.gif" width="100%"/>

As linhas do desenho se mexem um pouco de cada vez, nos dando a impressão de que estão em movimento.

Pra simular esse mesmo comportamento utilizando Scratch, vamos usar blocos de [repetição](/conceitos/repeticoes).

Dentro dos blocos de repetição, vamos colocar blocos que fazem nosso [ator](/conceitos/atores) se mover, por exemplo:

- `mova ... passos`
- `adicione ... a X`
- `próxima fantasia`

Quando estiver animando, você pode controlar os valores dos blocos de repetição e movimento pra testar diferentes velocidades e distâncias:

<img alt="Blocos de [animação](/conceitos/animacoes)com os valores a serem alterados marcados" src="/conceitos/imagens/animacao.png" width="100%"/>

O número no bloco `mova ... passos` vai dizer a velocidade da [animação](/conceitos/animacoes). Se multiplicarmos os dois números, temos a distância total que o [ator](/conceitos/atores) vai se deslocar.

## Deslizando

Em algumas situações, você pode preferir definir o destino do movimento diretamente ao invés de repetir um movimento rapidamente. Nesses casos, use os blocos `deslize por ... segs. até ...`.

Com ele, você pode escolher um destino através de coordenadas, ou até mesmo a posição de outro ator.

Esse bloco não exige o uso de blocos de [repetição](/conceitos/repeticoes).
