
  function setup(){
		addCardSpace("UP","0",2);
		//addEndSpace();
		addCardSpace("DOWN","4",2);
		//addCardSpace();


	}

	function main(){
		var deck2 = shufle();
		var card = nextCard(deck2);
		paint(0, card);
		var card1 = nextCard(deck2);

		paint(1, card1);
		var c = getCard(1);
		var x = getSuit(c);
		//alert(x);
		addScore(1,getNumber(c));

		//teste do addCard

	}
