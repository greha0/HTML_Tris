/**
 * TIC TAC TOE
 * @author Greta Maria Brugnatti
 */
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
				turni = 0;
				winTheme(document.getElementById("namePlayer1").innerText);
				return 1;
			}
		}

		/* Controllo sulle colonne */

		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+i)).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + (4+i)).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + (7+i)).style.backgroundImage == 'url("svg/cross.svg")'){
				vittPlayer1++;
				persPlayer2++;
				turni = 0;
				winTheme(document.getElementById("namePlayer1").innerText);
				return 1;
			}
		}

		/* Controllo diagonale */
		if(document.getElementById("mask" + 1).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 9).style.backgroundImage == 'url("svg/cross.svg")'){
			vittPlayer1++;
			persPlayer2++;
			turni = 0;
			winTheme(document.getElementById("namePlayer1").innerText);

			return 1;
		}

		if(document.getElementById("mask" + 3).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/cross.svg")' && document.getElementById("mask" + 7).style.backgroundImage == 'url("svg/cross.svg")'){
			vittPlayer1++;
			persPlayer2++;
			turni = 0;
			winTheme(document.getElementById("namePlayer1").innerText);

			return 1;
		}
	} else {

		/* Controllo sulle righe */ 
		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+(i*3))).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (2+(i*3))).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (3+(i*3))).style.backgroundImage == 'url("svg/circle.svg")'){
				vittPlayer2++;
				persPlayer1++;
				turni = 0;
				winTheme(document.getElementById("namePlayer2").innerText);
				return 2;
			}
		}

		/* Controllo sulle colonne */

		for(i=0; i<3; i++){
			if(document.getElementById("mask" + (1+i)).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (4+i)).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + (7+i)).style.backgroundImage == 'url("svg/circle.svg")'){
				vittPlayer2++;
				persPlayer1++;
				turni = 0;
				winTheme(document.getElementById("namePlayer2").innerText);
				return 2;
			}
		}

		/* Controllo diagonale */
		if(document.getElementById("mask" + 1).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 9).style.backgroundImage == 'url("svg/circle.svg")'){
			vittPlayer2++;
			persPlayer1++;
			turni = 0;
			winTheme(document.getElementById("namePlayer2").innerText);
			return 2;
		}

		if(document.getElementById("mask" + 3).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 5).style.backgroundImage == 'url("svg/circle.svg")' && document.getElementById("mask" + 7).style.backgroundImage == 'url("svg/circle.svg")'){
			vittPlayer2++;
			persPlayer1++;
			turni = 0;
			winTheme(document.getElementById("namePlayer2").innerText);
			return 2;
		}
	}

	/* Controllo pareggio */
	if(turni == 9){
		pareggio++;
		turni = 0;
		tieTheme();
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

/**
 * Funzione che resetta il campo di gioco
 */
function resettaTabellone(){
	var i=0;
	turni = 0;
	for(i = 1; i < 10; i++){
		document.getElementById("mask" + i).style.backgroundImage = "none";
	}
}

/**
 * Funzione che apre la modale dato il nome dell'ID
 * @param nome ID modale
 */
function apriModale(nome){
	document.getElementById(nome).style.visibility = "visible";
	document.getElementById("vittory").style.visibility="visible";
}


/**
 * Funzione che chiude la modale dato il nome dell'ID
 * @param nome ID modale
 */
function chiudiModale(nome){
	document.getElementById(nome).style.visibility = "hidden";
	document.getElementById("vittory").style.visibility="hidden";
}

/**
 * Funzione che imposta i nomi dei giocatori
 */
function setNomi(){
	var nome1 = document.getElementById("name1").value;
	var nome2 = document.getElementById("name2").value;

	if(nome1 == "" || nome2 ==""){
		alert("Enter players names");
		return;
	}else{
		document.getElementById("namePlayer1").innerText = nome1;
		document.getElementById("namePlayer2").innerText = nome2;
		/* Azzera  i punti dei giocatori */
		vittPlayer1 = 0;
		vittPlayer2 = 0;
		persPlayer1 = 0;
		persPlayer2 = 0;
		pareggio = 0;

		stampaPunteggio();
		resettaTabellone();
		chiudiModale("nomegiocatore");
		chiudiModale("vittory");
	}

}

/**
 * Funzione che visualizza la schermata di vittoria
 * @param nome Nome del giocatore che ha vinto
 */

function winTheme(nome){
	apriModale("vittory");
	document.getElementById("scrittaVittoria").innerText = nome + " wins";
}

/**
 * Funzione che visualizza la schermata di pareggio
 */
function tieTheme(){
	apriModale("vittory");
	document.getElementById("scrittaVittoria").innerText = "Tie";
}

function darkMode(){
	let theme = document.getElementById('theme');

	if (theme.getAttribute('href') == 'css/light.css') {
		theme.setAttribute('href', 'css/dark.css');
	} else {
		theme.setAttribute('href', 'css/light.css');
	}

}
