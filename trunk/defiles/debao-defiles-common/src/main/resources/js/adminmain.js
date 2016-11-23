if(!Array.prototype.map)
Array.prototype.map = function(fn,scope) {
  var result = [],ri = 0;
  for (var i = 0,n = this.length; i < n; i++){
	if(i in this){
	  result[ri++]  = fn.call(scope ,this[i],i,this);
	}
  }
return result;
};
var getWindowWH = function(){
	  return ["Height","Width"].map(function(name){
	  return window["inner"+name] ||
		document.compatMode === "CSS1Compat" && document.documentElement[ "client" + name ] || document.body[ "client" + name ]
	});
}
window.onload = function (){
	if(!+"\v1" && !document.querySelector) { //IE6 IE7
	 document.body.onresize = resize;
	} else { 
	  window.onresize = resize;
	}
	function resize() {
		wSize();
		return false;
	}
}
function wSize(){
	var str=getWindowWH();
	var strs= new Array();
	strs=str.toString().split(","); //字符串分割
	var h = strs[0] - 95-30;
	$('#leftMenu').height(h);
	$('#Main').height(h); 
}
wSize();

function sethighlight(n) {
	 $('.topmenu li span').removeClass('current');
	 $('#menu_'+n+' span').addClass('current');
	 $('#leftMenu dl').hide();
	 $('#nav_'+n).show();
	 
	 $('#leftMenu dl dd').removeClass('on');
	 $('#nav_'+n+' dd').eq(0).addClass('on');
	 url = $('#nav_'+n+' dd a').eq(0).attr('href');
	 window.main.location.href= url;
	 
}
sethighlight(0);
function gourl(n,url){
	$('#leftMenu dl dd').removeClass('on');
	$('#nav_'+n).addClass('on');
	window.main.location.href=url;
}

function gocacheurl(){
	mainurl = window.main.location.href;
	window.main.location.href= "/HCCM/index.php?g=Admin&m=Index&a=cache&forward="+encodeURIComponent(mainurl);
}

function toggleMenu(doit){
	if(doit==1){
		$('#Main_drop a.on').hide();
		$('#Main_drop a.off').show();
		$('#MainBox .main_box').css('margin-left','24px');
		$('#leftMenu').hide();
	}else{
		$('#Main_drop a.off').hide();
		$('#Main_drop a.on').show();
		$('#leftMenu').show();
		$('#MainBox .main_box').css('margin-left','224px');
	}
}	

