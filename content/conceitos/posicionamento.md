---
title: "Posicionamento"
date: 2022-10-14T18:34:18-03:00
draft: false
---

Todos os [atores](/conceitos/atores/) o Scratch possuem uma **posição**. Ela diz qual lugar do palco nosso [ator](/conceitos/atores/) está.

Pra posicionar o [ator](/conceitos/atores/) horizontalmente, usamos o `x`. Verticalmente, usamos o `y`.

<img alt="Mapa das posições X e Y do palco" src="/conceitos/imagens/posicionamento.svg" width="100%"/>

Quanto maior o `x`, mais o [ator](/conceitos/atores/) fica à direita

Quanto maior o `y`, mais o [ator](/conceitos/atores/) sobe

Pra facilitar o entendimento, podemos comparar esse conceito com outros jogos que usam o plano cartesiano:

- **Xadrez**: onde os números são o `y` e as letras são o `x`;
- [**Batalha Naval**](https://pt.wikipedia.org/wiki/Batalha_naval_(jogo)): letras são o `y` e os números são o `x`;

> 💡 Pensem em alguns `x` e `y` e adivinhe onde eles ficariam no quadro acima

Alguns blocos de código que controlam o posicionamento:

- `mova ... passos`: anda passos na direção que o [ator](/conceitos/atores/) está olhando
- `vá para x: ... y: ...`: teletransporta o [ator](/conceitos/atores/) pra uma posição exata
- `vá para ...`: teletransporta o [ator](/conceitos/atores/) pra outro ator, mouse ou aleatorio
- `mude x/y para ...`: teletransporta o [ator](/conceitos/atores/) em apenas um eixo
- `adicione ... a x/y`: acrescenta ou diminui a posição de apenas um eixo

### Camadas

Atores podem ficar na frente ou atrás de uns aos outros, e esse comportamento pode ser controlado.

Um [ator](/conceitos/atores/) pode ser trazido pra frente (mais perto da câmera), ou enviado pra trás com os blocos do tipo *Aparência*:

- `vá para a camada ...`: coloca um [ator](/conceitos/atores/) em frente a tudo
- `vá para ... ... camadas`: move camadas pra trás ou pra frente
