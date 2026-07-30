// ==========================================
// PHANTOM WRLD SCRIPT
// ==========================================

// Loading Screen

window.addEventListener("load", () => {

const loader = document.getElementById("loader");

if(loader){

setTimeout(() => {

loader.style.opacity = "0";

setTimeout(() => {

loader.style.display = "none";

},800);

},1200);

}

});

// Smooth Scroll

document.querySelectorAll("a[href^='#']").forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

// Particle Background

if(typeof tsParticles!=="undefined"){

tsParticles.load({

id:"particles",

options:{

background:{

color:"#050505"

},

fpsLimit:60,

particles:{

number:{

value:70

},

color:{

value:["#D4AF37","#00BFFF","#FFFFFF"]

},

links:{

enable:true,

distance:150,

color:"#444",

opacity:0.2

},

move:{

enable:true,

speed:2

},

opacity:{

value:0.5

},

size:{

value:3

}

}

}

});

}

// Fade In Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

});

document.querySelectorAll(".card,.product-card,.contact-card,.faq-box,.stat").forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition="all .8s";

observer.observe(el);

});

// Back To Top Button

const topButton=document.createElement("button");

topButton.innerHTML="↑";

topButton.style.position="fixed";

topButton.style.bottom="25px";

topButton.style.right="25px";

topButton.style.width="50px";

topButton.style.height="50px";

topButton.style.borderRadius="50%";

topButton.style.border="none";

topButton.style.background="#D4AF37";

topButton.style.color="#000";

topButton.style.fontSize="22px";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.zIndex="9999";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

