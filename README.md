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
## Funções para criar a tela de jogo (fxecutar em setup)
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
* position - posição na mesa se acima ("UP") ou abaixo ("DOWN") do botãoptimize
* label - um texto para ser adcionado a celulas
* amount - a quantidade de espaços adicionados de um só vez
```
function setup(){

createTable();
addCardSpace("UP","0",2); //adiciona no espaço UP da mesa 2 regiões para colocar cartas


}
```
