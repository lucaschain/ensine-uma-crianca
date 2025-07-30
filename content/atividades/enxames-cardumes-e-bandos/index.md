---
title: "Enxames, cardumes e bandos"
date: 2025-07-24T16:30:00-03:00
draft: false
summary: "Usando clones pra dimular comportamento de grupos de animais"
weight: 17
aliases:
  - /16
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [2 - Scratch Mais Longe](https://projects.raspberrypi.org/en/pathways/further-scratch)

**Atividade:** [4 - Swarms, schools, and flocks](https://projects.raspberrypi.org/en/projects/swarms-schools-flocks/)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1202790019/)

---

{{< youtube aFlA4e94CD4 >}}

Fala, internet! No, exercício de hoje, vamos aprender a simular o comportamento de grupos de animais (ou qualquer outra coisa que se move!).

O material original não tem tradução, então, como de costume, vou trazer todos os detalhes pra cá, assim você não precisa ficar traduzindo.

❗O material original apresenta e sugere criarmos um sistema de câmera, assim como fizemos no exercício [Astromóvel da Natureza](/atividades/astromovel-da-natureza/). Porém, decidi não trazer isso ao material daqui por conta de dois motivos:

1. Já vimos o conceito de perspectiva no exercício do astromóvel, então não será inédito;
2. Achei que o resultado final não ficou agradável e confunde o jogador.

Mesmo assim, você vai ver novos conceitos desafiadores e divertidos que vão te ajudar a criar esse simulador!

{{< details summary="O que você vai fazer" >}}
Esse aqui é o resultado final do jogo:

{{< video path=imagens/finalizado.mp4 >}}
{{< /details >}}

{{< details summary="Preparando o jogo" >}}
Pra começar, escolhe um cenário pra conter seu personagem principal, e crie um ator pra ser seu personagem.

> Lembre-se: seu personagem principal vai ser na verdade um grupo.

Pro meu projeto, escolhi o personagem `Dove` e o cenário `Slopes`.

O ator `Dove` possui duas fantasias: com asas abertas e com asas fechadas. Nós podemos usar isso a nosso favor, trocando de fantasia pra causar o efeito de bater de asas.

Ao clicar na bandeira verde, queremos manter um "motorzinho" ligado que troca a fantasia a cada `0.2` segundos. Seu código pro personagem principal deve ficar parecido com esse aqui:

{{< image path="imagens/pomba-1.png" alt="Motorzinho que troca de fantasia da pomba" >}}

{{< /details >}}

{{< details summary="Movimento do personagem" >}}
A base do movimento de nosso personagem vai usar o bloco `deslize`.

Quando a bandeira verde for clicada, vamos adicionar outro motorzinho que faz nosso personagem `deslizar por 0.5 segs. até <ponteiro do mouse>` o tempo todo:

{{< image path="imagens/pomba-2.png" alt="Motorzinho que faz a pomba seguir o mouse" >}}

{{< /details >}}

{{< details summary="Em bando!" >}}
A pomba está muito solitária, ela precisa de amigos pra sua revoada.

Pra isso, vamos usar clones. O que vamos fazer agora é modificar nosso código para que ele rode em todos os clones, pois todos eles precisam se mover e bater asas.

Substitua todos os `quando bandeira verde for clicada` por `quando eu começar como um clone`:

{{< video path=imagens/pomba-1.mp4 >}}

Agora, vamos fazer o código que vai gerar o bando.

O pombo original não vai fazer parte do bando, ele vai ser clonado `10` vezes e depois vamos `escondê-lo`.

> 💡Como você faria pra clonar o personagem 10 vezes? O segredo está no bloco `repita`.

Pra garantir que os clones vão nascer visíveis, precisamos usar o bloco `mostre` antes de criar os clones.

Seu código de criação de clones deve estar parecido com esse:

{{< image path="imagens/pomba-3.png" alt="Código que cria os clones no começo do jogo" >}}
{{< /details >}}

{{< details summary="Espalhando as pombas" >}}
O problema do nosso código é que os clones estão se juntando no mesmo lugar, como se fosse uma sombra.

Queremos que eles fiquem mais espalhados. Como podemos fazer isso?

Pra colocar cada pombo em um lugar diferente, não podemos usar `posição do mouse` no bloco de deslizar, temos que definir o `x` e o `y` manualmente.

Existem dois valores de sensor chamados `posição x do mouse` e `posição y do mouse` que podemos usar dentro do bloco `deslize por ... segs. para x .. y ...`. Se fizermos assim, esse bloco tem exatamente o mesmo efeito do `vá para posição do mouse`. Comece fazendo essa mudança no código:

{{< video path=imagens/pomba-2.mp4 >}}

Isso não mudou em nada nosso jogo, é apenas um passo pra podermos espalhar cada clone em um lugar.

O segredo pra isso vai ser **tornar a posição um pouco mais aleatória**. Ao invés de usarmos a `posição x e y do mouse` do mouse diretamente, vamos somar um `número aleatório entre -70 e 70`, assim, cada pombo vai pra um lugar um pouco diferente do outro:

{{< image path="imagens/pomba-4.png" alt="Adicionando um tempero aleatório nas variáveis de posição do mouse" >}}

Depois de fazer essa substituição, também tirei o código `espere 0.5 seg` pra ficar mais "fluido". O motorzinho de movimento vai ficar assim:

{{< image path="imagens/pomba-5.png" alt="Código de movimento das pombas" >}}

> 💡Se achar o movimento rápido demais, experimente aumentar o tempo no bloco `deslize por 0.5 segs ...` do pombo.

{{< /details >}}

{{< details summary="Um perigo no céu" >}}
Vamos adicionar um perigo no nosso jogo. No meu jogo, vou adicionar um ator de pterodáctilo, cujo nome é `Dinosaur3`.

Esse ator tem algumas fantasias que podemos usar como animação, mas vamos ter que mudar um pouco a ordem pra animação ficar correta:

{{< video path=imagens/pterodactilo-1.mp4 >}}

Agora, vamos pro motorzinho que faz ele bater asas. Copie o mesmo código de bater asas da pomba, mas usando o "topete" `quando bandeira verde for clicado`:

{{< image path="imagens/pterodactilo-1.png" alt="Código de bater asas do pterodáctilo" >}}
{{< /details >}}

{{< details summary="Movimentando o inimigo" >}}
Nosso inimigo vai ter um movimento aleatório também! Vamos começar com um motorzinho que começa `quando a bandeira verde for clicada`, e `mova ... passos` junto com um `se tocar na borda, volte`:

{{< image path="imagens/pterodactilo-2.png" alt="Movimento inicial do pterodáctilo" >}}

E o toque aleatório vai ser a direção onde ele está girando. Pra fazer isso, vou usar o bloco `gire ... graus` junto com o bloco `número aleatório entre -15 e 15`:

{{< image path="imagens/pterodactilo-3.png" alt="Código do pterodáctilo com a direção aleatória" >}}

E pro dinossauro se manter equilibrado sem apontar pra todo lado, no painel de direção marque o modo `esquerda/direita`:

{{< image path="imagens/pterodactilo-4.png" alt="Selecionando modo de direção direita/esquerda" >}}

> 💡Experimente com diferentes modos de direção pra ver qual prefere usar

{{< /details >}}

{{< details summary="Predador" >}}
Por enquanto nosso predador não oferece perigo algum! Vamos mudar isso.

No código da **Pomba**, no motorzinho que tem o bloco `deslize ...` pro movimento da pomba, queremos verificar se a pomba está `tocando em <Dinosaur3>` (agora é um ótimo momento pra mudar o nome do ator do inimigo pra algo mais fácil de entender).

Queremos que o clone seja apagado `se o pombo tocar no pterodactilo`:

{{< image path="imagens/pomba-6.png" alt="Código da pomba de remover o clone ao encostar no pterodactilo" >}}

E pra finalizar, ainda **no ator da pomba**, adicione o som `Bite` na aba de Sons, e antes de remover o clone, use o bloco `toque o som <Bite>`:

{{< image path="imagens/pomba-7.png" alt="Código de tocar o som de mordida quando o pombo for removido" >}}
{{< /details >}}

E agora é sua vez! Pense em formas de incrementar seu jogo ou deixá-lo diferente com mais sons, efeitos visuais ou até mesmo inimigos.

Vejo você na próxima atividade!!
