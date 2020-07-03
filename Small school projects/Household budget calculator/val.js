function merleg() {
	var brutto = 0.65*document.getElementById("brutto").value;
	var netto = document.getElementById("netto").value;
	var bevasarlas = document.getElementById("bevasarlas").value;
	var jarmu = document.getElementById("jarmu").value;
	var egeszseg = document.getElementById("egeszseg").value;
	var szolgaltatas = document.getElementById("szolgaltatas").value;
	var lakhatas = document.getElementById("lakhatas").value;
	var komm = document.getElementById("komm").value;
	var bevetel = (parseInt(brutto)) + (parseInt(netto));
	var kiadas = parseInt(bevasarlas) + parseInt(jarmu) + parseInt(egeszseg) + parseInt(szolgaltatas) + parseInt(lakhatas) + parseInt(komm);
	
	if (bevetel>kiadas) {
		alert("A mérlege ebben a hónapban pozitív. Megtakarított összege: " + (bevetel-kiadas) + " Ft.");
	}
	
	if (bevetel==kiadas){
		alert("A mérlege ebben a hónapban változatlan. Megtakarított összege: " + (bevetel-kiadas) + " Ft.");
	}
	
	if (bevetel<kiadas){
		alert("A mérlege ebben a hónapban negatív. Elvesztett összege: " +(bevetel-kiadas) + " Ft.");
	}
}