var PHONE="2348106754141";
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var ws=["Bespoke Suits","Corporate Outfits","African Wear","Luxury · Style · Lifestyle"];
$("#mq").innerHTML=ws.concat(ws,ws,ws).map(function(w){return"<span>"+w+"</span>"}).join("");
addEventListener("scroll",function(){var h=document.documentElement.scrollHeight-innerHeight;$("#tp i").style.transform="scaleX("+(h>0?scrollY/h:0)+")"},{passive:true});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("on");io.unobserve(e.target)}})},{threshold:.15});
$$("[data-r]").forEach(function(e){io.observe(e)});
if(matchMedia("(pointer:fine)").matches&&!matchMedia("(prefers-reduced-motion: reduce)").matches){
 var g=$("#gl");addEventListener("pointermove",function(e){g.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"});
 $$(".tilt").forEach(function(el){el.addEventListener("pointermove",function(e){var r=el.getBoundingClientRect(),x=(e.clientX-r.left)/r.width,y=(e.clientY-r.top)/r.height;el.style.setProperty("--mx",x*100+"%");el.style.setProperty("--my",y*100+"%");el.style.transform="perspective(900px) rotateY("+(x-.5)*8+"deg) rotateX("+(.5-y)*8+"deg)"});el.addEventListener("pointerleave",function(){el.style.transform=""})});
}else{$("#gl").style.display="none"}
$("#f").onsubmit=function(ev){ev.preventDefault();var t="Hello A.J Couture, my name is "+$("#n").value+". I need: "+$("#o").value+". "+$("#m").value;window.open("https://wa.me/"+PHONE+"?text="+encodeURIComponent(t),"_blank")};
