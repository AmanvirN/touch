<!-- For more info on jQuery Mobile,  touch gestures and other useful events see : http://api.jquerymobile.com/category/events/ -->

$(document).on("pagecreate","#pageone",function(){
  
  	$('#tapholdtext').on("taphold",function(){
    	$(this).hide();
 	});                       

	$('#taptext').on("tap",function(){
    	$(this).css('color', 'red');
 	}); 

	$('#swipetext').on("swipeleft",function(){
    	$(this).css('color', 'green');
  	});   
	
	$('#swipetext').on("swiperight",function(){
    	$(this).css('color', 'blue');
  	});  
	
	$('#taprandom').on("tap",function(){
    	$(this).css('color', 'green');
		random();
		
  	});  
	
function random() { 
	
	var display;
	var TextNo = !Math.round(Math.random());
	
	if (TextNo <=0.5)
	{
	display = "true";
	}
	
	if (TextNo >0.5)
	{
	display = "false";
	}
	alert(display);

	//return !Math.round(Math.random());
}
});