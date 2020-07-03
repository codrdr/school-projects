function s(){
	var magyar = document.getElementById("magyar").value;
	magyar = korrekt(magyar);
	var matek = document.getElementById("matek").value;
	matek = korrekt(matek);
	var tori = document.getElementById("tori").value;
	tori = korrekt(tori);
	var angol = document.getElementById("angol").value;
	angol = korrekt(angol);
	var informatika = document.getElementById("informatika").value;
	informatika = korrekt(informatika);
alert((parseInt(magyar)+parseInt(matek)+parseInt(tori)+parseInt(angol)+parseInt(informatika))/5);
}
function korrekt(a) {
	
	if(a<1){
		a=1;
	}
	if(a>5){
		a=5;
	}
	return a;
}