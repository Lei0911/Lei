/*============DO NOT TOUCH THESE======================*/
var hair = document.getElementById("hair"),
    eyes = document.getElementById("eyes"),
    nose = document.getElementById("nose"),
    mouth = document.getElementById("mouth");

hair.style.width = "60%";
hair.style.top = "0%";
eyes.style.width = "20%";
eyes.style.top = "40%";
nose.style.width = "20%";
nose.style.top = "55%";
mouth.style.width = "20%";
mouth.style.top = "75%";

/*==================YOUR WORK STARTS BELOW=====================*/
num1=0;
num2=0;
num3=0;
num4=0;
hair.addEventListener("click",function(){
	num1++
	hair.src= "img/hair"+(num1)+".png";
	if(num1>=3){
		num1=0;
	}
});
eyes.addEventListener("click",function(){
	num2++
	eyes.src= "img/eyes"+(num2)+".png";
	if(num2>=3){
		num2=0;
	}
});
nose.addEventListener("click",function(){
	num3++
	nose.src= "img/nose"+(num3)+".png";
	if(num3>=3){
		num3=0;
	}
});
mouth.addEventListener("click",function(){
	num4++
	mouth.src= "img/mouth"+(num4)+".png";
	if(num4>=3){
		num4=0;
	}
	
});