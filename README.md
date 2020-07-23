# Cardgame-js
Cardgame.js is a Javascript library for make easy cardgames developing! It is suitable for browser games in HTML5.

Cardgame.js é uma biblioteca Javascript para tornar mais fácil o desenvolvimento de jogos de cartas! Foi planejado para jogos de browser em HTML5.

## Getting Started (Começando)
Você deve baixar o projeto completo e adicionar o arquivo cards.js ao seu novo projeto. Você também deve adicionar o index.html, myStyle.css e a pasta images. O projeto conta ainda com um arquivo chamadao control.js que tem um exemplo padrão. É este arquivo que você deve editar. Logicamente, se você conhece HTML e CSS você pode mudar o código deles a vontade para melhor atender seu jogo.
### Prerequisites (Pré-requisitos)
O código não tem dependencia de nenhuma outra biblioteca, sendo portanto um javascript puro (Vanilla.js). Contudo, as funções descritas no arquivo cards.js dependem das imagens na pasta images. O index.html está preparado para funcionar com o código de control.js e com o myStyle.css, portanto altere com cuidado esse código e o mantenha. Se você ainda não tem experiência com programação Javascript é melhor usar apenas o arquivo control.js para programar.
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
### function createTable()
Cria uma mesa para o jogo, através da criação de um região que ocupa todo o centro da tela. Ele vai ocupar 80% da tela. Nessa mesa você podera colocar as cartas do seu jogo quando ele estiver executando. A mesa começa já com 3 regiões internas: "UP", "MID" e "DOWN". Elas separam as meses em 3 espaços que servem para delimitir o espaço para dos jogadores ("UP" e "DOWN") e espaço claro entre eles ("MID"). Os espaços ("UP" e "DOWN") não tem um tamanho definido, o que vai depender das cartas quando adcionadas. O espaço "MID" começa com largura e altura definidos.
```
function setup(){

createTable();

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
   
