var data=["A","B","C","D","E","F","G"],
	timer=null,
	flag=0;

window.onload=function(){
	var play=document.getElementById("play"),
		end=document.getElementById("end");
	//鼠标事件
	play.onclick=playfun;
	end.onclick=endfun;

	//键盘事件
	document.onkeyup=function(event){
		event=event||window.event;
		if(event.keyCode==32){
			if(flag==0){
				playfun();
				flag=1;
			}else{
				endfun();
				flag=0;
			}
		}
	}
}

function playfun(){
	var title=document.getElementById("title");
	var play=document.getElementById("play");
	clearInterval(timer);
	timer=setInterval(function(){
		var random=Math.floor(Math.random()*data.length);
		title.innerHTML=data[random];
	},50)
	play.style.background="#999";
}

function endfun(){
	clearInterval(timer);
	var play=document.getElementById("play");
	play.style.background="#036";
}