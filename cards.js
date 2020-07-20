	//var deck1 = [];
	var table = [];
	var suits = ["Clubs", "Diamonds", "Hearts", "Spades"];
	var celulas;
	var linhas, upline, downline;
	celulas = document.getElementsByClassName("td");
  linhas = document.getElementsByClassName("tr");


	var name = "card";
	var pos = 0;
	var log = " ";


/* Saca a próxima carta do baralho
 *
 *
 * */
function nextCard(deck){
	var card = deck[pos];
	pos++;
	return card;
}

/* Desenha uma carta do baralho na tela do jogo.
 *
 * index - posição onde a carta será desenhada na tabela
 *
 * card - o nome de uma carta do jogo, já com .png
 * */
function paint(index, card){
	celulas[index].innerHTML= "<div style='clear: both;'class='img'> <img src='images/"+card+"'></div>";
	try {
		table[index] = card.substring(4,card.lastIndexOf("."));
	}catch(err){
		document.getElementById("result").innerHTML = err.name+ " card: "+card+" "+index+" "+table.length;
		alert("O baralho chegou ao fim. Reset o jogo apertando usando o atualizar do navegador");
	}

}

/* Embaralha as 52 cartas do jogo, não permitindo cartas repetidas.
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

	    card = draw();
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
	return deck;

}

/*
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

/*
 * Sorteia aleatóriamente uma carta do baralho.
 * A carta possui um numero e um naipe.
 * As cartas 1, 11, 12 e 13, são o Ás, Valete, Dama e Reis, respectiva-
 * mente
 *
 * */
function draw(){
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

/* retorna o naipe da carta. A entrada é uma carta. A saida é uma string.
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

/*
 * Adiciona pontos ao jogador.
 * Entrada - player: numero do jogador
 *         - Score: potuação do jogador
 * */
function addScore(player, score){
	document.getElementById("p"+player+"score").innerHTML = "<b>"+score+"</b>";
}

/*
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

/*
* Adiciona um espaço para carta na Mesa.
* position - posição na mesa se acima ("UP") ou abaixo ("DOWN") do botãoptimize
* label - um texto para ser adcionado a celulas
* amount - a quantidade de espaços adicionados de um só vez
*
*/
function addCardSpace(position, label, amount){
	for(i=0;i<amount;i++){
			var div = document.createElement("DIV");
			div.setAttribute("class", "td");
			div.innerHTML = "<div style='clear: both;' class='img'> <img src='images/backfinal.png'>"+(i+label)+"</div>";

			if(position=="UP"){
				document.getElementById("up").appendChild(div);
			}
			else if("DOWN"){
				document.getElementById("down").appendChild(div);
			}
		}
		addEndSpace();

}

/*
* adiciona um espeço no final de uma celula da tabela. Apenas para manter
* o estilo da tabela com div
*/
function addEndSpace(){
	var div = document.createElement("DIV");
	div.setAttribute("style", "clear: both;");
	document.getElementById("up").appendChild(div);
	//document.getElementById("down").appendChild(div);
}
