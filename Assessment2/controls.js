var pView = document.getElementById("preview"),
	randomB = document.getElementById("randomButton"),
	disDiv = document.getElementById("display"),
	hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
	rg1Inp = document.getElementById("rg1"),
	rg2Inp = document.getElementById("rg2"),
	rg3Inp = document.getElementById("rg3"),
	rg4Inp = document.getElementById("rg4"),
	addB = document.getElementById("addButton"),
	numB = document.getElementById("numButton"),
	rangeB = document.getElementById("rangeButton"),
	autoB = document.getElementById("autoButton"),
	stopB = document.getElementById("stopButton"),
	timer = null;
    mouth = document.getElementById("mouth");

document.getElementById("colorInp").addEventListener("change", function(){
	pView.style.backgroundColor = colorInp.value;	
});
numB.addEventListener("click", function(){
	changeTypeNum()
	
});
rangeB.addEventListener("click", function(){
	changeTypeRange()
});
rg1Inp.addEventListener("change", function(){
	hair.style.width = rg1.value+"%";
	
});
rg2Inp.addEventListener("change", function(){
	eyes.style.width = rg1.value+"%";
	
});
rg3Inp.addEventListener("change", function(){
	nose.style.width = rg1.value+"%";
	
});
rg4Inp.addEventListener("change", function(){
	mouth.style.width = rg1.value+"%";
	
});
addB.addEventListener("click", function(){
	createDiv()
});
function createDiv(){
	var newDiv=document.createElement("div"),
		newImg1=document.createElement("img"),
		newImg2=document.createElement("img"),
		newImg3=document.createElement("img"),
		newImg4=document.createElement("img");
	newDiv.className="nDiv";
	newImg1.className="nImg";
	newImg2.className="nImg";
	newImg3.className="nImg";
	newImg4.className="nImg";
	//how to set up 12  pic max in la row??
	disDiv.className = "col-sm-4 col-md-6 col-lg-8 col-xl-12";
		
	newImg1.src=hair.src;
	newImg2.src=eyes.src;
	newImg3.src=nose.src;	
	newImg4.src=mouth.src;
	
	newImg1.style.width = "60%";
	newImg1.style.top = "0%";
	newImg2.style.width = "20%";
	newImg2.style.top = "40%";
	newImg3.style.width = "20%";
	newImg3.style.top = "55%";
	newImg4.style.width = "20%";
	newImg4.style.top = "75%";
	
		
	newDiv.append(newImg1);
	newDiv.append(newImg2);
	newDiv.append(newImg3);
	newDiv.append(newImg4);
	disDiv.append(newDiv);
	newDiv.style.backgroundColor = pView.style.backgroundColor;	
	
	newDiv.addEventListener("click",function(){
		disDiv.removeChild(newDiv);
	});
}
randomB.addEventListener("click",function(){
	randomFace()
});
function createFace(){		
	createDiv();		
}
function randomFace(){
	//random int
	var num5=Math.floor(Math.random()*3)+1,
		num6=Math.floor(Math.random()*3)+1,
		num7=Math.floor(Math.random()*3)+1,
		num8=Math.floor(Math.random()*3)+1,
		num9=Math.floor(Math.random()*254)+1,
		num10=Math.floor(Math.random()*254)+1,
		num11=Math.floor(Math.random()*254)+1;
	
	hair.src= "img/hair"+(num5)+".png";
	eyes.src= "img/eyes"+(num6)+".png";
	nose.src= "img/nose"+(num7)+".png";
	mouth.src= "img/mouth"+(num8)+".png";
	//random color
	pView.style.backgroundColor = "rgb("+(num9)+","+(num10)+","+(num11)+")";
	
}
autoB.addEventListener("click",function(){	
	timer = setInterval(function(){
		createFace();
		randomFace();
	},300);
});
stopB.addEventListener("click",function(){
	clearInterval(timer);
});
function changeTypeNum(){
	rg1Inp.type = "number";
	rg2Inp.type = "number";
	rg3Inp.type = "number";
	rg4Inp.type = "number";	
};
function changeTypeRange(){
	rg1Inp.type = "range";
	rg2Inp.type = "range";
	rg3Inp.type = "range";
	rg4Inp.type = "range";
};





