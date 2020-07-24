	//var deck1 = [];
	var table = [];
	var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
	var celulas;
	var bars, upline, downline;
	celulas = document.getElementsByClassName("td");
  bars = document.getElementsByClassName("bar");
  var regions = ["UP","MID","BUTTON","TABLE","DOWN"];
  var deckCount = 0;
	var name = "card";
	var pos = 0;
	var log = " ";
  var count = 0;
	var cardBack;
	var cardSize;

/**
* Saca a próxima carta do baralho
 *
 *
 * */
function nextCard(deck){
	var card = deck[pos];
	pos++;
	return card;
}

/**
* Desenha uma carta do baralho na tela do jogo.
 *
 * index - posição onde a carta será desenhada na tabela
 *
 * card - o nome de uma carta do jogo, já com .png
 * */
function paint(index, card){

	try {
		celulas[index].innerHTML= "<div style='clear: both; 'class='img'> <img src='images/"+card+"'></div>";
		table[index] = card.substring(4,card.lastIndexOf("."));
	}catch(err){
		//document.getElementById("result").innerHTML = err.name+ " card: "+card+" "+index+" "+table.length;
		alert("O baralho chegou ao fim");
		celulas[index].innerHTML= "<div style='clear: both;'class='img'> <img src='images/"+"backfinal.png"+"'></div>";
    pos = 0;
	}

	count++;
	if(count==deckCount){
		alert("O baralho vai acabar e ser resetado");
		pos=0;
	}
  //document.getElementById("result").innerHTML = " contador: "+count+" "+deckCount;
}

/**
* Embaralha as 52 cartas do jogo, não permitindo cartas repetidas.
 * As cartas são armazenadas em um vetor chamado deck. O vetor é retornado
 * como saída desta função
 *
 * */
function shufle(){
	var cont = 0;
	var rep = 0;
	var card = "";
	var deck = [];
	while(cont < 52){

	    card = drawCard();
	    if(cont == 0){
			deck.push(card);
			cont++;
		}
		else{
			if(!search(card,deck)){
				deck.push(card);
				cont++;
			}

		}//fim do else
		rep++;
	}
	//alert(celulas.length);
	deckCount += 52;
	return deck;

}

/**
* recebe um conjnto de baralhos e mistura os baralhos para criar um deck
*unico com todos so baralhos
*/
function deckMix(){
  var array = [];
	for (i = 0; i < arguments.length; i++) {

    var temp = Array.from(arguments[i]);
		array = array.concat(temp);
  }
	var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}


/**
 * procurra um carta no baralho
 *
 * card - a carta a ser procurada.
 * */
function search(card, deck){
	var i;
	var found = false;
	for(i=0; i < deck.length; i++){
		if(deck[i] == card){
			found = true;
			break;
		}
	}
	return found;
}

/**
 * Sorteia aleatóriamente uma carta do baralho.
 * A carta possui um numero e um naipe.
 * As cartas 1, 11, 12 e 13, são o Ás, Valete, Dama e Reis, respectiva-
 * mente
 *
 * */
function drawCard(){
	var num;
	var aux;
	var x;
	var card = "card";
	num = Math.floor(Math.random()*13)+1;
	if(num == 11){
		aux = "J";
	}
	else if(num == 12){
		aux = "Q";
	}
	else if(num == 13){
		aux = "K";
	}
	else if(num == 1){
		aux = "A";
	}
	else{
		aux = num;
	}
	x = Math.floor(Math.random()*4);
	card = card+suits[x]+aux+".png";
	return card;
}

/**
* retorna o naipe da carta. A entrada é uma carta. A saida é uma string.
 * "Clubs - Paus", "Diamonds - Ouro", "Hearts - Copas", "Spades - Espada"
 * */
function getSuit(card){
	var suit;
	var pos = card.search("card");
 	if(pos>-1){
		suit = card.substring(4,card.lastIndexOf("s")+1);
	}
	else{
		suit = card.substring(0,card.lastIndexOf("s")+1);
	}
	return suit;
}

/**
 * Retorna o número da carta.
 * Entrada - uma carta
 * Saida - string com o número da carta.
 * */
function getNumber(card){
		var n;
		n = card.substr(card.lastIndexOf("s")+1);
		if(n=="J")
			return 11;
		else if(n=="Q")
				return 12;
		else if(n=="K")
				return 13;
		else if(n=="A")
				return 1;
		else
			return parseInt(n);
}

/**
 * Adiciona pontos ao jogador.
 * Entrada - player: numero do jogador
 *         - Score: potuação do jogador
 * */
function addScore(player, score){
	document.getElementById("p"+player+"score").innerHTML = "<b>"+score+"</b>";
}

/**
 * Retorna a carta de uma posição da mesa
 * Entrada - pos: posição da carta na mesa
 * */
function getCard(pos){
	var card;
	card = table[pos];
	return card;
}

/*
* Retorna o valor da posição atual
*
*/
function getPos(){
	return pos;
}

