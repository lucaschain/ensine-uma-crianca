---
title: "Astro da Bateria"
date: 2025-05-27T13:00:00-03:00
draft: false
summary: "Usando variáveis para contar pontos e comprar melhorias"
weight: 10
aliases:
  - /9
params:
  type: suporte
  images:
    - cover.png
---

**Módulo:** [1 - Mais Scratch](https://projects.raspberrypi.org/pt-BR/pathways/more-scratch)

**Atividade:** [3 - Drum Star](https://projects.raspberrypi.org/en/projects/drum-star/)

**Projeto pronto:** [contém spoilers](https://scratch.mit.edu/projects/1181357159/)

---

{{< youtube _a9kZD6I0_Y >}}

Chegamos em outra atividade musical! Essa em particular me deixa muito feliz por que bateria é meu instrumento favorito!

Vamos aprender a clicar um jogo "clicker": onde a jogabilidade envolve cliques de mouse pra ganhar pontos, comprar melhorias e aumentar seus ganhos.

{{< details summary="O que você vai fazer" >}}
Criaremos um jogo no qual nosso jogador está numa jornada pra ser uma estrela da bateria.

O jogo começa num cenário de treino, com uma bateria de uma peça só.

Conforme nosso jogador toca, ele ganha pontos a cada batida e pode usar esses pontos pra comprar mais partes de bateria, que por sua vez dão mais pontos pro jogador.

Acesse a seção "What you will do" do [material original](https://projects.raspberrypi.org/en/projects/drum-star/) pra ver um exemplo do jogo funcionando.
{{< /details >}}

{{< details summary="Prepare o palco" >}}
Nosso astro começa pequeno: apenas praticando em seu quarto. Adicione um cenário que se parece um lugar de praticar bateria no início da carreira. No meu projeto, vou usar o `Bedroom 3 (Quarto 3)`.

Se quiser, use o editor de cenários pra pintar e modificar seu quarto pra deixar ele mais sua cara.

Agora, a gente quer começar o jogo perguntando qual nome da pessoa que está jogando pra poder exibí-lo no canto da tela. Pra armazenar esse nome na nossa memória, vamos utilizar `Variáveis`.

Vou colocar uma explicação breve sobre variáveis aqui, mas caso você queira se aprofundar, [clique aqui pra abrir uma explicação mais detalhada](/conceitos/variaveis/).

Você já precisou anotar algo no papel só pra não esquecer depois? Um telefone, uma lista de mercado, uma palavra secreta.

Os computadores fazem algo parecido: guardam dados na memória pra lembrarem depois.

O Scratch também nos permite guardar coisas na memória RAM do computador através de `Variáveis`.

Variáveis são como gavetas, mas são gavetas peculiares, nas quais você só pode guardar um objeto de cada vez:

{{< image path="imagens/gaveta-1.png" alt="Uma gaveta peculiar que só possui um papel em branco dentro" >}}

Se quisermos lembrar do nome do jogador do nosso jogo, precisamos guardar esse nome na nossa gaveta (variável):

{{< image path="imagens/gaveta-2.png" alt="A gaveta com seu papel em branco contendo o nome Natalia" >}}

E essa é exatamente nossa missão de início de jogo: quando o jogo começar, queremos perguntar o nome do jogador e armazenar em uma variável.

Pra fazer essa pergunta, vamos usar o bloco sensor `pergunte ... e espere`. Esse bloco é feito pra ser usado em conjunto com outro bloco, que vai dizer pra gente o valor da `resposta`:

{{< image path="imagens/pergunte-1.png" alt="Blocos de pergunta lado a lado" >}}

O bloco `pergunte ... e espere` vai mostrar uma caixa de texto pro jogador. Assim que o jogador terminar de escrever, o código continua.

O bloco arredondado `resposta` vai conter o texto que o jogador digitou.

Agora queremos colocar a `resposta` dentro de uma gaveta no Scratch. Pra fazer isso, vá na seção `variáveis` do blocos e clique em `Criar uma variável`. Digite "nome do jogador" no nome e clique em "OK".

{{< video path=imagens/variavel-1.mp4 >}}

Agora nossa gaveta está criada e possui um nome: `nome do jogador`:

{{< image path="imagens/gaveta-3.png" alt="A mesma gaveta da analogia, agora com uma etiqueta de identificação escrito 'nome do jogador'" >}}

Pra mudarmos o conteúdo da gaveta, vamos usar o bloco `mude <variável> para ...` combinado com o bloco `resposta` da pergunta anterior.

O código do cenário fica desse jeito:

{{< image path="imagens/cenario-1.png" alt="Código do cenário contendo os blocos mencionados acima" >}}

Agora clique na bandeira verde e digite seu nome. Percebeu que ele está aparecendo no canto superior da tela?

Você pode mudar ele de lugar, e até mesmo mudar o tipo de exibição:

{{< video path=imagens/variavel-2.mp4 >}}

Sempre que nosso jogo começar, precisamos apagar o nome do último jogador que jogou. Além disso, queremos que nosso cenário sempre comece sendo o quarto, então vamos adicionar dois novos blocos pra garantir que o jogo sempre começa do mesmo jeito: `mude cenário para ...` e `mude <nome do jogador> para ???`:

{{< image path="imagens/cenario-2.png" alt="Código do cenário com as preparações de início" >}}

{{< /details >}}

{{< details summary="Bateria Inicial" >}}
Nosso baterista vai começar sem dinheiro e apenas com uma parte da bateria: o *chimbal*. Adicione um novo ator e procure pelo modelo `Drum-highhat`. Note que esse ator já tem fantasias de "fazendo som".

Existe uma forma de adicionarmos funcionalidades ao Scratch através de `Extensões`. No canto inferior esquerdo da tela, clique no quadrado roxo com ícone de bloquinhos brancos, e clique na extensão `Música`.

{{< video path=imagens/extensoes.mp4 >}}

Agora nós temos uma nova seção de blocos: `Música`.

Experimente com o bloco `toque instrumento ... por ... batidas` pra ver quais instrumentos pode usar.

No nosso bloco, `quando ele for clicado`, vamos trocar pra fantasia `drum-highhat-b`, tocar o som de chimbal, e voltar pra fantasia `drum-highhat-a`:

{{< image path="imagens/chimbal-1.png" alt="Código da interção de tocar o chimbal" >}}

Teste seu chimbal e, se estiver tudo funcionando, vamos começar a contabilizar as batidas.

Usaremos outra gaveta (variável) pra guardar a contagem de batidas:

{{< image path="imagens/gaveta-4.png" alt="Gaveta com o nome 'batidas' contendo o número zero" >}}

Pra criar sua variável, vá pra seção "Variáveis", clique em "Criar nova variável". Dessa vez, não se esqueça de marcar "Para todos os atores":

{{< image path="imagens/batidas-1.png" alt="Criação da variável batidas, para todos os atores" >}}

Como na imagem da gaveta ali em cima, nossa contagem de batidas deve começar em zero, por isso, no código do `palco`, vamos adicionar o bloco `mude <batidas> para <0>`:

{{< image path="imagens/cenario-4.png" alt="Novo bloco no código do palco" >}}

Pra números, essa gaveta é especial: ela nos permite **incrementar** o conteúdo da gaveta.

No código do chimbal, queremos contar as batidas e vamos usar um novo bloco pra isso: `adicione ... a <variável>`:

{{< image path="imagens/chimbal-2.png" alt="Código do chimbal com o bloco de incremento de batidas" >}}
{{< /details >}}

{{< details summary="Próximo tambor" >}}
Chegou a hora de dar um upgrade na nossa bateria. Vamos adicionar agora uma "caixa", que só vai estar disponível para compra quando o jogador tiver 10 batidas.

Primeiro, vamos escolher o ator `drum-snare` na lista de atores. Depois de adicionar, você pode selecionar o ator do `chimbal` e arrastar seu bloco de código pro ator da caixa:

{{< video path=imagens/caixa-1.mp4 >}}

Depois de arrastar, troque os valores dos blocos pra ficarem de acordo com o novo ator:

- Incremento de batidas agora é `2`
- Altere os blocos de troca de fantasia para as fantasias `drum-snare`
- Troque o instrumento para `Tarol (1)`

O código da sua caixa deve estar assim:

{{< image path="imagens/caixa-1.png" alt="Código da caixa com os valores corretos" >}}

Mas como vimos antes, esse ator não vai estar disponível quando o jogo iniciar, então temos que `esconder` o ator da caixa `quando a bandeira verde for clicada`:

{{< image path="imagens/caixa-2.png" alt="Código de preparação da caixa que a esconde" >}}

Agora, vamos criar o botão que nos permite comprar a caixa. Adicione um novo ator e escolha a aparência do botão - pro nosso exemplo, vou usar o `Button 3`.

Pra não confundirmos no futuro, coloque o nome do ator do botão pra "caixa".

Vamos estilizar o botão com a imagem do instrumento que ele desbloqueia: vá para a fantasia da caixa, use a ferramenta *seta* pra selecionar a caixa e clique no botão copiar. Depois, cole-a no botão da caixa. Aproveite pra escrever o custo do instrumento (10 batidas):

{{< video path=imagens/botao-caixa.mp4 >}}

Agora, escolhar um lugar pro seu botão de caixa ficar - o canto da tela pode ser um ótimo lugar.

Com tudo arrumado no lugar certo, vamos fazer o código de compra no ator do botão da caixa.

Quando o jogador clicar no botão, ele deve verificar se o jogador já possui 10 batidas pra poder comprar o instrumento. Pra isso, vamos usar um bloco `se ... senão`.

Com esse bloco, queremos comparar a variável `batidas` pra saber se ela é maior que `9`, se sim, o instrumento será comprado. Se não, vamos avisar o jogador que lhe faltam batidas:

{{< image path="imagens/botao-caixa-1.png" alt="Código inicial de quando o botão da caixa for clicado." >}}

O bloco `se ... senão` é parecido com o bloco `se ... então`, a diferença é que ele possui 2 encaixes.

Enquanto o bloco `se ... então` só se preocupa com a verdade, o `se ... senão` vai fazer uma coisa caso seja verdade, ou outra caso seja mentira.

No nosso caso, se for verdade (o jogador possui 10 ou mais batidas), queremos esconder o botão e subtrair 10 batidas do jogador, e se for mentira, queremos avisar o jogador que ele não possui as 10 batidas ainda:

{{< image path="imagens/botao-caixa-2.png" alt="Código do botão da caixa com a subtração do preço e mensagem pro jogador." >}}

Ainda falta uma coisa: o ator da caixa precisa saber se o botão foi clicado pra poder aparecer. Pra isso, vamos usar o bloco `transmita ...`.

Esse bloco vai transmitir uma mensagem chamada `comprou caixa`:

{{< image path="imagens/botao-caixa-3.png" alt="Código do botão da caixa transmitindo a mensagem de compra da caixa" >}}

E nosso ator da caixa vai ficar de olho na mensagem (`quando eu receber <comprou caixa>`) pra poder aparecer:

{{< image path="imagens/caixa-3.png" alt="Caixa reagindo à mensagem transmitida pelo botão" >}}

Quando a caixa for comprada, também queremos mudar o cenário. Adicione um novo cenário pro palco (escolhi o `Metro` no exemplo) e mude para ele quando o palco receber `comprou caixa`:

{{< image path="imagens/cenario-5.png" alt="Código do cenario que reage à compra da caixa" >}}

{{< /details >}}

{{< details summary="Mais tambores!" >}}
Pra firmar o conhecimento, vou te mostrar como duplicar os atores que temos pra criar mais instrumentos, assim você consegue fazer sua própria orquestra.

Adicione um novo ator pra ser a nova adição da bateria - vou escolher o `Drums Tabla` no meu exemplo.

Agora, vá no ator `Drum snare` (o segundo instrumento que adicionamos) e arraste os três blocos de código pro novo ator e atualize os blocos. Não se esqueça de mudar:

- a quantidade de batidas adicionadas;
- as fantasias que serão trocadas;
- o instrumento que vai ser trocadas;
- a mensagem transmitida.

{{< video path=imagens/tabla-1.mp4 >}}

Duplique o botão da caixa e faça o mesmo processo, mudando o seguinte:

- a quantidade de batidas e o ícone na fantasia;
- no código, o o custo do instrumento na condicional, na dedução do valor e também no texto de resposta;
- a mensagem transmitida.

{{< video path=imagens/botao-tabla-1.mp4 >}}

E por último, adicione um novo cenário ao palco para o próximo show, eu escolhi o `Spotlight`.

Adicione o bloco `quando eu receber ...` com a mensagem do novo ator, trocando para o novo cenário escolhido. O código final do palco vai ficar assim:

{{< image path="imagens/cenario-6.png" alt="Código final do palco com o código da compra do último instrumento" >}}
{{< /details >}}

Pra finalizar, posicione os seus instrumentos e botões onde preferir, lembre-se que eles devem ficar bem-posicionados em todos os cenários. Caso tenha dificuldades, escolha 3 cenários que possuem o "chão" no mesmo lugar.

Agora jogue seu jogo e melhore ele com mais instrumentos conforme desejar! Vejo você na próxima atividade!
