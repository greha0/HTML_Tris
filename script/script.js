
var turni = 0;

function isPari(num){
	return num % 2 === 0;
}

function segnaPunto(a){
	if(isPari(turni)){
		//Player 1
		document.getElementById("mask" + a).style.backgroundImage = 'url("svg/cross.svg")';
	}else{
		//Player 2
		document.getElementById("mask" + a).style.backgroundImage = 'url("svg/circle.svg")';
	}
	turni++;
}