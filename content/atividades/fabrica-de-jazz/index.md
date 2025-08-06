---
title: "Fábrica de Jazz"
date: 2025-08-01T15:30:00-03:00
draft: false
summary: "Criando música com números!"
weight: 18
aliases:
  - /17
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [2 - Scratch Mais Longe](https://projects.raspberrypi.org/en/pathways/further-scratch)

**Atividade:** [5 - Music Maker](https://projects.raspberrypi.org/en/projects/music-maker/)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1203635438/)

---

{{< youtube CGfKQipxH8U >}}

No projeto de hoje, vamos explorar formas de usar números pra criar músicas de várias formas possíveis.

Não vamos ter um objetivo determinado, vamos fazer uma sequência de experimentos unindo matemática e arte!

O material original não possui tradução, então vou trazer ele todo pra cá, tomando uma liberdade pra pequenas mudanças no roteiro.

Você sabia que as músicas estão cheias de números dentro? Ela tá no ritmo, na melodia e até na harmonia. As notas musicais são números, e o tempo da batida também. Não tem nada na música que a gente toque que não seja um número em algum momento.

{{< details summary="Explorando os sons" >}}
Pra começar, precisamos adicionar uma extensão no nosso projeto. Lembra como faz isso? No canto de baixo, na esquerda da tela, clique no botão roxo de extensões, e clique na extensão "Música".

{{< image path="imagens/extensao-1.png" alt="Botão de adicionar extensão" >}}

> Os códigos feitos aqui são feitos no **palco**, e não em um ator.

Agora, você já pode usar os blocos de música, e olha: pela carinha dos blocos, já dá pra ver que vamos usar números pra quase tudo aqui.

Antes de qualquer coisa, quero que você teste os blocos:

- `toque o instrumento ...`
- `toque a nota ...`
- `mudar instrumento para ...`

Você vai perceber que tem 2 tipos de som nesses blocos: os que você escolhe as notas, e outro que você escolhe o instrumento diretamente.

O bloco `toque o instrumento ...` vai te ajudar a trabalhar com ritmos, pois ele tem instrumentos de percussão como tambor e prato.

O bloco `toque a nota ...` vai te ajudar a fazer as melodias, já que ele contém instrumentos que você pode escolher qual nota vai tocar.

Na vida real, as notas são uma **frequência sonora**, que é medida através de um número na unidade `hertz`.

No Scratch, as notas também são números! Mas não são as _frequências_ da vida real.

Experimente clicar no número da nota pra ver o tecladinho que o Scratch abre com as notas disponíveis:
{{< video path=imagens/notas-1.mp4 >}}

{{< /details >}}

{{< details summary="Música que se toca sozinha" >}}
Você consegue imaginar como faria pra música ficar o tempo todo tocando alguma coisa? Que tal usar o bloco `sempre`?

Replique esse cógido e vê se você conhece essa música:
{{< image path="imagens/musica-1.png" alt="Código de uma música misteriosa" >}}

Ou, que tal usar o bloco `número aleatório entre ... e ...` pra construir uma música que ninguém nunca viu?

E se você transformar a posição Y do mouse numa nota musical? Podemos usar um pouco de matemática pra programar esse efeito:
{{< image path="imagens/musica-2.png" alt="Código de música com a posição do mouse" >}}

{{< /details >}}

{{< details summary="Trocando de instrumentos" >}}
E que tal deixar seu jogador trocar o instrumento que está tocando?

O código que fizemos até agora, foi todo no código do palco. Pra deixar o jogador escolher o instrumento, precisamos fazer um ator que vai receber o clique do mouse e trocar o instrumento.

Consegue pensar numa forma de fazer isso? Vou dar uma dica: você vai precisar `transmitir` uma mensagem
{{< /details >}}

Pra ver uma demonstração completa desses atividade, assista nosso vídeo no topo da página!
