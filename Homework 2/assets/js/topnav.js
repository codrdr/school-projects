function reszponziv() {
	var x = document.getElementById("fejlec");
	if (x.className === "menu") {
		x.className += " responsive";
	}else{
	x.className = "menu";
  }
}