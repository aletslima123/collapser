var colapser = (function(){
	var _colapser = function(elements, started)
  {
    $(elements).bind("click touchstart", function(){
    	console.log(this);
      var BUTTON = $(this);
      var NxtElement = $(this).next();
      NxtElement.stop(true, true).slideToggle();
    });
    
    if(started)
  		$(elements).trigger('click');
  };
  
  return _colapser;
})();

//aqui executa o seu plugin
colapser('#first-container button, #second-container button', false);