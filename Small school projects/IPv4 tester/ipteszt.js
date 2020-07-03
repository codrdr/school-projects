function valid() {
	var elso = document.getElementById("elso").value;
	var masodik = document.getElementById("masodik").value;
	var harmadik = document.getElementById("harmadik").value;
	var negyedik = document.getElementById("negyedik").value;
	var o = 0;
	var i;
	for(i=0;i<4;i++){
	if (elso>255|elso<0|elso=="") {
		o++;
		break;
	}
	if (masodik>255|masodik<0|masodik=="") {
		o++;
		break;
	}
	if (harmadik>255|harmadik<0|harmadik=="") {
		o++;
		break;
	}
	if (negyedik>254|negyedik<0|negyedik=="") {
		o++;
		break;
	}
	}
	if(o>0){
		alert("Hibás IPv4 címet adott meg!");
	}else{
		alert("Jó IPv4 címet adott meg!");
	}
}