var c1 = document.getElementById("radioH");
var c2 = document.getElementById("radioB");
var c3 = document.getElementById("radioL");
var c4 = document.getElementById("radioF");
var imgText = document.getElementById("textIp");
num1=1;
num2=2;
var num3 = Math.floor((Math.random()*3)+1);
num4=''
num5=


document.getElementById("downImg").addEventListener("click", function(){
	document.getElementById("menu").style.top = "0px";
	
});

document.getElementById("buttonNext").addEventListener("click", function(){
	console.log(c1.checked, c2.checked, c3.checked, c4.checked)
	if(c1.checked){
		num1=num1+1;
		if(num1<=3){			
			document.getElementById("dhead").src = "imgs/gears/h"+(num1)+".png";
		} else {
			num1=0;
		}
	}
	else if(c2.checked){
		num1=num1+1;
		if(num1<=3){			
			document.getElementById("dbody").src = "imgs/gears/b"+(num1)+".png";
		} else {
			num1=0;
		}
	}
	else if(c3.checked){
		num1=num1+1;
		if(num1<=3){			
			document.getElementById("dleg").src = "imgs/gears/l"+(num1)+".png";
		} else {
			num1=0;
		}
	}
	else if(c4.checked){
		num1=num1+1;
		if(num1<=3){			
			document.getElementById("dfoot").src = "imgs/gears/f"+(num1)+".png";
		} else {
			num1=0;
		}
	} else {
		alert("Choose an option");
	}
	
}); 

document.getElementById("buttonPrev").addEventListener("click", function(){
	console.log(c1.checked, c2.checked, c3.checked, c4.checked)
	if(c1.checked){
		num2=num2-1;
		if(num2>=1){			
			document.getElementById("dhead").src = "imgs/gears/h"+(num2)+".png";
		} else {
			num2=4;
		}
	} 
	else if(c2.checked){
		num2=num2-1;
		if(num2>=1){			
			document.getElementById("dbody").src = "imgs/gears/b"+(num2)+".png";
		} else {
			num2=4;
		}
	}
	else if(c3.checked){
		num2=num2-1;
		if(num2>=1){			
			document.getElementById("dleg").src = "imgs/gears/l"+(num2)+".png";
		} else {
			num2=4;
		}
	}
	else if(c4.checked){
		num2=num2-1;
		if(num2>=1){			
			document.getElementById("dfoot").src = "imgs/gears/f"+(num2)+".png";
		} else {
			num2=4;
		}
	} else {
		alert("Choose an option");
	}
	
}); 
imgText.addEventListener("keyup", function(ev){
	if(ev.keyCode == 13){		
		if(imgText.value == "combo1"){
			document.getElementById("dhead").src = "imgs/gears/h1.png";
			document.getElementById("dbody").src = "imgs/gears/b1.png";
			document.getElementById("dleg").src = "imgs/gears/l1.png";
			document.getElementById("dfoot").src = "imgs/gears/f1.png";
			imgText.value="";
		} else if(imgText.value == "combo2"){
			document.getElementById("dhead").src = "imgs/gears/h2.png";
			document.getElementById("dbody").src = "imgs/gears/b2.png";
			document.getElementById("dleg").src = "imgs/gears/l2.png";
			document.getElementById("dfoot").src = "imgs/gears/f2.png";
			imgText.value="";
		} else if(imgText.value == "combo3"){
			document.getElementById("dhead").src = "imgs/gears/h3.png";
			document.getElementById("dbody").src = "imgs/gears/b3.png";
			document.getElementById("dleg").src = "imgs/gears/l3.png";
			document.getElementById("dfoot").src = "imgs/gears/f3.png";
			imgText.value="";
		//random number ????
		} else if(imgText.value == "random"){			
			document.getElementById("dhead").src = "imgs/gears/h"+(num3)+".png";
			document.getElementById("dbody").src = "imgs/gears/b"+(num3)+".png";
			document.getElementById("dleg").src = "imgs/gears/l"+(num3)+".png";
			document.getElementById("dfoot").src = "imgs/gears/f"+(num3)+".png";
			imgText.value="";
		//str+int change???
		} else if(imgText.value == "head3"){	
			document.getElementById("dhead").src = "imgs/gears/h3.png";
			//for(char in "head3"){
				//if(char==(num4)){				
					//document.getElementById("dhead").src = "imgs/gears/h"+(parseInt(num4))+".png";
				//}					
			}	
		} else if(imgText.value == "body2"){
			document.getElementById("dbody").src = "imgs/gears/b2.png";
		
		}
	
});


