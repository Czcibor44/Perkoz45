var metal = [" Slayer", " Metallica", " Vader", " Judas Priest", " Motorhead"];

function setMetal() {
 	for(let i = 0; i < metal.length; i++){
		document.getElementById("metal").innerHTML = metal
		
	}        
}
window.onload = setMetal();


function changeMetal() {
  	var band = prompt("Zmień nazwę pierwszego zespołu", "Ich Troje");
   	if (band != null) {
      	metal.splice(0, 1, band);
		   document.getElementById("metal").innerHTML = metal;
   	}
}	

document.addEventListener("click", changeMetal);



