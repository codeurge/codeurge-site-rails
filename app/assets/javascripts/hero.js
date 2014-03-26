$(function() {
var pathname = window.location.pathname;

// First you forcibly request the scroll bars to be shown regardless if you they will be needed or not.
$('body').css('overflow', 'scroll');

// Set the overflow css property back to whatever value it had before running this code. (default is auto)
$('body').css('overflow', 'auto');
		 	$window = $(window);
			switch (pathname) {
			case "/":
				var canvas = document.querySelector('canvas.home');
				var h = 585;
				var particlesNum = 120;
				canvas.height = 585;
			break;
			case "/blog":
				var canvas = document.querySelector('canvas.articles');
				var h = 285;
				var particlesNum = 20;
				canvas.height = 285;
			break;
			case "/about":
				var canvas = document.querySelector('canvas.about');
				var h = 285;
				var particlesNum = 20;
				canvas.height = 285;
			break;
			case "/services":
				var canvas = document.querySelector('canvas.services');
				var h = 285;
				var particlesNum = 20;
				canvas.height = 285;
			break;
			case "/contact":
				var canvas = document.querySelector('canvas.contact');
				var h = 285;
				var particlesNum = 20;
				canvas.height = 285;
			break;
			default:
			var   canvas = document.querySelector('canvas.' + pathname);
			break;
			}
// Viewport width with scroll bar.
var widthWithScrollBars = $(window).width();

$(window).resize(function() {
	canvasAnimate();
});

function canvasAnimate() {
    var		 ctx = canvas.getContext('2d'),
			header = document.querySelector('header'),
   particles = [],
           w = widthWithScrollBars,
      colors = ['#d08356','#ebc471','#c2c98f','#74dad9','#fffedc'];
 
canvas.width = widthWithScrollBars;

//canvas.style.left = (window.innerWidth - 500)/2+'px';
if(window.innerHeight>500)
//canvas.style.top = (window.innerHeight - 500)/2+'px';

  
function Factory(){  
  this.x =  Math.round( Math.random() * w);
  this.y =  Math.round( Math.random() * h);
  this.rad = Math.round( Math.random() * 1) + 1;
  this.rgba = colors[ Math.round( Math.random() * 5) ];
  this.vx = Math.round( Math.random() * 1) - 1.5;
  this.vy = Math.round( Math.random() * 1) - 1.5;
}
   
function draw(){
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for(var i = 0;i < particlesNum; i++){
    var temp = particles[i];
    var factor = 1;
     
    for(var j = 0; j<particlesNum; j++){
      
       var temp2 = particles[j];
       ctx.lineWidth = 1.5;
      
       if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
          ctx.strokeStyle = temp.rgba;
          ctx.beginPath();
          ctx.moveTo(temp.x, temp.y);
          ctx.lineTo(temp2.x, temp2.y);
          ctx.stroke();
          factor++;
					factor++;
       }
    }
    
    
    ctx.fillStyle = temp.rgba;
    ctx.strokeStyle = temp.rgba;
    
    ctx.beginPath();
    ctx.arc(temp.x, temp.y, temp.rad*factor, 0, Math.PI*2, true);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.arc(temp.x, temp.y, (temp.rad+2)*factor, 0, Math.PI*2, true);
    ctx.stroke();
    ctx.closePath();
    

    temp.x += temp.vx;
    temp.y += temp.vy;
    
    if(temp.x > w)temp.x = 0;
    if(temp.x < 0)temp.x = w;
    if(temp.y > h)temp.y = 0;
    if(temp.y < 0)temp.y = h;
  }
}

function findDistance(p1,p2){  
  return Math.sqrt( Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2) );
}

window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

(function init(){
  for(var i = 0; i < particlesNum; i++){
    particles.push(new Factory);
  }
})();

(function loop(){
  draw();
  requestAnimFrame(loop);
})();
}
canvasAnimate();

});
