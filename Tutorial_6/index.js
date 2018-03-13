num1=0;
num2=0;
num3=300;
var bgDiv = document.getElementById("bg"),
	displayDiv = document.getElementById("display"),
	titleDiv = document.getElementById("disTitle"),
	desDIv = document.getElementById("disDescription");
	

function expandMenu(){
	document.getElementById("controls").style.bottom = "0px";
};
function changeColor(){
	document.getElementById("disTitle").style.backgroundColor = colorInp.value;
	document.getElementById("disDescription").style.backgroundColor = colorInp.value;
};
function changeDescription(){	
	document.getElementById("disDescription").innerHTML = description.value;
};
function changeTitle(){	
	document.getElementById("disTitle").innerHTML = title.value;		
};
function changeBG(ev){
	if(ev.keyCode == 13){
		document.getElementById("bgImg").src = bgImgName.value;
		bgImgName.value = ''
	} else if(bgImgName.value == "horse"){
		document.getElementById("bgImg").src = "img/1.jpg";
		bgImgName.value = "img/1.jpg";
	} else if(bgImgName.value == "night"){
		document.getElementById("bgImg").src = "img/2.jpg";
		bgImgName.value = "img/2.jpg";
	} else if(bgImgName.value == "mountain"){
		document.getElementById("bgImg").src = "img/3.jpg";
		bgImgName.value = "img/3.jpg";
	} else if(bgImgName.value.indexOf("epic") != -1){
		document.getElementById("bgImg").src = "img/4.jpg";
		bgImgName.value = "img/4.jpg";
	}
};
function moveBG(ev){
	if(ev.keyCode == 37){
		num1+=10;
		document.getElementById("bg").style.right = num1+"px";		
	} else if(ev.keyCode == 39){
		num1-=10;
		document.getElementById("bg").style.right = num1+"px";		
	} else if(ev.keyCode == 38){
		num2+=10;
		document.getElementById("bg").style.bottom = num2+"px";
	} else if(ev.keyCode == 40){
		num2-=10;
		document.getElementById("bg").style.bottom = num2+"px";		
	} else if(ev.keyCode == 187){
		num3+=10;
		document.getElementById("bg").style.height = num3+"px";
	} else if(ev.keyCode == 189){
		num3-=10;
		document.getElementById("bg").style.height = num3+"px";		
	}
};
function createBg(){
	var newStoryBoard = document.createElement("div"),		//create div
		newTitleDiv = document.createElement("div"),		//create div
		newDesDiv = document.createElement("div"),			//create div
		newBgImg = document.createElement("img");			//create image

	
	
	newStoryBoard.className = "col-xl-2 col-lg-3 col-md-4 col-sm-12";     	//set className
	newTitleDiv.className = "nTD";			//set className
	newDesDiv.className = "nDD";			//set className
	newBgImg.className = "nBI";				//set className
	//nSB = "col-lg-3 col-md-4 col-sm-6 col-xs-12";
	
	
	newStoryBoard.appendChild(newTitleDiv);		//appendChild
	newStoryBoard.appendChild(newDesDiv);		//appendChild
	newStoryBoard.appendChild(newBgImg);		//appendChild
	displayDiv.appendChild(newStoryBoard);		//appendChild
	
	
	newTitleDiv.innerHTML = titleDiv.innerHTML;		//clone style
	newDesDiv.innerHTML = desDIv.innerHTML;			//clone style
	newBgImg.src = bgImg.src;						//clone img src
	
};
document.getElementById("menu").addEventListener("click", function(){
	expandMenu();
});
document.getElementById("bgImgName").addEventListener("keyup", function(ev){
	changeBG(ev);
});
document.getElementById("title").addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		changeTitle(ev);
		title.value='';
	} if(title.value == "c", ev.keyCode == 13){	
		createBg();
	}
	moveBG(ev);
});
document.getElementById("description").addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){
		changeDescription(ev);
		description.value = '';
	}
});
document.getElementById("colorInp").addEventListener("change", function(){
	changeColor();
});
