(function($) {
    $.fn.collapser = function(started) {
      $(this).bind("click touchstart", function(){        
        var BUTTON = $(this);
        var NxtElement = $(this).next();
        NxtElement.stop(true, true).slideToggle();
      });
      
      if(started)
        $(this).trigger('click');
    };

})(jQuery);