/**
* Adiciona um espaço para carta na Mesa.
* position - posição na mesa se acima ("UP") ou abaixo ("DOWN") do botãoptimize
* label - um texto para ser adcionado a celulas
* amount - a quantidade de espaços adicionados de um só vez
*
**/
function addCardSpace(position, label, amount){
	var lab;// = "i"+label;
	for(i=0;i<amount;i++){
		  lab = "i"+i+label;
			var div = document.createElement("DIV");
			div.setAttribute("class", "td");
			//div.setAttribute("id", label);
			div.innerHTML = "<div style='clear: both;' class='img'> <img class='cardspace' id='"+lab+"' src='images/backfinal.png'>"+(lab)+"</div>";

			if(position=="UP"){
				document.getElementById("up").appendChild(div);
			}
			else if(position=="DOWN"){
				document.getElementById("down").appendChild(div);
			}
			else if(position=="MIDDLE"){
				document.getElementById("middle").appendChild(div);
			}
		}
		if(amount>1){
			addEndSpace("up");
		}
		if(position=="MIDDLE"){
			addEndSpace("middle");
		}

}

/**
* adiciona um espeço no final de uma celula da tabela. Apenas para manter
* o estilo da tabela com div
*/
function addEndSpace(id){
	var div = document.createElement("DIV");
	div.setAttribute("style", "clear: both;");
	document.getElementById(id).appendChild(div);

}

/**
* função para mudar a cor das barras da tela
*/
function barColor(id,color1,color2,color3){
	var x;
	if(id=="UP"){
		x="upbar";
	}
	if(id=="DOWN"){
		x="downbar";
	}
	document.getElementById(x).style.backgroundColor  = "#"+(color1).toString(16)+(color2).toString(16)+(color3).toString(16);
}

/**
* muda a cor da região MID da Mesa
*/
function midColor(color1,color2,color3){
	document.getElementById("mid").style.backgroundColor  = "#"+(color1).toString(16)+(color2).toString(16)+(color3).toString(16);
}

/**
* muda a cor da região TABLE da tela
*/
function tableColor(color1,color2,color3){
	document.getElementById("center").style.backgroundColor  = "#"+(color1).toString(16)+(color2).toString(16)+(color3).toString(16);
}

/**
* Muda a cor de uma região da sua tela, usando o padrão RGB
* id - o id da região cuja cor será mudada. O bibliteca já tem os seguinetes ids: "UP", "DOWN","MID","TABLE"
* red - tom de vermelho da cor
* green - tom de verde
* blue - tom de azul
*/
function setColor(oldId, red, green, blue){

	var id = idTranslate(oldId);
	//document.getElementById(id).style.backgroundColor  = "#"+(red).toString(16)+(green).toString(16)+(blue).toString(16);
  document.getElementById(id).style.backgroundColor =     'rgb(' + red + ',' + green + ',' + blue + ')';
}

/**
* Adiciona um texto a uma regiãa da sua tela
* id - o id da região cuj texto será adicionado. O bibliteca já tem os seguinetes ids: "UP", "DOWN", "MID","TABLE".
* text - o texto que você quer adicionar
*/
function setText(id1, text){

  let id = idTranslate(id1);
	let num=2;
	if(id=="upbar"||id=="downbar"){
		if(id=="upbar"){
			num=1;
		}
		document.getElementById(id).innerHTML = "<span class='score' id='score"+num+"'>"+text+"</span>"; /*<span id='p"+num+"score'><b>0</b></span>";*/
	}
	else{
		document.getElementById(id).textContent = text;
	}
}

/**
* Altera o estilo do texto, para Negrito, Italico ou Normal
* id - o id da região que vai ser alterada
* effect - o efeito que se quer aplicar, que pode ser "NORMAL", "ITALIC" e "BOLD" (negrito)
* É possivel aplicar separadamente os efeitos "ITALIC" e "BOLD".
*/
function textDecoration(oldId, effect){
	var id = idTranslate(oldId);
	if(effect=="BOLD"){
		document.getElementById(id).style.fontWeight = "bolder";
	}
	if(effect=="ITALIC"){
		document.getElementById(id).style.fontStyle = "italic";
	}
	if(effect=="NORMAL"){
		document.getElementById(id).style.fontWeight = "normal";
		document.getElementById(id).style.fontStyle = "normal";
	}
}

/**
* Altera o tamanho da fonte de um texto
* id - o id da região que vai ser alterada
* size - o tamanho novo da fonte
*/
function textSize(id,size){
	var id = idTranslate(oldId);
	document.getElementById(id).style.fontSize = size+"px";
}

