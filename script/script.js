
var turni = 0;
var vittPlayer1 = 0;
var vittPlayer2 = 0;
var persPlayer1 = 0;
var persPlayer2 = 0;
var pareggio = 0;


function isPari(num){
	return num % 2 === 0;
}


/**
 * Questa funzione segna il punto sulla tavola di gioco
 * 
 * @param a Numero della cella 
 */

function segnaPunto(a){
	if(isVittoria(1) == -1 && isVittoria(2) == -1){
		if(isPari(turni)){
			//Player 1

				/* Controllo se è già stata utilizzata quella cella */ 
				if(document.getElementById("mask" + a).style.backgroundImage != 'url("svg/cross.svg")' && document.getElementById("mask" + a).style.backgroundImage != 'url("svg/circle.svg")'){
					document.getElementById("mask" + a).style.backgroundImage = 'url("svg/cross.svg")';
					turni++;
					
				}
				
			
		}else{
			//Player 2
			
				/* Controllo se è già stata utilizzata quella cella */ 
				if(document.getElementById("mask" + a).style.backgroundImage != 'url("svg/cross.svg")' && document.getElementById("mask" + a).style.backgroundImage != 'url("svg/circle.svg")'){
					document.getElementById("mask" + a).style.backgroundImage = 'url("svg/circle.svg")';
					turni++;
			
				}
				
		} 
	} else {
		resettaTabellone();
		stampaPunteggio();
	}
	
}


/**
 * Funzione che permette di controllare se qualcuno ha vinto
 * 
 * @param player Numero intero che indica giocatore uno o giocatore due
 * @return -1 se non ha vinto nessuno, 1 se ha vinto il giocatore 1 e 2 se ha vinto il giocatore 2, 0 pareggio
 */
function isVittoria(player){
	var i = 0;
	if(player == 1){

		/* Controllo sulle righe */ 
		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+(i*3))).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + (2+(i*3))).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + (3+(i*3))).style.backgroundImage == 'url("svg/cross.svg")'){
				vittPlayer1++;
				persPlayer2++;
				return 1;
			}
		}

		/* Controllo sulle colonne */

		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+i)).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + (4+i)).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + (7+i)).style.backgroundImage == 'url("svg/cross.svg")'){
				vittPlayer1++;
				persPlayer2++;
				return 1;
			}
		}

		/* Controllo diagonale */
		if(document.getElementById("mask" + 1).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 9).style.backgroundImage == 'url("svg/cross.svg")'){
			vittPlayer1++;
			persPlayer2++;

			return 1;
		}

		if(document.getElementById("mask" + 3).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 7).style.backgroundImage == 'url("svg/cross.svg")'){
			vittPlayer1++;
			persPlayer2++;

			return 1;
		}
	} else {

		/* Controllo sulle righe */ 
		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+(i*3))).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (2+(i*3))).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (3+(i*3))).style.backgroundImage == 'url("svg/circle.svg")'){
				vittPlayer2++;
				persPlayer1++;
				return 2;
			}
		}

		/* Controllo sulle colonne */

		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+i)).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (4+i)).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (7+i)).style.backgroundImage == 'url("svg/circle.svg")'){
				vittPlayer2++;
				persPlayer1++;
				return 2;
			}
		}

		/* Controllo diagonale */
		if(document.getElementById("mask" + 1).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 9).style.backgroundImage == 'url("svg/circle.svg")'){
			vittPlayer2++;
			persPlayer1++;
			return 2;
		}

		if(document.getElementById("mask" + 3).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 7).style.backgroundImage == 'url("svg/circle.svg")'){
			vittPlayer2++;
			persPlayer1++;
			return 2;
		}
	}

	/* Controllo pareggio */
	if(turni == 9){
		pareggio++;
		turni = 0;
		return 0;
	}

	return -1;
}

/**
 * Funzione che stampa sullo schermo i dati
 */
function stampaPunteggio(){
	document.getElementById("winsPlayer1").innerText = "Wins: " + vittPlayer1;
	document.getElementById("winsPlayer2").innerText = "Wins: " + vittPlayer2;
	document.getElementById("lostsPlayer1").innerText = "Losts: " + persPlayer1;
	document.getElementById("lostsPlayer2").innerText = "Losts: " + persPlayer2;
	document.getElementById("tiePlayer1").innerText = "Tie: " + pareggio;
	document.getElementById("tiePlayer2").innerText = "Tie: " + pareggio;
}

function resettaTabellone(){
	var i=0;
	turni = 0;
	for(i = 1; i < 10; i++){
		document.getElementById("mask" + i).style.backgroundImage = "none";
	}
}

function apriModale(nome){
	document.getElementById(nome).style.visibility = "visible";
}

function chiudiModale(nome){
	document.getElementById(nome).style.visibility = "hidden";
}

function setNomi(){
	var player1 = document.getElementById("name1").innerText;
	var player2 = document.getElementById("name2").innerText;

	document.getElementById("namePlayer1").innerText = document.getElementById("name1").value;
	document.getElementById("namePlayer2").innerText = player2 = document.getElementById("name2").value;

	vittPlayer1 = 0;
	vittPlayer2 = 0;
	persPlayer1 = 0;
	persPlayer2 = 0;
	pareggio = 0;

	stampaPunteggio();
	resettaTabellone();
	chiudiModale("nomegiocatore");
}

function setDarkMode(){
	
}