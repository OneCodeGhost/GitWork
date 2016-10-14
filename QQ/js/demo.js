/*function getclass(clasName,parent){
	var oParent=parent?document.getElementById(parent):document,
		ele=[],
		elements=oParent.getElementsByTagName("*");

	for(var i=0;i<elements.length;i++){
		if(elements[i].className==clasName){
			ele.push(elements[i]);
		}
	}

	return ele;
}

window.onload=drag;

function drag(){
	var oTitle=getclass("login_logo_webqq","loginPanel")[0],
		oClose=document.getElementById("ui_boxyClose");
	oClose.onclick=function(){
		document.getElementById("loginPanel").style.display="none";
	}
	oTitle.onmousedown=fnDown;

	var loginState=document.getElementById("loginState"),
		loginStateShow=document.getElementById("loginStateShow"),
		statetxt=document.getElementById("login2qq_state_txt"),
		loginStatePanel=document.getElementById("loginStatePanel"),
		lists=loginStatePanel.getElementsByTagName("li");

	loginState.onclick=function(event){
		event=event||window.event;
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble=true;
		}
		loginStatePanel.style.display="block";
	}

	for(var i=0;i<lists.length;i++){
		lists[i].onmouseover=function(){
			this.style.background="#456";
		}

		lists[i].onmouseout=function(){
			this.style.background="#fff";
		}

		lists[i].onclick=function(event){
			event=event||window.event;
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				event.cancelBubble=true;
			}
			var id=this.id;
			loginStatePanel.style.display="none";
			statetxt.innerHTML=getclass("stateSelect_text",id)[0].innerHTML;
			loginStateShow.className="login-state-show "+id;
		}

	}

	document.onclick=function(){
		loginStatePanel.style.display="none";
	}
}

function fnDown(event){
	event=event||window.event;
	var oDrag=document.getElementById("loginPanel"),
		disX=event.clientX-oDrag.offsetLeft,
		disY=event.clientY-oDrag.offsetTop;
	oDrag.onmousemove=function(event){
		event=event||window.event;
		fnMove(event,disX,disY);
	}
	oDrag.onmouseup=function(){
		oDrag.onmousemove=null;

	}
}

function fnMove(e,posX,posY){
	var oDrag=document.getElementById("loginPanel"),
		l=e.clientX-posX,
		t=e.clientY-posY,
		winW=document.documentElement.clientWidth||document.body.clientWidth,
		winH=document.documentElement.clientHeight||document.body.clientHeight,
		maxW=winW-oDrag.offsetWidth,
		maxH=winH-oDrag.offsetHeight;

	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW-10;
	}

	if(t<0){
		t=10;
	}else if(t>maxH){
		t=maxH;
	}

	oDrag.style.left=l+"px";
	oDrag.style.top=t+"px";

}*/

function getclass(clasName,parent){
	var oParent=parent?document.getElementById(parent):document,
		ele=[],
		elements=oParent.getElementsByTagName("*");

	for(var i=0;i<elements.length;i++){
		if(elements[i].className==clasName){
			ele.push(elements[i]);
		}
	}

	return ele;
}

window.onload=drag;

function drag(){
	var oTitle=getclass("login_logo_webqq","loginPanel")[0],
		oClose=document.getElementById("ui_boxyClose");

	oClose.onclick=function(){
		document.getElementById("loginPanel").style.display="none";
	}
	oTitle.onmousedown=fnDown;

	var loginState=document.getElementById("loginState"),
		loginStatePanel=document.getElementById("loginStatePanel");
		loginStateShow=document.getElementById("loginStateShow"),
		statetxt=document.getElementById("login2qq_state_txt"),
		lists=loginStatePanel.getElementsByTagName("li");

		loginState.onclick=function(event){
			if(event.stopPropagation){
				event.stopPropagation();
			}else{
				cancelBubble=true;
			}
			loginStatePanel.style.display="block";
		}

		for(var i=0;i<lists.length;i++){
			lists[i].onmouseover=function(){
				this.style.background="#456";
			}

			lists[i].onmouseout=function(){
				this.style.background="#fff";
			}

			lists[i].onclick=function(event){
				if(event.stopPropagation){
					event.stopPropagation();
				}else{
					cancelBubble=true;
				}
				var id=this.id;
				loginStatePanel.style.display="none";
				statetxt.innerHTML=getclass("stateSelect_text",id)[0].innerHTML;
				loginStateShow.className="login-state-show "+id;

			}
		}

	document.onclick=function(){
		loginStatePanel.style.display="none";
	}
}

function fnDown(event){
	event=event||window.event;
	var oDrag=document.getElementById("loginPanel"),
		disX=event.clientX-oDrag.offsetLeft,
		disY=event.clientY-oDrag.offsetTop;

	oDrag.onmousemove=function(event){
		event=event||window.event;
		fnMove(event,disX,disY);
	}

	oDrag.onmouseup=function(){
		oDrag.onmouseup=null;
		oDrag.onmousemove=null;
	}
}

function fnMove(event,posX,posY){
	var oDrag=document.getElementById("loginPanel"),
		l=event.clientX-posX,
		t=event.clientY-posY,
		winW=document.documentElement.clientWidth||document.body.clientWidth,
		winH=document.documentElement.clientHeight||document.body.clientHeight,
		maxW=winW-oDrag.offsetWidth-10,
		maxH=winH-oDrag.offsetHeight;

	if(l<0){
		l=0;
	}else if(l>maxW){
		l=maxW;
	}

	if(t<0){
		t=10;
	}else if(t>maxH){
		t=maxH;
	}

	oDrag.style.left=l+"px";
	oDrag.style.top=t+"px";

}