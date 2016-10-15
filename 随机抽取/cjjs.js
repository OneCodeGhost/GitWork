var data=["A","B","C","D","E","F","G"],
	timer=null;

window.onload=function(){
	var play=document.getElementById("play"),
		end=document.getElementById("end");

	play.onclick=playfun;
	end.onclick=endfun;
}

function playfun(){
	var title=document.getElementById("title");
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	},50)
	this.style.background="#999";
}

function endfun(){
	
}