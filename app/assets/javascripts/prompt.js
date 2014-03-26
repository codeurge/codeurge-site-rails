$(function(){
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
// CodeUrge Nav
		$("a").bind( 'mouseenter', function(event) {
      var theUrl=$(this).attr( 'href' ); 
      switch (theUrl)
      {
      case "#top":
        container.shuffleLetters({"text": "cd ~"});
      	setTimeout(function(){ // Leave a 2 second pause
        	container.shuffleLetters({
        		"text": "Pragmatic Development"
        	});		
      	},2000);
        event.preventDefault();
        break;
				case "#":
	        container.shuffleLetters({"text": "Pragmatic Development"});
	        break;
      default:
        container.shuffleLetters({"text": "cd " + theUrl});
        break;
      }
      });

});
