function szamol(){
	var a = document.getElementById("input").value;
	if(a == ""){
	  alert("Ön vagy nem írt be semmit, vagy elírt valamit.");
	}else{
	var b = a*10;
	  alert("A beírt szám "+a+", a szorzott szám "+b+".");
	}
}