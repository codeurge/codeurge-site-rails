// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require jquery.turbolinks
//= require_tree .
//= require bootstrap

$(function() {

// Prompt Cursor Fade
  	function blink() {
    $("#prompt-cursor")
      .fadeTo(1100, 0.13)
      .fadeTo(1100, 1, function(){blink()});
    }
    blink();
    
    var pathname = window.location.pathname;
  	
    switch (pathname)
    {
      case "/":
    // Begin Prompt Logic
  	var container = $("#prompt")
  	var pathname = window.location.pathname;
  	setTimeout(function(){ // Leave a 1 second pause at open
    	container.shuffleLetters({
    		"text": "puts \"Hello World!\""
    	});		
  	},1000);
    break;
      default:
      // Begin Prompt Logic
    	var container = $("#prompt")
    	var pathname = window.location.pathname;
    	setTimeout(function(){ // Leave a 1 second pause at open
      	container.shuffleLetters({
      		"text": "grep " + pathname
      	});		
    	},1000);
      break;
    }
$(".meter > span").each(function() {
				$(this)
					.data("origWidth", $(this).width())
					.width(0)
					.animate({
						width: $(this).data("origWidth")
					}, 1200);
			});
// CodeUrge Nav
		$("a").bind( 'mouseenter', function(event) {
      var theUrl=$(this).attr( 'href' ); 
      switch (theUrl)
      {
      case "#top":
        container.shuffleLetters({"text": "cd ~"});
        $( 'html, body' ).stop().animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo' );
      	setTimeout(function(){ // Leave a 2 second pause
        	container.shuffleLetters({
        		"text": "Painless Web Development"
        	});		
      	},2000);
        event.preventDefault();
        break;
				case "#":
	        container.shuffleLetters({"text": "Painless Web Development"});
	        break;
      default:
        container.shuffleLetters({"text": "cd " + theUrl});
        break;
      }
      });
// First you forcibly request the scroll bars to be shown regardless if you they will be needed or not.
$('body').css('overflow', 'scroll');

// Viewport width with scroll bar.
var widthWithScrollBars = $(window).width();

$(window).resize(function() {
	widthWithScrollBars = $(window).width();
	
});

// Set the overflow css property back to whatever value it had before running this code. (default is auto)
$('body').css('overflow', 'auto');
		 	$window = $(window);
			switch (pathname) {
			case "/":
				var canvas = document.querySelector('canvas.home');
				var h = 585;
				var particlesNum = 80;
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
  this.rgba = colors[ Math.round( Math.random() * 3) ];
  this.vx = Math.round( Math.random() * 3) - 1.5;
  this.vy = Math.round( Math.random() * 3) - 1.5;
}
   
function draw(){
  ctx.clearRect(0, 0, w, h);
  ctx.globalCompositeOperation = 'lighter';
  for(var i = 0;i < particlesNum; i++){
    var temp = particles[i];
    var factor = 1;
     
    for(var j = 0; j<particlesNum; j++){
      
       var temp2 = particles[j];
       ctx.linewidth = 0.5;
      
       if(temp.rgba == temp2.rgba && findDistance(temp, temp2)<50){
          ctx.strokeStyle = temp.rgba;
          ctx.beginPath();
          ctx.moveTo(temp.x, temp.y);
          ctx.lineTo(temp2.x, temp2.y);
          ctx.stroke();
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
    ctx.arc(temp.x, temp.y, (temp.rad+5)*factor, 0, Math.PI*2, true);
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
});