/**
* Traduz o id fornecido para um dos ids já definidos no HTML base do projeto
*
*/
	function idTranslate(id){
		var newId;
		switch(id){
				case 'UP':
					newId="upbar";
				  break;
				case 'DOWN':
					newId="downbar";
				  break;
				case 'MID':
					newId="mid";
				  break;
				case 'TABLE':
					newId="center";
				  break;
				case 'BUTTON':
					newId="button";
				  break;
				default:
				  newId =id;
				}
		return newId;
	}

  /**
	* Adiciona uma região para exibir o score do jogador
	* id - id da região onde vai ser adcionado o score
	*/
	function setScoreValue(id1,num){
		let id = idTranslate(id1);
		//let num = 2;
		/*if(id=="upbar"){
			num=1;
		}*/

		var span = document.createElement("SPAN");
		span.setAttribute("id", "p"+num+"score");
		span.innerHTML ="<b>0</b>";
		document.getElementById(id).appendChild(span);
	}

	/**
	* Adiciona uma região em forma de barra vertical a tela. A região começa com uma altura
	* definida mas que pode ser alterada por outra função (barSetHeight()).
	* id - o id do objeto que será alterado
	*
	*/
	function addBar(id){
		//var newId = id.toUpperCase();
    var div = document.createElement("DIV");
		div.setAttribute("class", "bar");
		div.setAttribute("id", id);
		document.getElementById("container").appendChild(div);
	}

	/**
	* Adiciona um botão a tela, no local especificado pelo id. O botão pode ter sua propria função
	* id - o id do obejto onde o botão vai ser adicionado
	* text - o texto do botão
	* action - uma função que será chamada quando o botão for apertado. É opcional e pode ser vazio
	*/

  function addButton(oldId,text,action){
		action = action || "none()";
		var id = idTranslate(oldId);
		var button = document.createElement("BUTTON");
		button.setAttribute("class", "button");
		button.setAttribute("id", "button");
		button.setAttribute("onclick", action);
		button.innerText = text;
		if(id!="mid"){
			button.style.position = "relative";
		}
		document.getElementById(id).appendChild(button);
		//<button class="button" id="button" onclick="draw()">Push</button>
	}

/**
* Cria uma mesa para o jogo, através da criação de um região que ocupa todo o
* centro da tela. Ele vai ocupar 80% da tela. Nessa mesa você podera colocar as cartas do
* seu jogo quando ele estiver executando. A mesa começa já com 3 regiões
* internas: "UP", "MID" e "DOWN". Elas separam as meses em 3 espaços que servem
* para delimitir o espaço para dos jogadores ("UP" e "DOWN") e espaço claro entre eles
*  ("MID"). Os espaços ("UP" e "DOWN") não tem um tamanho definido, o que vai depender
* das cartas quando adcionadas. O espaço "MID" começa com largura e altura definidos.
*/
	function createTable(type){
		var center = document.createElement("DIV");
		center.setAttribute("id", "center");
		var table =  document.createElement("DIV");
		table.setAttribute("class", "table");
		var up =  document.createElement("DIV");
		up.setAttribute("class", "tr");
	  up.setAttribute("id", "up");
		table.appendChild(up);
		if(type==0){
			var mid =  document.createElement("DIV");
			mid.setAttribute("id", "mid");
			table.appendChild(mid);
		}
		else{
			var middle =  document.createElement("DIV");
			middle.setAttribute("class", "tr");
		  middle.setAttribute("id", "middle");
			table.appendChild(middle);
		}
		var down =  document.createElement("DIV");
		down.setAttribute("class", "tr");
	  down.setAttribute("id", "down");
		table.appendChild(down);
		center.appendChild(table);
		document.getElementById("container").appendChild(center);
	}

/*
* Altera a imagem do fundo das cartas
* color - a cor do fundo da carta que pode ser "RED", "GREEN" ou "BLUE"
* type - o tipo do desenho no fundo, que pode ser um número de 1 a 5
*/
function setCardBack(oldColor, type){
	var color = oldColor.toLowerCase();
	if(color=="green" ||color=="blue" ||color=="red"){
			var x = document.getElementsByClassName("cardspace");
			for(i=0;i<x.length;i++){
				x[i].src = "images/cardBack_"+color+type+".png";
			}
	}


}

/*
* muda a altura de uma barra
* id - o id do objeto que será alterado
* h - nova altura do objeto
*/
function barSetHeight(id, h){
	var x = document.getElementsByClassName("bar");
	for(i=0;i<x.length;i++){
		if(id==x[i].id){
				x[i].style.height = h+"px";
		}
	}

}

/**
* Altera a largura de uma regiao da tela
* id - o id do objeto que será alterado
* w - nova largura do objeto. Devem ser valores entre 0 e 100.
*/
function setWidth(id, w){
	var newId = idTranslate(id);
	document.getElementById(newId).style.width = w+"%";
}

/*
* retornar o contador de cartas e posição da proxima carta para zero;
*/
function reset(){
	cont=0;
	pos=0;
}

/**
*
*/
function imageSize(size){
	    let images = document.getElementsByClassName("img");
			let src;
			let id;
			let className;
			for(i=0;i<images.length;i++){
		   className = images[i].childNodes[1].className;
			 src = images[i].childNodes[1].src;
			 id = images[i].childNodes[1].id;
			 images[i].innerHTML = "<img style='width:"+size+"px' class='"+className+"' id='"+id+"' src='"+src+"'>";
				//alert("te")
				//document.getElementsByTagName("IMG").style.width = size;
			}
      cardSize = size;
}

/**
* função criada apenas para permitir que a função addButoon possa ter uma função vazia
*/
function none(){

}
