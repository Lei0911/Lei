myMenu = document.getElementById("menu");
bgDiv = document.getElementById("bg");

document.getElementById("open").addEventListener("click", function(){
	myMenu.style.left = "0px";
	
});
document.getElementById("close").addEventListener("click", function(){
	myMenu.style.left = "-110px";
	
});
document.getElementById("makeBg").addEventListener("click", function(){
	bgDiv.style.backgroundImage = document.getElementById("zoom").style.backgroundImage;
	
});
document.getElementById("reset").addEventListener("click", function(){
	bgDiv.style.backgroundImage = "none";
	
});
document.getElementById("showApp").addEventListener("click", function(){
	document.getElementById("app1").style.display = "block";
	
});
document.getElementById("hideApp").addEventListener("click", function(){
	document.getElementById("app1").style.display = "none";
	
});