document.getElementById("bg1").addEventListener("click", function(){
	document.getElementById("main").style.display = "block";
	document.getElementById("sHead").style.display = "block"
	document.getElementById("mcontents").style.opacity = 1;	
});


document.getElementById("bg2").addEventListener("click", function(){
	document.getElementById("main").style.display = "block";
	document.getElementById("sBody").style.display = "block"
	document.getElementById("mcontents").style.opacity = 1;
	document.getElementById("SG1").src = "imgs/gears/b1.png";
	document.getElementById("SG2").src = "imgs/gears/b2.png";
	document.getElementById("SG3").src = "imgs/gears/b3.png";
	
});
document.getElementById("bg3").addEventListener("click", function(){
	document.getElementById("main").style.display = "block";
	document.getElementById("sLeg").style.display = "block"
	document.getElementById("mcontents").style.opacity = 1;
	document.getElementById("SG1").src = "imgs/gears/l1.png";
	document.getElementById("SG2").src = "imgs/gears/l2.png";
	document.getElementById("SG3").src = "imgs/gears/l3.png";
});
document.getElementById("bg4").addEventListener("click", function(){
	document.getElementById("main").style.display = "block";
	document.getElementById("sfoot").style.display = "block"
	document.getElementById("mcontents").style.opacity = 1;
	document.getElementById("SG1").src = "imgs/gears/f1.png";
	document.getElementById("SG2").src = "imgs/gears/f2.png";
	document.getElementById("SG3").src = "imgs/gears/f3.png";
});
