# Cardgame-js
Cardgame.js is a Javascript library for make easy cardgames developing! It is suitable for browser games in HTML5.

Cardgame.js é uma biblioteca Javascript para tornar mais fácil o desenvolvimento de jogos de cartas! Foi planejado para jogos de browser em HTML5.

## Getting Started (Começando)
Você deve baixar o projeto completo e adicionar o arquivo cards.js ao seu novo projeto. Você também deve adicionar o cardGame.html, myStyle.css e a pasta images. O projeto conta ainda com um arquivo chamadao control.js que tem um exemplo padrão. É este arquivo que você deve editar. Logicamente, se você conhece HTML e CSS você pode mudar o código deles a vontade para melhor atender seu jogo.
### Prerequisites (Pré-requisitos)
O código não tem dependencia de nenhuma outra biblioteca, sendo portanto um javascript puro (Vanilla.js). Contudo, as funções descritas no arquivo cards.js dependem das imagens na pasta images. O cardGame.html está preparado para funcionar com o código de control.js e com o myStyle.css, portanto altere com cuidado esse código e o mantenha. Se você ainda não tem experiência com programação Javascript é melhor usar apenas o arquivo control.js para programar.
### Base Code (Código básico)
O arquivo control.js tem duas funções: setup() e draw(). Essas duas funções são inspiradas no P5.js (https://p5js.org/). Você irá usar o setup() para montar a mesa de jogo, a inteface do jogo. Já o draw() corresponde a lógica do jogo em si.

```
function setup(){
   //criação da tela
}

function draw(){
   //lógica do jogo
}
```
## Funções para criar a tela de jogo (executar em setup)
Para permitir que você manipule a tela do jogo sem precisar mexer no HTML foram criadas ulgumas funçãos que alteram o HTML e o CSS básico do código, permitindo que você faça tudo apenas com Javascript.
### function createTable(type)
Cria uma mesa para o jogo, através da criação de um região que ocupa todo o centro da tela. Ele vai ocupar 80% da tela. Nessa mesa você podera colocar as cartas do seu jogo quando ele estiver executando. A mesa começa já com 3 regiões internas: "up", "MID" e "down", que não são as  mesmas regiões "UP" e "DOWN" das barras. Elas separam as meses em 3 espaços que servem para delimitir o espaço para dos jogadores ("up" e "down") e espaço claro entre eles ("MID"). Os espaços ("up" e "down") não tem um tamanho definido, o que vai depender das cartas quando adcionadas. O espaço "MID" começa com largura e altura definidos.
* type - define o tipo da mesa que pode ser 0, para uma mesa com 2 linhas de cartas e uma região no meio chamada "MID" come desccrito acima   ou 1 para uma mesa com 3 linhas de cartas, com a terceira linha sendo uma região chamada "MIDDLE".
```
function setup(){

createTable(0);

}
```
```
function setup(){

createTable(1);

}
```
### function addCardSpace(position, label, amount)
Adiciona um espaço para carta na Mesa. 
* position - posição na mesa se acima ("UP") ou abaixo ("DOWN") do botão
* label - um texto para ser adcionado a celulas
* amount - a quantidade de espaços adicionados de um só vez
```
function setup(){

createTable();
addCardSpace("UP","0",2); //adiciona no espaço UP da mesa 2 regiões para colocar cartas


}
```

### function addBar(id)
Adiciona uma região em forma de barra vertical a tela. A região começa com uma altura definida mas que pode ser alterada por outra função (barSetHeight()).
A barra é desenhada de acordo com a ordem que você adicionou ela, sendo que a primeira que você adiciona vai ficar no canto superior da tela, e as demais virão
em seguida, abaixo. Se você adicionar uma barra antes de criar a mesa ela fica acima da mesa.
* id - o id do objeto que será alterado
```
function setup(){
   addBar("upbar"); // cria uma barra com o nome upbar
}
```

```
function setup(){
   addBar("upbar"); // cria uma barra com o nome upbar e uma mesa logo abaixo da barra
   createTable();
}
```
```
function setup(){
   addBar("upbar"); // cria uma barra com o nome upbar e uma mesa logo abaixo da barra, e depois outra barra abaixo da mesa
   createTable();
   addBar("vir"); 
}
```


### function setColor(id, red, green, blue)
Muda a cor de uma região da sua tela, usando o padrão RGB
* id - o id da região cuja cor será mudada. O bibliteca já tem os seguinetes ids: "UP", "DOWN","MID","TABLE"
* red - tom de vermelho da cor
* green - tom de verde
* blue - tom de azul
```
function setup(){

createTable();
setColor("MID",0,0,255);; //muda a cor do MID para AZUL.


}
```

### function setText(id1, text)
Adiciona um texto a uma regiãa da sua tela
* id - o id da região cuj texto será adicionado. O bibliteca já tem os seguinetes ids: "UP", "DOWN", "MID","TABLE".
* text - o texto que você quer adicionar
```
function setup(){
    addBar("vit"); // cria uma barra com id vit, muda sua cor para verde e adiciona um texto nela
    setColor("vit",0,255,0);
    setText("vit","Jogar")
}
```
### textDecoration(oldId, effect)
Altera o estilo do texto, para Negrito, Italico ou Normal.  É possivel aplicar separadamente os efeitos "ITALIC" e "BOLD".
* id - o id da região que vai ser alterada
* effect - o efeito que se quer aplicar, que pode ser "NORMAL", "ITALIC" e "BOLD" (negrito)
```
function setup(){
    setText("UP","Jogar")  //adicina um texto chamadao Jogar a região UP e depois deixa ele negrito
    textDecoration("UP","BOLD");    
}
```

### function textSize(id,size)
Altera o tamanho da fonte de um texto
* id - o id da região que vai ser alterada
* size - o tamanho novo da fonte
```
function setup(){
    setText("UP","Jogar")  //adicina um texto chamadao Jogar a região UP e altera seu tamanho pra 16 px
    textSize("UP",16);    
}
```

### function addButton(id,text,action)
Adiciona um botão a tela, no local especificado pelo id. O botão pode ter sua propria função
	* id - o id do obejto onde o botão vai ser adicionado
	* text - o texto do botão
	* action - uma função que será chamada quando o botão for apertado. É opcional e pode ser vazio
```
function setup(){
    
    addButton("MID","jogar");  //adciona um botão com o texto jogar a região MID
}
```   
```
function setup(){
    
    addButton("MID","vai", "draw()");  //adciona um botão com o texto vai a região MID, e com capacidade de chamar a função draw
}
``` 
### function setCardBack(color, type)
Altera a imagem do verso das cartas
* color - a cor do verso da carta que pode ser "RED", "GREEN" ou "BLUE"
* type - o tipo do desenho no fundo, que pode ser um número de 1 a 5
```
function setup(){

createTable();
addCardSpace("UP","0",2); //adiciona no espaço UP da mesa 2 regiões para colocar cartas
setCardBack("RED",2);

}
```

### function barSetHeight(id, h)
Muda a altura de uma barra
* id - o id do objeto que será alterado
* h - nova altura do objeto
```
 function setup(){
    addBar("vit");
    setColor("vit",0,255,0);
    setText("vit","Jogar")
    barSetHeight("vit", 30); //altera a altura da barra para 30px
 }
```

### function setScoreValue(id,num)
Adiciona uma região para exibir o score do jogador
* id - id da região onde vai ser adcionado o score
* num - numero do jogador, para poder diferenciar de quem é esse score
```
function setup(){
  setScoreValue("UP",1);
}
```

### function setWidth(id, w)
Altera a largura de uma regiao da tela
* id - o id do objeto que será alterado
* w - nova largura do objeto. Devem ser valores entre 0 e 100.
```
function setup(){
	addBar("vit");
    	setColor("vit",0,255,0);
    	setText("vit","Jogar")
    	setWidth("vit", 100);
    }
```

## Funções para criar a lógica de jogo (executar no draw ou antes das funções)
Para criar o seu jogo temos algumas funções que permitem que você manipule um baralho, embaralhando e sacando cartas.

### function shufle()
Embaralha as 52 cartas do jogo, não permitindo cartas repetidas. Não inclui os coringas. As cartas são armazenadas em um vetor chamado deck. O vetor é retornado
como saída desta função. Você pode executar tanto no draw, como antes das funções. Quando executado o baralho com 52 cartas é criado.

```
var deck2 = shufle(); // executado antes mesmo das funções
```

```
function draw(){
   var deck2 = shufle(); //executado no draw

}
```

### function deckMix()
Recebe um conjnto de baralhos e mistura os baralhos para criar um deck *unico com todos so baralhos. Use com sabedoria!
```
var deck2 = shufle();
var deck3 = shufle();
var finalDeck = deckMix(deck2,deck3);
```

### function nextCard(deck)

Saca a próxima carta do baralho
* deck - um vetor já com as cartas do baralho.
 ```
 function draw(){
	var card = nextCard(finalDeck);
}
```

### function paint(index, card)
Desenha uma carta do baralho na tela do jogo.
 
 * index - posição onde a carta será desenhada na mesa. A posição 0 representa o lugar onde a primeira carta foi adicionada com addCardSpace, e as demais seguem a sequencia
 que foram adicionadas
 * card - o nome de uma carta do jogo, já com .png
 
 ```
 function draw(){
	var card = nextCard(finalDeck);
	paint(0, card);
}
```

### getSuit(card)
Retorna o naipe da carta. A entrada é uma carta. A saida é uma string com o nome do naipe.
* card - uma carta para poder retornar o seu naipe
* saída - "Clubs - Paus", "Diamonds - Ouro", "Hearts - Copas", "Spades - Espada".
```
function draw(){
	var card = nextCard(finalDeck);
	var x = getSuit(c);
}
```

### function getNumber(card)
Retorna o número da carta.
 * card - uma carta para retorna o número
 * saída - string com o número da carta.
 ```
function draw(){
	var card = nextCard(finalDeck);
	var y = getNumber(c);
}
```

### function getCard(pos)
Retorna a carta de uma posição da mesa. A posição é difinida quando você adiciona uma carta na tela
* pos - posição da carta na mesa
* saída - carta que está na posição pesquisada

```
function draw(){
	var card1 = nextCard(finalDeck);
	paint(1, card1);
	var c = getCard(1);
}
```

### function addScore(player, score)
Adiciona pontos ao jogador.
 * player - numero do jogador. Os números dos jogadores são criados automáticamente quando você usa a função setScoreValue para criar um score na tela
 * score - potuação do jogador
```
function draw(){
	var card1 = nextCard(finalDeck);
	paint(1, card1);
	var c = getCard(1);
	var x = getSuit(c);
	addScore(1,getNumber(c));
}
```


