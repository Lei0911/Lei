var myImg1 = document.getElementById("ch1");
var myImg2 = document.getElementById("ch2");
var myImg3 = document.getElementById("ch3");
num1 = 100;
num2 = -2;
num3=13;

document.getElementById("bg1").addEventListener("click", function(){
	myImg1.style.backgroundImage = "url(i1.jpg)";
	
});
document.getElementById("ch1").addEventListener("mouseenter", function(){
	document.getElementById("zoom").style.backgroundImage = myImg1.style.backgroundImage;
	document.getElementById("ch1").style.borderColor = "black";
});
document.getElementById("ch1").addEventListener("mouseleave", function(){	
	document.getElementById("ch1").style.borderColor = "pink";
});

document.getElementById("bg1").addEventListener("click", function(){
	myImg2.style.backgroundImage = "url(i2.jpg)";	
});
document.getElementById("ch2").addEventListener("mouseenter", function(){
	document.getElementById("zoom").style.backgroundImage = myImg2.style.backgroundImage;
	document.getElementById("ch2").style.borderColor = "black";
});

document.getElementById("ch2").addEventListener("mouseleave", function(){	
	document.getElementById("ch2").style.borderColor = "pink";
});
document.getElementById("bg1").addEventListener("click", function(){
	myImg3.style.backgroundImage = "url(i3.jpg)";	
});
document.getElementById("ch3").addEventListener("mouseenter", function(){
	document.getElementById("zoom").style.backgroundImage = myImg3.style.backgroundImage;
	document.getElementById("ch3").style.borderColor = "black";
});
document.getElementById("ch3").addEventListener("mouseleave", function(){	
	document.getElementById("ch3").style.borderColor = "pink";
});

document.getElementById("bg2").addEventListener("click", function(){
	myImg1.style.backgroundImage = "url(i4.jpg)";	
});

document.getElementById("bg2").addEventListener("click", function(){
	myImg2.style.backgroundImage = "url(i5.jpg)";	
});
document.getElementById("bg2").addEventListener("click", function(){
	myImg3.style.backgroundImage = "url(i6.jpg)";
});

document.getElementById("bg3").addEventListener("click", function(){
	myImg1.style.backgroundImage = "url(i7.jpg)";	
});
document.getElementById("bg3").addEventListener("click", function(){
	myImg2.style.backgroundImage = "url(i8.jpg)";	
});
document.getElementById("bg3").addEventListener("click", function(){
	myImg3.style.backgroundImage = "url(i9.jpg)";	
});

document.getElementById("bg4").addEventListener("click", function(){
	myImg1.style.backgroundImage = "url(i10.jpg)";	
});
document.getElementById("bg4").addEventListener("click", function(){
	myImg2.style.backgroundImage = "url(i11.jpg)";	
});
document.getElementById("bg4").addEventListener("click", function(){
	myImg3.style.backgroundImage = "url(i12.jpg)";	
});


document.getElementById("zoom").addEventListener("click", function(){
	document.getElementById("zoomcontrols").style.display = "block";
	
});
document.getElementById("zoomIn").addEventListener("click", function(){
	num1=num1+10
	document.getElementById("zoom").style.width = num1+"%";
	
});
document.getElementById("zoomOut").addEventListener("click", function(){
	num1=num1-10
	document.getElementById("zoom").style.width = num1+"%";
	
});
document.getElementById("zoomIn").addEventListener("click", function(){
	num1=num1+7
	document.getElementById("zoom").style.height = num1+"%";
	
});
document.getElementById("zoomOut").addEventListener("click", function(){
	num1=num1-7
	document.getElementById("zoom").style.height = num1+"%";
	
});



document.getElementById("next").addEventListener("click", function(){	
	num2=num2+3
	if(num2+2<=12){
		myImg1.style.backgroundImage = "url(i"+(num2)+".jpg)";
		myImg2.style.backgroundImage = "url(i"+(num2+1)+".jpg)";
		myImg3.style.backgroundImage = "url(i"+(num2+2)+".jpg)";	
		
	} else{
		num2=-2
	}					
				
});

document.getElementById("previous").addEventListener("click", function(){

	num3=num3-3	
	if(num3>=1){
		myImg1.style.backgroundImage = "url(i"+(num3)+".jpg)";
		myImg2.style.backgroundImage = "url(i"+(num3+1)+".jpg)";
		myImg3.style.backgroundImage = "url(i"+(num3+2)+".jpg)";		
	} else{
		num3=13
	}
	
		
});






















